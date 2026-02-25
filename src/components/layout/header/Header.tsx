import Link from 'next/link';

import { ROUTES } from '@constants/routes';

import ModeToggle from './ModeToggle.client';

export default function Header() {
  return (
    <header className="bg-header-fade sticky top-0 z-20 w-full py-6">
      <nav className="mx-auto flex h-full items-center justify-between">
        <Link href={ROUTES.ROOT} className="transition-opacity hover:opacity-80">
          <span className="text-xl font-bold tracking-tight">JOY Blog</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href={ROUTES.PORTFOLIO}
            className="text-muted-foreground hover:text-primary text-sm font-semibold transition-colors"
          >
            Portfolio
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
