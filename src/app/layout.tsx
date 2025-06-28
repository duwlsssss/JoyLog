import type { Metadata } from 'next';

import Toast from '@/components/ui/Toast';
import { baseDomain, blogDesc, blogName, blogThumbnailURL } from '@/config/consts';
import '@/config/globals.css';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import ThemeProvider from '@/layouts/theme/Provider';
import PostHogProvider from '@/lib/posthog/client';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: [blogThumbnailURL],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogName,
    description: blogDesc,
    images: [blogThumbnailURL],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full scroll-my-20 scroll-smooth" suppressHydrationWarning>
      <body className="font-pretendard flex min-h-screen flex-col">
        <PostHogProvider>
          <ThemeProvider>
            <Header />
            <main className="mt-[40px] flex flex-1 flex-col sm:mt-[64px]">{children}</main>
            <Footer />
          </ThemeProvider>
          <Toast />
          <GoogleAnalytics gaId="G-TRBVGE9TYP" />
        </PostHogProvider>
      </body>
    </html>
  );
};

export default RootLayout;
