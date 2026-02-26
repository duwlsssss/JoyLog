import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { cn } from '@libs/utils';

import ThemeProvider from '@components/layout/ThemeProvider.client';
import Footer from '@components/layout/footer/Footer';
import Header from '@components/layout/header/Header';

import { SITE_URL } from '@constants/metadata';

import './globals.css';

export const metadata: Metadata = {
  title: 'Joy 개발 블로그',
  description: '프론트엔드 개발자 Joy의 기술 블로그 및 포트폴리오입니다.',
  verification: {
    google: 'X9PrAex_Szp4PQuR1iLdWmhWqdREcsn6qjAr-UBxgac',
  },
  other: {
    'naver-site-verification': '72ceb204b618147c9c3b2dc2c8cacdceb5e39a9f',
  },
  openGraph: {
    title: 'Joy 개발 블로그',
    description: '프론트엔드 개발자 Joy의 기술 블로그 및 포트폴리오입니다.',
    url: SITE_URL,
    siteName: 'JoyLog',
    locale: 'ko_KR',
    type: 'website',
  },
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
          <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-5">
            <Header />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
