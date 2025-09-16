import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  MessageSquare, 
  Activity, 
  FileText, 
  User,
  Stethoscope,
  Pill,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

const navigation = [
  { name: 'home', href: '/', icon: Home },
  { name: 'consult', href: '/consult', icon: MessageSquare },
  { name: 'vitals', href: '/vitals', icon: Activity },
  { name: 'records', href: '/records', icon: FileText },
  { name: 'profile', href: '/profile', icon: User },
];

const doctorNavigation = [
  { name: 'dashboard', href: '/doctor', icon: Stethoscope },
  { name: 'queue', href: '/doctor/queue', icon: MessageSquare },
  { name: 'patients', href: '/doctor/patients', icon: FileText },
  { name: 'analytics', href: '/doctor/analytics', icon: BarChart3 },
];

const pharmacyNavigation = [
  { name: 'inventory', href: '/pharmacy', icon: Pill },
  { name: 'orders', href: '/pharmacy/orders', icon: FileText },
];

interface NavigationProps {
  mode?: 'patient' | 'doctor' | 'pharmacy' | 'chw';
  onItemClick?: () => void;
}

export function Navigation({ mode = 'patient', onItemClick }: NavigationProps) {
  const { t } = useI18n();

  const getNavItems = () => {
    switch (mode) {
      case 'doctor':
        return doctorNavigation;
      case 'pharmacy':
        return pharmacyNavigation;
      case 'chw':
        // CHW gets simplified patient navigation
        return navigation.filter(item => ['home', 'consult', 'vitals'].includes(item.name));
      default:
        return navigation;
    }
  };

    const navItems = getNavItems();

  return (
    <nav className="space-y-1 p-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const label = (t as any)[item.name] || item.name;
        
        return (
          <NavLink
            key={item.name}
            to={item.href}
            onClick={onItemClick}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-normal',
                'hover:bg-accent hover:text-accent-foreground',
                'focus:bg-accent focus:text-accent-foreground focus:outline-none',
                mode === 'chw' && 'min-h-touch-lg text-base font-semibold', // Larger for CHW
                isActive
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground'
              )
            }
          >
            <Icon className={cn(
              'h-5 w-5 shrink-0',
              mode === 'chw' && 'h-6 w-6'
            )} />
            <span>{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}