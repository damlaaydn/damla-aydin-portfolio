import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Damla Aydın | Big Data Analytics Student & Aspiring Data Analyst',
  description:
    'Manisa Celal Bayar Üniversitesi Büyük Veri Analistliği öğrencisi Damla Aydın\'ın kişisel veri analitiği, Business Intelligence ve makine öğrenmesi portfolyo web sitesi.',
  keywords: [
    'Damla Aydın',
    'Data Analyst',
    'Büyük Veri Analistliği',
    'Business Intelligence',
    'Power BI',
    'SQL',
    'Python',
    'Machine Learning',
    'Portfolyo',
  ],
  authors: [{ name: 'Damla Aydın' }],
  creator: 'Damla Aydın',
  openGraph: {
    title: 'Damla Aydın | Big Data Analytics Student & Aspiring Data Analyst',
    description:
      'Veri analitiği, Power BI raporlama ve makine öğrenmesi projeleri.',
    url: 'https://damlaaydin.dev',
    siteName: 'Damla Aydın Portfolio',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
