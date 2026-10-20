'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, Smartphone, X, Globe, Check } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function NavbarControls() {
  const { lang, setLang, t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as unknown as { standalone?: boolean }).standalone) {
      setIsInstalled(true);
    }

    // Detect iOS
    const ua = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(ua);
    setIsIOS(isIosDevice);

    // Register service worker
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.log('SW registration error:', err);
      });
    }

    // Handle install prompt for Android/Chrome/Edge
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSModal(true);
    } else {
      // Fallback hint
      alert(t('您可以在浏览器的菜单中点击【添加到主屏幕】或【安装应用】'));
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Language Switcher: 简 / 繁 */}
      <div className="inline-flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
        <button
          onClick={() => setLang('zh-Hans')}
          className={`px-2 py-1 text-xs font-semibold rounded-md transition ${
            lang === 'zh-Hans'
              ? 'bg-white text-red-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          title="切换至简体中文"
        >
          简
        </button>
        <button
          onClick={() => setLang('zh-Hant')}
          className={`px-2 py-1 text-xs font-semibold rounded-md transition ${
            lang === 'zh-Hant'
              ? 'bg-white text-red-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          title="切換至繁體中文"
        >
          繁
        </button>
      </div>

      {/* PWA Install Button */}
      {!isInstalled && (
        <button
          onClick={handleInstallClick}
          className="inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-sm hover:from-red-700 hover:to-amber-700 transition"
          title={t('安装到手机桌面 / 电脑端')}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t('安装 App')}</span>
          <span className="sm:hidden">{t('安装')}</span>
        </button>
      )}

      {/* iOS Install Instruction Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center text-white font-bold text-sm">
                  独
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {t('将“独中通”添加到 iPhone 桌面')}
                </h3>
              </div>
              <button
                onClick={() => setShowIOSModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-slate-50">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  点击 Safari 浏览器底部的分享按钮 <span className="font-bold text-blue-600">“分享 (⎋)”</span>。
                </div>
              </div>
              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-slate-50">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  在弹出菜单中向下滚动，点击 <span className="font-bold text-slate-900">“添加到主屏幕 ➕”</span>。
                </div>
              </div>
              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-slate-50">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  点击右上角 <span className="font-bold text-red-700">“添加”</span> 即可随时在桌面秒开全马独中资讯！
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition"
            >
              {t('我知道了')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
