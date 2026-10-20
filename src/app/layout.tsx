import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';
import HeaderClient from '../components/HeaderClient';
import FooterClient from '../components/FooterClient';

export const viewport: Viewport = {
  themeColor: '#b91c1c',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: '独中通｜马来西亚全国63所华文独中择校与升学情报平台',
  description: '全马首个专为华裔家庭打造的独中择校工具，提供63所独中标准化数据库、多校横向对比、TCO学费计算器、寄宿生活指南及UEC统考全球升学路径。',
  keywords: '独中, 马来西亚独中, 华文独立中学, UEC, 统考, 独中选校, 独中学费, 独中宿舍, 宽柔, 隆中华, 坤成, 芙中',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '独中通',
  },
  icons: {
    icon: [
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-MY">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#b91c1c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="独中通" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <LanguageProvider>
          <HeaderClient />
          <main className="flex-grow">
            {children}
          </main>
          <FooterClient />
        </LanguageProvider>
      </body>
    </html>
  );
}
