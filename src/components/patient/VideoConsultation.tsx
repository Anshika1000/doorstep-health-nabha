import React from 'react';
import { Video, Star, MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useI18n } from '@/components/providers/I18nProvider';
import drPriyaSharma from '@/assets/dr-priya-sharma.jpg';
import drRajeshKumar from '@/assets/dr-rajesh-kumar.jpg';
import drAnjaliPatel from '@/assets/dr-anjali-patel.jpg';
import drHarpreetSingh from '@/assets/dr-harpreet-singh.jpg';
import drFatimaSheikh from '@/assets/dr-fatima-sheikh.jpg';
import drSureshReddy from '@/assets/dr-suresh-reddy.jpg';
import drMeeraChatterjee from '@/assets/dr-meera-chatterjee.jpg';
import drArjunNair from '@/assets/dr-arjun-nair.jpg';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  location: string;
  nextAvailable: string;
  languages: string[];
  status: 'online' | 'busy' | 'offline';
  avatar: string;
}

export function VideoConsultation() {
  const { t } = useI18n();

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      specialty: 'General Medicine',
      experience: 15,
      rating: 4.8,
      reviews: 156,
      location: 'Nabha Civil Hospital',
      nextAvailable: '2:30 PM Today',
      languages: ['English', 'Hindi', 'Punjabi'],
      status: 'online',
      avatar: drPriyaSharma
    },
    {
      id: '2', 
      name: 'Dr. Rajesh Kumar',
      specialty: 'Pediatrics',
      experience: 12,
      rating: 4.9,
      reviews: 203,
      location: 'Remote Consultation',
      nextAvailable: '3:15 PM Today',
      languages: ['English', 'Hindi', 'Bengali'],
      status: 'online',
      avatar: drRajeshKumar
    },
    {
      id: '3',
      name: 'Dr. Anjali Patel',
      specialty: 'Cardiology',
      experience: 18,
      rating: 4.7,
      reviews: 89,
      location: 'Nabha Civil Hospital',
      nextAvailable: '4:00 PM Today',
      languages: ['English', 'Hindi', 'Gujarati'],
      status: 'busy',
      avatar: drAnjaliPatel
    },
    {
      id: '4',
      name: 'Dr. Harpreet Singh',
      specialty: 'Emergency Medicine',
      experience: 10,
      rating: 4.6,
      reviews: 124,
      location: 'Nabha Civil Hospital',
      nextAvailable: '5:30 PM Today',
      languages: ['English', 'Hindi', 'Urdu'],
      status: 'online',
      avatar: drHarpreetSingh
    },
    {
      id: '5',
      name: 'Dr. Fatima Sheikh',
      specialty: 'Gynecology',
      experience: 14,
      rating: 4.9,
      reviews: 178,
      location: 'Remote Consultation',
      nextAvailable: '1:45 PM Today',
      languages: ['English', 'Hindi', 'Marathi'],
      status: 'online',
      avatar: drFatimaSheikh
    },
    {
      id: '6',
      name: 'Dr. Suresh Reddy',
      specialty: 'Orthopedics',
      experience: 16,
      rating: 4.8,
      reviews: 145,
      location: 'Nabha Civil Hospital',
      nextAvailable: '6:00 PM Today',
      languages: ['English', 'Hindi', 'Telugu'],
      status: 'online',
      avatar: drSureshReddy
    },
    {
      id: '7',
      name: 'Dr. Meera Chatterjee',
      specialty: 'Dermatology',
      experience: 11,
      rating: 4.7,
      reviews: 98,
      location: 'Remote Consultation',
      nextAvailable: '3:30 PM Today',
      languages: ['English', 'Hindi', 'Tamil'],
      status: 'online',
      avatar: drMeeraChatterjee
    },
    {
      id: '8',
      name: 'Dr. Arjun Nair',
      specialty: 'Neurology',
      experience: 13,
      rating: 4.9,
      reviews: 167,
      location: 'Nabha Civil Hospital',
      nextAvailable: '7:15 PM Today',
      languages: ['English', 'Hindi', 'Malayalam'],
      status: 'busy',
      avatar: drArjunNair
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'triage-badge chw-visit';
      case 'busy':
        return 'triage-badge emergency';
      default:
        return 'triage-badge home-care';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'busy':
        return 'Busy';
      default:
        return 'Offline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Video className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Video Consultation
          </h2>
          <p className="text-sm text-muted-foreground">
            Connect with certified doctors through secure video calls
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="card-elevated">
            <div className="space-y-4">
              {/* Doctor Header */}
              <div className="flex items-start gap-3">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={doctor.avatar} alt={doctor.name} />
                  <AvatarFallback className="text-lg font-semibold">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">
                      {doctor.name}
                    </h3>
                    <Badge className={getStatusColor(doctor.status)}>
                      {getStatusText(doctor.status)}
                    </Badge>
                  </div>
                  
                  <p className="text-sm font-medium text-primary">
                    {doctor.specialty}
                  </p>
                  
                  <p className="text-xs text-muted-foreground">
                    {doctor.experience} years experience
                  </p>
                </div>
              </div>

              {/* Rating and Location */}
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({doctor.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{doctor.location}</span>
                </div>
              </div>

              {/* Languages */}
              <div className="flex flex-wrap gap-1">
                {doctor.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded bg-secondary/10 px-2 py-1 text-xs text-secondary"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Next Available */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Next Available</span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {doctor.nextAvailable}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="flex-1"
                  disabled={doctor.status === 'offline'}
                >
                  <Video className="h-4 w-4" />
                  Consult Now
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}