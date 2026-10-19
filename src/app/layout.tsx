import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '独中通｜马来西亚全国63所华文独中择校与升学情报平台',
  description: '全马首个专为华裔家庭打造的独中择校工具，提供63所独中标准化数据库、多校横向对比、TCO学费计算器、寄宿生活指南及UEC统考全球升学路径。',
  keywords: '独中, 马来西亚独中, 华文独立中学, UEC, 统考, 独中选校, 独中学费, 独中宿舍, 宽柔, 隆中华, 坤成, 芙中',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-MY">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                独
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900">独中通</span>
                <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full border border-amber-200">
                  全马63所独中总览
                </span>
              </div>
            </div>

            <nav className="flex items-center space-x-1 sm:space-x-4 text-sm font-medium">
              <a href="#directory" className="px-3 py-2 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition">
                找学校
              </a>
              <a href="#comparator" className="px-3 py-2 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition">
                对比器
              </a>
              <a href="#calculator" className="px-3 py-2 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition">
                费用测算
              </a>
              <a href="#timeline" className="px-3 py-2 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition">
                招生日历
              </a>
              <a href="#uec-guide" className="hidden md:inline-block px-3 py-2 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition">
                UEC升学
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">独</div>
                  <span className="text-white font-bold text-lg">独中通 (DuZhongTong)</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-400 max-w-md">
                  以数字化赋能马来西亚华文独立中学，专注为家长与学子提供客观透明的择校档案、寄宿生活与UEC升学导航。坚守去粗暴排名、倡导因材施教。
                </p>
                <p className="text-xs text-slate-500 mt-4">
                  数据来源参考：董总《全国华文独中基本资料调查》、各校公开招生章程及校友众包核验。
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">快速导航</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#directory" className="hover:text-white transition">63所学校库</a></li>
                  <li><a href="#comparator" className="hover:text-white transition">多校横向对比</a></li>
                  <li><a href="#calculator" className="hover:text-white transition">6年学杂费测算</a></li>
                  <li><a href="#timeline" className="hover:text-white transition">2026招生日历</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">华教生态与升学</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.dongzong.my" target="_blank" rel="noreferrer" className="hover:text-white transition">董总官网 (Dong Zong)</a></li>
                  <li><a href="https://uec.dongzong.my" target="_blank" rel="noreferrer" className="hover:text-white transition">UEC 统一考试局</a></li>
                  <li><a href="#uec-guide" className="hover:text-white transition">海外直录认可一览</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>© 2026 独中通 DuZhongTong. 保留所有权利。非官方公益性质信息索引工具。</p>
              <p>Designed for Malaysian Chinese Education Community</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
