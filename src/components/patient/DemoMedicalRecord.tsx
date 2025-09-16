import React from 'react';
import { Calendar, Stethoscope, Pill, Building2, Clock, FileText, Download, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';

export function DemoMedicalRecord() {
  const { t } = useI18n();

  return (
    <Card className="card-elevated border-dashed border-2 border-info/30 bg-info/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-info/10">
              <FileText className="h-4 w-4 text-info" />
            </div>
            <CardTitle className="text-lg">
              {(t as any).demoMedicalRecord?.title || 'Recent Records'}
            </CardTitle>
            <Badge variant="secondary" className="text-xs">Demo</Badge>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground">12 Sept 2025</p>
            <p className="text-xs text-muted-foreground">
              {(t as any).demoMedicalRecord?.consultation || 'Consultation'}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Doctor Info */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Stethoscope className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Dr. Simran Kaur</p>
            <p className="text-sm text-muted-foreground">
              {(t as any).demoMedicalRecord?.generalPhysician || 'General Physician'}
            </p>
          </div>
        </div>

        {/* Medical Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">
                  {(t as any).demoMedicalRecord?.symptoms || 'Symptoms'}
                </p>
              </div>
              <p className="text-xs text-muted-foreground ml-6">
                {(t as any).demoMedicalRecord?.fatigueMedical || 'Fatigue, frequent urination'}
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Pill className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">
                  {(t as any).demoMedicalRecord?.prescription || 'Prescription'}
                </p>
              </div>
              <p className="text-xs text-muted-foreground ml-6">
                {(t as any).demoMedicalRecord?.metforminPrescription || 'Metformin 500 mg, twice daily'}
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">
                  {(t as any).demoMedicalRecord?.pharmacyStatus || 'Pharmacy Status'}
                </p>
              </div>
              <p className="text-xs text-success ml-6">
                {(t as any).demoMedicalRecord?.availableAtHospital || 'Available at Nabha Civil Hospital Pharmacy'}
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">
                  {(t as any).demoMedicalRecord?.nextFollowup || 'Next Follow-up'}
                </p>
              </div>
              <p className="text-xs text-muted-foreground ml-6">26 Sept 2025</p>
            </div>
          </div>
        </div>

        {/* Demo Note */}
        <div className="flex items-center gap-2 p-3 bg-info/5 rounded-lg border border-info/20">
          <AlertCircle className="h-4 w-4 text-info" />
          <p className="text-xs text-info-foreground font-medium">
            {(t as any).demoMedicalRecord?.sampleRecord || 'Sample record for demo'}
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1" disabled>
            <FileText className="h-4 w-4 mr-1" />
            {(t as any).demoMedicalRecord?.viewMore || 'View More'}
          </Button>
          <Button variant="outline" size="sm" className="flex-1" disabled>
            <Download className="h-4 w-4 mr-1" />
            {(t as any).demoMedicalRecord?.downloadRecord || 'Download Record'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}