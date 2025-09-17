import React, { useState } from 'react';
import { AlertTriangle, Eye, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';

export function HealthNoticeBoard() {
  const { t } = useI18n();
  const [showAll, setShowAll] = useState(false);
  
  const diseases = Object.values(t.healthNoticeBoard.diseases);
  const displayedDiseases = showAll ? diseases : diseases.slice(0, 2);

  return (
    <Card className="card-elevated bg-gradient-subtle border-warning/20">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
            <AlertTriangle className="h-5 w-5 text-warning" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground">
              {t.healthNoticeBoard.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t.healthNoticeBoard.subtitle}
            </p>
          </div>
          <Badge className="triage-badge chw-visit">
            {t.healthNoticeBoard.live}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {displayedDiseases.map((disease, index) => (
          <div key={index} className="border border-border rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              {disease.name}
            </h4>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-destructive" />
                  <span className="text-sm font-medium text-foreground">
                    {t.healthNoticeBoard.symptoms}
                  </span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  {disease.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-destructive mt-1">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium text-foreground">
                    {t.healthNoticeBoard.precautions}
                  </span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  {disease.precautions.map((precaution, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-success mt-1">•</span>
                      <span>{precaution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        
        {diseases.length > 2 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="w-full"
          >
            {showAll ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                {t.healthNoticeBoard.showLess}
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                {t.healthNoticeBoard.seeMore}
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}