import { useState, useEffect } from 'react';
import { offlineManager } from '@/lib/offline';

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