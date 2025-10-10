'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const targetLocale = currentLocale === 'pt' ? 'en' : 'pt';

  const switchLanguage = () => {
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchLanguage}
      className="glass fixed top-4 right-4 z-50"
    >
      <Globe className="mr-2 h-4 w-4" />
      {targetLocale.toUpperCase()}
    </Button>
  );
}
