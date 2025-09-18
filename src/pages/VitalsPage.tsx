import React from 'react';
import { VitalsEntry } from '@/components/patient/VitalsEntry';
import { useI18n } from '@/components/providers/I18nProvider';

export function VitalsPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">
          {t.vitals}
        </h1>
        <p className="text-muted-foreground">
          Track your vital signs for better health monitoring
        </p>
      </div>

      <VitalsEntry />
    </div>
  );
}