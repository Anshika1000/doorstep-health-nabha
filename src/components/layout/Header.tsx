import React from 'react';
import { Menu, Heart } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { OfflineIndicator } from './OfflineIndicator';
import { useI18n } from '@/lib/i18n';

interface HeaderProps {
  onMenuToggle?: () => void;
  showMenu?: boolean;
}

export function Header({ onMenuToggle, showMenu = true }: HeaderProps) {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {showMenu && onMenuToggle && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="mr-3 md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-foreground">
              {t.appName}
            </h1>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <OfflineIndicator />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}