// Offline-first architecture with sync queue and IndexedDB persistence

import { openDB, IDBPDatabase } from 'idb';

export interface SyncQueueItem {
  id: string;
  type: 'consult' | 'vitals' | 'registration' | 'prescription';
  data: any;
  timestamp: number;
  status: 'pending' | 'syncing' | 'synced' | 'failed';
  retryCount: number;
}

export interface OfflineData {
  patients: Patient[];
  consults: Consult[];
  vitals: VitalRecord[];
  syncQueue: SyncQueueItem[];
}

export interface Patient {
  id: string;
  phoneNumber: string;
  aadhaarNumber?: string;
  fullName: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  village: string;
  createdAt: number;
  updatedAt: number;
}

export interface Consult {
  id: string;
  patientId: string;
  type: 'async' | 'live';
  symptoms: string;
  images: string[];
  vitals?: VitalRecord;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  triage?: 'home-care' | 'chw-visit' | 'doctor-consult' | 'emergency';
  triageConfidence?: number;
  doctorResponse?: string;
  prescription?: string;
  createdAt: number;
  updatedAt: number;
}

export interface VitalRecord {
  id: string;
  patientId: string;
  bloodPressure?: { systolic: number; diastolic: number };
  heartRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
  bloodGlucose?: number;
  weight?: number;
  height?: number;
  createdAt: number;
}

class OfflineManager {
  private db: IDBPDatabase | null = null;
  private syncListeners: ((status: 'syncing' | 'synced' | 'failed') => void)[] = [];

  async init() {
    this.db = await openDB('nabha-health', 1, {
      upgrade(db) {
        // Create object stores
        db.createObjectStore('patients', { keyPath: 'id' });
        db.createObjectStore('consults', { keyPath: 'id' });
        db.createObjectStore('vitals', { keyPath: 'id' });
        db.createObjectStore('syncQueue', { keyPath: 'id' });
        db.createObjectStore('settings', { keyPath: 'key' });
      },
    });
  }

  // Sync queue management
  async addToSyncQueue(item: Omit<SyncQueueItem, 'id' | 'timestamp' | 'status' | 'retryCount'>) {
    if (!this.db) await this.init();
    
    const queueItem: SyncQueueItem = {
      ...item,
      id: `sync_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      status: 'pending',
      retryCount: 0,
    };

    await this.db!.add('syncQueue', queueItem);
    
    // Trigger sync if online
    if (navigator.onLine) {
      this.processSync();
    }

    return queueItem.id;
  }

  async getSyncQueue(): Promise<SyncQueueItem[]> {
    if (!this.db) await this.init();
    return await this.db!.getAll('syncQueue');
  }

  async processSync() {
    if (!navigator.onLine) return;
    
    this.notifyListeners('syncing');
    
    try {
      const queue = await this.getSyncQueue();
      const pendingItems = queue.filter(item => item.status === 'pending' || item.status === 'failed');
      
      for (const item of pendingItems) {
        try {
          await this.syncItem(item);
          await this.updateSyncItemStatus(item.id, 'synced');
        } catch (error) {
          console.error('Sync failed for item:', item.id, error);
          await this.updateSyncItemStatus(item.id, 'failed');
          await this.incrementRetryCount(item.id);
        }
      }
      
      this.notifyListeners('synced');
    } catch (error) {
      console.error('Sync process failed:', error);
      this.notifyListeners('failed');
    }
  }

  private async syncItem(item: SyncQueueItem) {
    // This would integrate with your backend API
    const response = await fetch(`/api/${item.type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(item.data),
    });

    if (!response.ok) {
      throw new Error(`Sync failed: ${response.statusText}`);
    }

    return response.json();
  }

  private async updateSyncItemStatus(id: string, status: SyncQueueItem['status']) {
    if (!this.db) return;
    
    const item = await this.db.get('syncQueue', id);
    if (item) {
      item.status = status;
      await this.db.put('syncQueue', item);
    }
  }

  private async incrementRetryCount(id: string) {
    if (!this.db) return;
    
    const item = await this.db.get('syncQueue', id);
    if (item) {
      item.retryCount++;
      await this.db.put('syncQueue', item);
    }
  }

  // Data persistence methods
  async savePatient(patient: Patient) {
    if (!this.db) await this.init();
    await this.db!.put('patients', patient);
    
    // Add to sync queue
    await this.addToSyncQueue({
      type: 'registration',
      data: patient,
    });
  }

  async getPatients(): Promise<Patient[]> {
    if (!this.db) await this.init();
    return await this.db!.getAll('patients');
  }

  async saveConsult(consult: Consult) {
    if (!this.db) await this.init();
    await this.db!.put('consults', consult);
    
    // Add to sync queue
    await this.addToSyncQueue({
      type: 'consult',
      data: consult,
    });
  }

  async getConsults(): Promise<Consult[]> {
    if (!this.db) await this.init();
    return await this.db!.getAll('consults');
  }

  async saveVitals(vitals: VitalRecord) {
    if (!this.db) await this.init();
    await this.db!.put('vitals', vitals);
    
    // Add to sync queue
    await this.addToSyncQueue({
      type: 'vitals',
      data: vitals,
    });
  }

  async getVitals(patientId?: string): Promise<VitalRecord[]> {
    if (!this.db) await this.init();
    const allVitals = await this.db!.getAll('vitals');
    
    if (patientId) {
      return allVitals.filter(vital => vital.patientId === patientId);
    }
    
    return allVitals;
  }

  // Sync status listeners
  addSyncListener(listener: (status: 'syncing' | 'synced' | 'failed') => void) {
    this.syncListeners.push(listener);
  }

  removeSyncListener(listener: (status: 'syncing' | 'synced' | 'failed') => void) {
    this.syncListeners = this.syncListeners.filter(l => l !== listener);
  }

  private notifyListeners(status: 'syncing' | 'synced' | 'failed') {
    this.syncListeners.forEach(listener => listener(status));
  }

  // Network status management
  setupNetworkListeners() {
    window.addEventListener('online', () => {
      console.log('Network connected - starting sync');
      this.processSync();
    });

    window.addEventListener('offline', () => {
      console.log('Network disconnected');
    });
  }

  isOnline(): boolean {
    return navigator.onLine;
  }
}

export const offlineManager = new OfflineManager();

// React hooks for offline functionality
import { useState, useEffect } from 'react';

export function useOfflineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export function useSyncStatus() {
  const [syncStatus, setSyncStatus] = useState<'syncing' | 'synced' | 'failed' | 'idle'>('idle');
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    const listener = (status: 'syncing' | 'synced' | 'failed') => {
      setSyncStatus(status);
    };

    offlineManager.addSyncListener(listener);
    
    // Get initial pending count
    offlineManager.getSyncQueue().then(queue => {
      setPendingCount(queue.filter(item => item.status === 'pending').length);
    });

    return () => {
      offlineManager.removeSyncListener(listener);
    };
  }, []);

  return { syncStatus, pendingCount };
}