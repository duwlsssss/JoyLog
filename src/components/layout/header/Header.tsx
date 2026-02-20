import Link from 'next/link';

import { ROUTES } from '@constants/routes';

import ModeToggle from './ModeToggle.client';

export default function Header() {
  return (
    <header className="justify-beetween flex items-center">
      <Link href={ROUTES.ROOT}>
        <h1 className="text-3xl font-bold">JOY Blog</h1>
      </Link>
      <div className="flex items-center gap-2">
        <Link href={ROUTES.PORTFOLIO}>portfolio</Link>
        <ModeToggle />
      </div>
    </header>
  );
}
