import React from 'react';
import { Wifi, WifiOff, RotateCcw, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { useOfflineStatus, useSyncStatus } from '@/lib/offline';
import { useI18n } from '@/lib/i18n';
import { offlineManager } from '@/lib/offline';

export function OfflineIndicator() {
  const isOnline = useOfflineStatus();
  const { syncStatus, pendingCount } = useSyncStatus();
  const { t } = useI18n();

  const handleSyncNow = () => {
    if (isOnline) {
      offlineManager.processSync();
    }
  };

  const getSyncStatusInfo = () => {
    if (!isOnline) {
      return {
        icon: WifiOff,
        text: t.offline,
        variant: 'offline' as const,
        description: t.offlineMode,
      };
    }

    switch (syncStatus) {
      case 'syncing':
        return {
          icon: RotateCcw,
          text: 'Syncing...',
          variant: 'pending' as const,
          description: 'Syncing your data...',
        };
      case 'synced':
        return {
          icon: CheckCircle,
          text: t.synced,
          variant: 'synced' as const,
          description: 'All data synced',
        };
      case 'failed':
        return {
          icon: AlertCircle,
          text: 'Sync Failed',
          variant: 'pending' as const,
          description: 'Will retry automatically',
        };
      default:
        return {
          icon: Wifi,
          text: t.online,
          variant: 'synced' as const,
          description: 'Connected',
        };
    }
  };

  const statusInfo = getSyncStatusInfo();
  const StatusIcon = statusInfo.icon;

  if (!isOnline) {
    return (
      <div className="offline-banner">
        <div className="flex items-center justify-center gap-2">
          <WifiOff className="h-4 w-4" />
          <span>{statusInfo.description}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`sync-indicator ${statusInfo.variant}`}>
        <StatusIcon className={`h-3 w-3 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
        <span className="text-xs">{statusInfo.text}</span>
        {pendingCount > 0 && (
          <Badge variant="secondary" className="ml-1 h-4 px-1 text-xs">
            {pendingCount}
          </Badge>
        )}
      </div>

      {isOnline && (syncStatus === 'failed' || pendingCount > 0) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSyncNow}
          className="h-6 px-2 text-xs"
          loading={syncStatus === 'syncing'}
        >
          {t.syncPending}
        </Button>
      )}
    </div>
  );
}