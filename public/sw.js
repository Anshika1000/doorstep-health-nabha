// Nabha Health Connect Service Worker
// Implements offline-first caching strategy

const CACHE_NAME = 'nabha-health-v1';
const OFFLINE_PAGE = '/offline.html';

// Core files that should always be cached
const CORE_CACHE_FILES = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
];

// API endpoints that should be cached when available
const API_CACHE_PATTERNS = [
  /\/api\/patients/,
  /\/api\/consults/,
  /\/api\/vitals/,
  /\/api\/pharmacy/,
];

// Install event - cache core files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching core files');
        return cache.addAll(CORE_CACHE_FILES);
      })
      .then(() => {
        console.log('Service Worker: Core files cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Cache installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests for caching
  if (request.method !== 'GET') {
    return;
  }

  // Handle navigation requests (pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful page responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Return cached page or offline page
          return caches.match(request)
            .then((response) => response || caches.match(OFFLINE_PAGE));
        })
    );
    return;
  }

  // Handle API requests with cache-first strategy
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // Return cached response and update in background
            fetch(request)
              .then((response) => {
                if (response.status === 200) {
                  const responseClone = response.clone();
                  caches.open(CACHE_NAME)
                    .then((cache) => cache.put(request, responseClone));
                }
              })
              .catch(() => {
                // Network failed, but we have cached data
              });
            
            return cachedResponse;
          }
          
          // No cached version, try network
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(request, responseClone));
              }
              return response;
            })
            .catch(() => {
              // Return offline indicator for API calls
              return new Response(
                JSON.stringify({ 
                  error: 'Offline', 
                  message: 'This request will be processed when you\'re back online' 
                }),
                {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                  }
                }
              );
            });
        })
    );
    return;
  }

  // Handle static assets with cache-first strategy
  if (request.destination === 'image' || 
      request.destination === 'style' || 
      request.destination === 'script' ||
      request.destination === 'font') {
    
    event.respondWith(
      caches.match(request)
        .then((response) => {
          return response || fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(request, responseClone));
              }
              return response;
            });
        })
    );
    return;
  }

  // Default: try network first, fallback to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(request, responseClone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Background sync for offline data
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered', event.tag);
  
  if (event.tag === 'sync-queue') {
    event.waitUntil(
      syncOfflineData()
    );
  }
});

// Sync offline data when connection is restored
async function syncOfflineData() {
  try {
    // This would integrate with your IndexedDB offline manager
    console.log('Service Worker: Syncing offline data...');
    
    // Get sync queue from IndexedDB
    const syncQueue = await getSyncQueue();
    
    for (const item of syncQueue) {
      try {
        await syncItem(item);
        await removeSyncItem(item.id);
      } catch (error) {
        console.error('Service Worker: Failed to sync item', item.id, error);
        await incrementRetryCount(item.id);
      }
    }
    
    console.log('Service Worker: Offline data sync completed');
  } catch (error) {
    console.error('Service Worker: Sync failed', error);
  }
}

// Push notifications for prescription updates, appointment reminders
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: data.data,
    actions: data.actions || [],
    requireInteraction: data.urgent || false,
    silent: !data.urgent,
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action) {
    // Handle action buttons
    switch (event.action) {
      case 'view':
        event.waitUntil(
          clients.openWindow(event.notification.data.url)
        );
        break;
      case 'call':
        // Handle call action
        break;
    }
  } else {
    // Handle default click
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Helper functions for IndexedDB integration
async function getSyncQueue() {
  // This would integrate with your offline manager
  return [];
}

async function syncItem(item) {
  const response = await fetch(`/api/${item.type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${item.authToken}`,
    },
    body: JSON.stringify(item.data),
  });
  
  if (!response.ok) {
    throw new Error(`Sync failed: ${response.statusText}`);
  }
  
  return response.json();
}

async function removeSyncItem(id) {
  // Remove from IndexedDB sync queue
}

async function incrementRetryCount(id) {
  // Increment retry count in IndexedDB
}