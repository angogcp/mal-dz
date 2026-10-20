'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FooterClient() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">
                {lang === 'zh-Hant' ? '獨' : '独'}
              </div>
              <span className="text-white font-bold text-lg">{t('独中通 (DuZhongTong)')}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              {t('以数字化赋能马来西亚华文独立中学，专注为家长与学子提供客观透明的择校档案、寄宿生活与UEC升学导航。坚守去粗暴排名、倡导因材施教。')}
            </p>
            <p className="text-xs text-slate-500 mt-4">
              {t('数据来源参考：董总《全国华文独中基本资料调查》、各校公开招生章程及校友众包核验。')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">{t('快速导航')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#directory" className="hover:text-white transition">{t('63所学校库')}</a></li>
              <li><a href="#comparator" className="hover:text-white transition">{t('多校横向对比')}</a></li>
              <li><a href="#calculator" className="hover:text-white transition">{t('6年学杂费测算')}</a></li>
              <li><a href="#timeline" className="hover:text-white transition">{t('2026招生日历')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">{t('华教生态与升学')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.dongzong.my" target="_blank" rel="noreferrer" className="hover:text-white transition">{t('董总官网 (Dong Zong)')}</a></li>
              <li><a href="https://uec.dongzong.my" target="_blank" rel="noreferrer" className="hover:text-white transition">{t('UEC 统一考试局')}</a></li>
              <li><a href="#uec-guide" className="hover:text-white transition">{t('海外直录认可一览')}</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 {t('独中通 DuZhongTong. 保留所有权利。非官方公益性质信息索引工具。')}</p>
          <p>Designed for Malaysian Chinese Education Community</p>
        </div>
      </div>
    </footer>
  );
}
