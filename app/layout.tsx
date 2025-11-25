import type { Metadata } from 'next';
import Header from '@/app/_components/layout/Header';
// import Footer from '@/app/_components/layout/Footer';
import '@/app/_styles/global.css';
import { Toaster } from '@/components/ui/sonner';

import { Instrument_Serif, Lato } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

const lato = Lato({
  weight: ['700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Help App Africa',
  description: 'Find and book trusted artisan / service provider in Nigeria',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${lato.variable} antialiased`}
      >
        <Header />
        <main className="pt-20 overflow-hidden">{children}</main>
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}
