import React from 'react';
import { User, MapPin, Languages, Heart, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';

export function DemoProfile() {
  const { t } = useI18n();

  return (
    <Card className="card-elevated border-dashed border-2 border-warning/30 bg-warning/5">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning/10">
            <User className="h-4 w-4 text-warning" />
          </div>
          <CardTitle className="text-lg">{(t as any).demoProfile?.title || 'Demo Profile'}</CardTitle>
          <Badge variant="secondary" className="text-xs">Demo</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-semibold text-foreground">
                  {(t as any).demoProfile?.name || 'Raj Kumar'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {(t as any).demoProfile?.age || 'Age'}: 45
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {(t as any).demoProfile?.village || 'Village'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(t as any).demoProfile?.kakarMajra || 'Kakar Majra, Nabha'}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {(t as any).demoProfile?.condition || 'Condition'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(t as any).demoProfile?.diabetes || 'Diabetes (Follow-up)'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {(t as any).demoProfile?.preferredLanguage || 'Preferred Language'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(t as any).demoProfile?.punjabi || 'Punjabi'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Demo Note */}
        <div className="flex items-center gap-2 p-3 bg-warning/5 rounded-lg border border-warning/20">
          <AlertCircle className="h-4 w-4 text-warning" />
          <p className="text-xs text-warning-foreground font-medium">
            {(t as any).demoProfile?.demoNote || 'Demo profile for presentation only'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}