'use client';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from 'next-themes';

const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      title="테마 변경"
      className="relative flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-transparent transition-colors hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ModeToggle;
