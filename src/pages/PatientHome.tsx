import React from 'react';
import { MessageSquare, Activity, Calendar, Users, MapPin, Clock, FileText, Heart, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VideoConsultation } from '@/components/patient/VideoConsultation';
import { HealthNoticeBoard } from '@/components/patient/HealthNoticeBoard';
import { DemoProfile } from '@/components/patient/DemoProfile';
import { DemoMedicalRecord } from '@/components/patient/DemoMedicalRecord';
import { useI18n } from '@/lib/i18n';

export function PatientHome() {
  const { t } = useI18n();

  const quickActions = [
    {
      title: t.bookConsult,
      description: 'Get medical advice from qualified doctors',
      icon: MessageSquare,
      href: '/consult',
      variant: 'hero' as const,
    },
    {
      title: t.addVitals,
      description: 'Record your health measurements',
      icon: Activity,
      href: '/vitals',
      variant: 'warm' as const,
    },
  ];

  const recentActivity = [
    {
      type: 'consult',
      title: 'Video consultation completed',
      subtitle: 'Dr. Priya Sharma - General Medicine',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      type: 'vitals',
      title: 'Blood pressure recorded',
      subtitle: '120/80 mmHg - Normal range',
      time: '1 day ago',
      status: 'normal',
    },
    {
      type: 'prescription',
      title: 'E-prescription issued',
      subtitle: 'Paracetamol 500mg - Available at local pharmacy',
      time: '2 days ago',
      status: 'available',
    },
    {
      type: 'vitals',
      title: 'Blood glucose measured',
      subtitle: '95 mg/dL - Normal fasting level',
      time: '3 days ago',
      status: 'normal',
    },
    {
      type: 'consult',
      title: 'Follow-up appointment scheduled',
      subtitle: 'Dr. Rajesh Kumar - Pediatrics',
      time: '4 days ago',
      status: 'scheduled',
    },
    {
      type: 'prescription',
      title: 'Lab test results available',
      subtitle: 'Complete Blood Count - All values normal',
      time: '5 days ago',
      status: 'available',
    },
    {
      type: 'vitals',
      title: 'Temperature recorded',
      subtitle: '98.6°F - Normal body temperature',
      time: '1 week ago',
      status: 'normal',
    },
  ];

  const healthStats = {
    consultations: 12,
    vitalsRecorded: 28,
    prescriptions: 8,
    lastCheckup: '15 days ago',
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">
          Welcome to {t.appName}
        </h1>
        <p className="text-muted-foreground">
          {t.tagline}
        </p>
      </div>

      {/* Nabha Context Card */}
      <Card className="card-elevated bg-gradient-subtle">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold text-foreground">
              Nabha Civil Hospital Network
            </h3>
            <p className="text-sm text-muted-foreground">
              11/23 doctors staffed • Serving 173 villages
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Available 24/7 for emergencies</span>
            </div>
          </div>
          <Badge className="triage-badge doctor-consult">
            Connected
          </Badge>
        </div>
      </Card>

      {/* Health Notice Board */}
      <HealthNoticeBoard />

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card key={index} className="card-elevated hover:shadow-strong transition-all duration-normal">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                </div>
                <Button 
                  variant={action.variant} 
                  size="touch-lg" 
                  className="w-full"
                  asChild
                >
                  <a href={action.href}>{action.title}</a>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Health Stats */}
      <Card className="card-elevated">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Your Health Summary
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">
                {healthStats.consultations}
              </div>
              <div className="text-xs text-muted-foreground">
                Consultations
              </div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-secondary">
                {healthStats.vitalsRecorded}
              </div>
              <div className="text-xs text-muted-foreground">
                Vitals Recorded
              </div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-success">
                {healthStats.prescriptions}
              </div>
              <div className="text-xs text-muted-foreground">
                Prescriptions
              </div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-sm font-medium text-foreground">
                {healthStats.lastCheckup}
              </div>
              <div className="text-xs text-muted-foreground">
                Last Checkup
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Demo Profile */}
      <DemoProfile />

      {/* Demo Medical Record */}
      <DemoMedicalRecord />

      {/* Video Consultation Section */}
      <VideoConsultation />

      {/* Recent Activity */}
      <Card className="card-elevated">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Recent Activity
            </h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {recentActivity.slice(0, 5).map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  {activity.type === 'consult' && <MessageSquare className="h-4 w-4 text-primary" />}
                  {activity.type === 'vitals' && <Activity className="h-4 w-4 text-secondary" />}
                  {activity.type === 'prescription' && <FileText className="h-4 w-4 text-success" />}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    {activity.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
                <Badge 
                  className={
                    activity.status === 'completed' ? 'triage-badge home-care' :
                    activity.status === 'normal' ? 'triage-badge chw-visit' :
                    activity.status === 'scheduled' ? 'triage-badge doctor-consult' :
                    'triage-badge doctor-consult'
                  }
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* CHW Contact Card */}
      <Card className="card-subtle border-secondary/20 bg-secondary-light/5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
            <Users className="h-6 w-6 text-secondary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">
              Community Health Worker
            </h3>
            <p className="text-sm text-muted-foreground">
              Simran Kaur - Available for home visits and assistance
            </p>
          </div>
          <Button variant="outline" size="sm">
            Contact CHW
          </Button>
        </div>
      </Card>
    </div>
  );
}