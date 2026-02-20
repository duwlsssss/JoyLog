import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { cn } from '@libs/utils';

import ThemeProvider from '@components/layout/ThemeProvider.client';

import './globals.css';

export const metadata: Metadata = {
  title: '김여진 개발 블로그',
  description: '블로그 글과 포트폴리오를 확인해보세요.',
};

const pretendard = localFont({
  src: './fonts/pretendard/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '45 920',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn(pretendard.variable, 'font-pretendard antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
