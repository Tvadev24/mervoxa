import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MERVOXA | Authorised Registered Vehicle Scrapping Facility (RVSF) Network',
  description:
    'MoRTH-authorised vehicle scrapping and recycling network in India. Scrap your end-of-life car, bike, or commercial vehicle with 100% legal indemnity, upfront bank payment, and official VAHAN CoD & CVS certificates.',
  keywords: [
    'vehicle scrapping',
    'RVSF',
    'car scrap value',
    'scrap car online',
    'Certificate of Deposit',
    'CoD VAHAN',
    'MoRTH scrappage policy',
    'Mervoxa Ventures',
    'scrapping facility Delhi NCR',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
