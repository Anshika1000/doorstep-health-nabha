import React, { useState } from 'react';
import { Heart, Thermometer, Droplets, Zap, Weight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useI18n } from '@/lib/i18n';
import { offlineManager, VitalRecord } from '@/lib/offline';
import { useToast } from '@/hooks/use-toast';

interface VitalData {
  bloodPressure?: { systolic: number; diastolic: number };
  heartRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
  bloodGlucose?: number;
  weight?: number;
}

interface VitalsEntryProps {
  patientId?: string;
  onVitalsSaved?: (vitals: VitalRecord) => void;
}

export function VitalsEntry({ patientId = 'current-user', onVitalsSaved }: VitalsEntryProps) {
  const { t } = useI18n();
  const { toast } = useToast();
  const [vitals, setVitals] = useState<VitalData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateVital = (key: keyof VitalData, value: any) => {
    setVitals(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (Object.keys(vitals).length === 0) {
      toast({
        title: 'No vitals entered',
        description: 'Please enter at least one vital sign',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const vitalRecord: VitalRecord = {
        id: `vital_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        patientId,
        ...vitals,
        createdAt: Date.now(),
      };

      await offlineManager.saveVitals(vitalRecord);
      
      toast({
        title: t.workingSaved,
        description: t.willSyncWhenOnline,
      });

      onVitalsSaved?.(vitalRecord);
      setVitals({});
    } catch (error) {
      console.error('Failed to save vitals:', error);
      toast({
        title: 'Error saving vitals',
        description: 'Please try again',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const vitalFields = [
    {
      key: 'heartRate',
      label: 'Heart Rate',
      unit: 'bpm',
      icon: Heart,
      placeholder: '72',
      type: 'number',
      min: 40,
      max: 200,
    },
    {
      key: 'temperature',
      label: 'Temperature',
      unit: '°F',
      icon: Thermometer,
      placeholder: '98.6',
      type: 'number',
      step: 0.1,
      min: 95,
      max: 110,
    },
    {
      key: 'oxygenSaturation',
      label: 'Oxygen Saturation',
      unit: '%',
      icon: Droplets,
      placeholder: '98',
      type: 'number',
      min: 80,
      max: 100,
    },
    {
      key: 'bloodGlucose',
      label: 'Blood Glucose',
      unit: 'mg/dL',
      icon: Zap,
      placeholder: '100',
      type: 'number',
      min: 50,
      max: 500,
    },
    {
      key: 'weight',
      label: 'Weight',
      unit: 'kg',
      icon: Weight,
      placeholder: '70',
      type: 'number',
      min: 30,
      max: 300,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="card-elevated">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            {t.addVitals}
          </h2>
          <p className="text-sm text-muted-foreground">
            Enter your vital signs for health monitoring
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Blood Pressure - Special case with two inputs */}
            <div className="form-field sm:col-span-2">
              <label className="form-label flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Blood Pressure
              </label>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="120"
                  className="form-input"
                  value={vitals.bloodPressure?.systolic || ''}
                  onChange={(e) => updateVital('bloodPressure', {
                    ...vitals.bloodPressure,
                    systolic: parseInt(e.target.value) || 0,
                    diastolic: vitals.bloodPressure?.diastolic || 0,
                  })}
                  min={80}
                  max={250}
                />
                <span className="text-muted-foreground">/</span>
                <Input
                  type="number"
                  placeholder="80"
                  className="form-input"
                  value={vitals.bloodPressure?.diastolic || ''}
                  onChange={(e) => updateVital('bloodPressure', {
                    ...vitals.bloodPressure,
                    systolic: vitals.bloodPressure?.systolic || 0,
                    diastolic: parseInt(e.target.value) || 0,
                  })}
                  min={40}
                  max={150}
                />
                <span className="text-sm text-muted-foreground">mmHg</span>
              </div>
            </div>

            {vitalFields.map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.key} className="form-field">
                  <label className="form-label flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {field.label}
                  </label>
                  <div className="relative">
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="form-input pr-12"
                      value={String(vitals[field.key as keyof VitalData] || '')}
                      onChange={(e) => updateVital(field.key as keyof VitalData, 
                        field.type === 'number' ? parseFloat(e.target.value) || undefined : e.target.value
                      )}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      {field.unit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex gap-3">
              <Button
                variant="hero"
                size="touch-lg"
                onClick={handleSubmit}
                loading={isSubmitting}
                className="flex-1"
              >
                {t.save} {t.addVitals}
              </Button>
              <Button
                variant="outline"
                size="touch-lg"
                onClick={() => setVitals({})}
                disabled={isSubmitting}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Bluetooth Device Pairing Placeholder */}
      <Card className="card-subtle">
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Connect Health Devices
          </h3>
          <p className="text-xs text-muted-foreground">
            Pair with Bluetooth devices for automatic vital monitoring
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" disabled>
              Blood Pressure Monitor
            </Button>
            <Button variant="outline" size="sm" disabled>
              Pulse Oximeter
            </Button>
            <Button variant="outline" size="sm" disabled>
              Glucometer
            </Button>
            <Button variant="outline" size="sm" disabled>
              Thermometer
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Device pairing coming soon
          </p>
        </div>
      </Card>
    </div>
  );
}