import React from 'react';
import { SymptomChecker } from '@/components/patient/SymptomChecker';
import { useI18n } from '@/lib/i18n';

export function ConsultPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">
          {t.consult}
        </h1>
        <p className="text-muted-foreground">
          Get medical advice and health guidance from qualified professionals
        </p>
      </div>

      <SymptomChecker />
    </div>
  );
}