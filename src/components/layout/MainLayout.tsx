import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { ConvAIWidget } from '@/components/ui/ConvAIWidget';
import { cn } from '@/lib/utils';
import { offlineManager } from '@/lib/offline';

interface MainLayoutProps {
  children: React.ReactNode;
  mode?: 'patient' | 'doctor' | 'pharmacy' | 'chw';
}

export function MainLayout({ children, mode = 'patient' }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Initialize offline manager
    offlineManager.init();
    offlineManager.setupNetworkListeners();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed inset-y-16 left-0 z-40 w-64 transform bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex h-full flex-col overflow-y-auto">
            <Navigation mode={mode} onItemClick={() => setSidebarOpen(false)} />
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-4 lg:p-6">
            {children}
          </div>
        </main>
      </div>
      
      {/* ElevenLabs ConvAI Widget */}
      <ConvAIWidget />
    </div>
  );
}