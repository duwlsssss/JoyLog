import Link from 'next/link';

import { ROUTES } from '@constants/routes';

import ModeToggle from './ModeToggle.client';

export default function Header() {
  return (
    <header className="bg-header-fade sticky top-0 z-50 w-full">
      <nav className="mx-auto flex items-center justify-between pt-5 pb-6">
        <Link href={ROUTES.ROOT} className="transition-opacity hover:opacity-80">
          <span className="text-2xl font-bold tracking-tight">JOY Blog</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href={ROUTES.PORTFOLIO}
            className="text-muted-foreground hover:text-primary text-m font-semibold transition-colors"
          >
            Portfolio
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
