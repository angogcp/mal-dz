'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import NavbarControls from './NavbarControls';

export default function HeaderClient() {
  const { t, lang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
            {lang === 'zh-Hant' ? '獨' : '独'}
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              {t('独中通')}
            </span>
            <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full border border-amber-200">
              {t('全马63所独中总览')}
            </span>
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center space-x-2 sm:space-x-5">
          <nav className="flex items-center space-x-1 sm:space-x-2 text-sm font-medium">
            <a href="#directory" className="px-2.5 py-1.5 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition text-xs sm:text-sm">
              {t('找学校')}
            </a>
            <a href="#comparator" className="px-2.5 py-1.5 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition text-xs sm:text-sm">
              {t('对比器')}
            </a>
            <a href="#calculator" className="hidden sm:inline-block px-2.5 py-1.5 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition text-xs sm:text-sm">
              {t('费用测算')}
            </a>
            <a href="#timeline" className="px-2.5 py-1.5 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition text-xs sm:text-sm">
              {t('招生日历')}
            </a>
            <a href="#uec-guide" className="hidden md:inline-block px-2.5 py-1.5 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition text-xs sm:text-sm">
              {t('UEC升学')}
            </a>
          </nav>

          {/* Lang Switcher (简/繁) & PWA Install Button */}
          <NavbarControls />
        </div>
      </div>
    </header>
  );
}
