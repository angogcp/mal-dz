'use client';

import React, { useState } from 'react';
import { School } from '../types/school';
import { X, Copy, Check, Printer, Share2, FileText, CheckCircle2, ExternalLink } from 'lucide-react';

interface ShareComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  schools: School[];
}

export default function ShareComparisonModal({
  isOpen,
  onClose,
  schools,
}: ShareComparisonModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'text'>('preview');

  if (!isOpen || schools.length === 0) return null;

  const currentDate = new Date().toLocaleDateString('zh-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate plain text formatted for WhatsApp
  const generateWhatsAppText = () => {
    let text = `🇲🇾【独中通 · 多校横向择校简报】\n`;
    text += `对比学校：${schools.map(s => s.name_zh).join(' vs ')}\n`;
    text += `生成日期：${currentDate}\n`;
    text += `------------------------------------\n\n`;

    schools.forEach((s, idx) => {
      text += `📍 ${idx + 1}. ${s.name_zh} (${s.location.state} · ${s.location.city})\n`;
      text += `• 学制：${s.academics.track_type}\n`;
      text += `• 宿舍：${s.dormitory_and_boarding.has_dormitory ? '设有宿舍 (' + (s.dormitory_and_boarding.air_conditioned || '备有宿舍') + ')' : '无宿舍 (纯走读)'}\n`;
      text += `• 初中走读首年：RM ${s.costs_and_fees.first_year_est_day_student.toLocaleString()}\n`;
      if (s.costs_and_fees.first_year_est_boarder) {
        text += `• 寄宿生首年：RM ${s.costs_and_fees.first_year_est_boarder.toLocaleString()}\n`;
      }
      text += `• 晚自习/纪律：${s.dormitory_and_boarding.study_hall_rules || '统一校纪晚自习'}\n`;
      text += `• 特色标签：#${s.fit_tags.slice(0, 3).join(' #')}\n`;
      if (s.contact.website_url) {
        text += `• 官网：${s.contact.website_url}\n`;
      }
      text += `\n`;
    });

    text += `💡 资料来源：独中通 (DuZhongTong) - 全马63所独中数据库\n`;
    text += `在线查看更多学校：https://mal-dz.vercel.app`;
    return text;
  };

  // Generate completely standalone, isolated HTML for pristine 1-page A4 printing
  const generatePrintHTML = () => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>独中通_多校横向对比简报_${schools.map(s => s.abbreviation).join('_')}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif;
      margin: 0;
      padding: 0;
      color: #0f172a;
      background: #ffffff;
      font-size: 10.5px;
      line-height: 1.35;
    }
    .header {
      border-bottom: 2.5px solid #991b1b;
      padding-bottom: 6px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .logo-box {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .logo-badge {
      background-color: #991b1b;
      color: #ffffff;
      font-weight: 900;
      font-size: 12px;
      padding: 2px 7px;
      border-radius: 4px;
    }
    .main-title {
      font-size: 16px;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.2px;
    }
    .sub-title {
      font-size: 9.5px;
      color: #64748b;
      margin-top: 3px;
    }
    .meta-box {
      text-align: right;
      font-size: 9.5px;
      color: #64748b;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 5px 7px;
      text-align: left;
      vertical-align: top;
      font-size: 10px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    .col-label {
      background-color: #f8fafc;
      font-weight: 700;
      color: #334155;
      width: 90px;
    }
    th.school-header {
      background-color: #f1f5f9;
      color: #0f172a;
    }
    .sch-name {
      font-size: 12.5px;
      font-weight: 800;
      color: #0f172a;
    }
    .sch-meta {
      font-size: 9px;
      color: #64748b;
      font-weight: normal;
      margin-top: 1px;
    }
    .price-day {
      font-weight: 800;
      color: #0f172a;
      font-size: 11.5px;
    }
    .price-dorm {
      font-weight: 800;
      color: #9a3412;
      font-size: 11.5px;
    }
    .tag {
      display: inline-block;
      background-color: #f1f5f9;
      border: 1px solid #e2e8f0;
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 8.5px;
      margin: 1px 1px 1px 0;
      color: #334155;
    }
    .footer {
      margin-top: 10px;
      border-top: 1px solid #e2e8f0;
      padding-top: 6px;
      font-size: 8.5px;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="logo-box">
        <span class="logo-badge">独中通</span>
        <span class="main-title">马来西亚华文独中 · 多校横向择校决策简报</span>
      </div>
      <div class="sub-title">全马63所独中标准化数据库 · 倡导因材施教 · 拒绝单一粗暴排名</div>
    </div>
    <div class="meta-box">
      <div>生成日期：${currentDate}</div>
      <div style="font-weight: bold; color: #1e293b;">共横向对比 ${schools.length} 所学校</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th class="col-label">比较维度</th>
        ${schools.map(s => `
          <th class="school-header">
            <div class="sch-name">${s.name_zh}</div>
            <div class="sch-meta">${s.location.state} · ${s.location.city} (创校${s.founding_year}年)</div>
          </th>
        `).join('')}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-label">学制体制</td>
        ${schools.map(s => `<td><strong>${s.academics.track_type}</strong></td>`).join('')}
      </tr>
      <tr>
        <td class="col-label">高中分流科系</td>
        ${schools.map(s => `<td>${s.academics.senior_tracks.join('、')}</td>`).join('')}
      </tr>
      <tr>
        <td class="col-label">走读生首年总投入</td>
        ${schools.map(s => `
          <td>
            <div class="price-day">RM ${s.costs_and_fees.first_year_est_day_student.toLocaleString()}</div>
            <div style="font-size:8.5px; color:#64748b;">含初中学杂费与建校杂费</div>
          </td>
        `).join('')}
      </tr>
      <tr>
        <td class="col-label">宿舍与寄宿生活</td>
        ${schools.map(s => `
          <td>
            ${s.dormitory_and_boarding.has_dormitory ? `
              <div class="price-dorm">RM ${s.costs_and_fees.first_year_est_boarder?.toLocaleString() || '详询校方'}</div>
              <div style="font-size:8.5px; color:#475569;">${s.dormitory_and_boarding.air_conditioned || '设有宿舍'} (${s.dormitory_and_boarding.dorm_gender})</div>
            ` : `<span style="color:#94a3b8;">无宿舍 (全走读校)</span>`}
          </td>
        `).join('')}
      </tr>
      <tr>
        <td class="col-label">晚自习与手机管治</td>
        ${schools.map(s => `
          <td style="font-size:9px;">
            ${s.dormitory_and_boarding.study_hall_rules || '统一晚自习与纪律规范'}
            ${s.dormitory_and_boarding.electronics_policy ? `<div style="color:#64748b; margin-top:2px;">• 手机：${s.dormitory_and_boarding.electronics_policy}</div>` : ''}
          </td>
        `).join('')}
      </tr>
      <tr>
        <td class="col-label">初一招考日程</td>
        ${schools.map(s => `
          <td style="font-size:9px;">
            ${s.admission_intake ? `
              <div>考试日：<strong>${s.admission_intake.entrance_exam_date || '9月-10月'}</strong></div>
              <div>科目：${s.admission_intake.exam_subjects?.join('/') || '四科联考'}</div>
              <div style="color:#64748b;">截止：${s.admission_intake.registration_deadline || '9月'}</div>
            ` : `<span style="color:#64748b;">6月起陆续启动，详询校方</span>`}
          </td>
        `).join('')}
      </tr>
      <tr>
        <td class="col-label">特色契合标签</td>
        ${schools.map(s => `
          <td>
            ${s.fit_tags.map(t => `<span class="tag">#${t}</span>`).join('')}
          </td>
        `).join('')}
      </tr>
      <tr>
        <td class="col-label">联系与官网</td>
        ${schools.map(s => `
          <td style="font-size:8.5px; color:#475569;">
            ${s.contact.phone ? `<div>电话：${s.contact.phone}</div>` : ''}
            ${s.contact.website_url ? `<div style="color:#1d4ed8; word-break:break-all;">${s.contact.website_url}</div>` : ''}
          </td>
        `).join('')}
      </tr>
    </tbody>
  </table>

  <div class="footer">
    <div>报告由「独中通｜马来西亚全国独中择校平台」生成 · 数据源：董总《全国华文独中基本资料调查》及各校官方章程</div>
    <div>在线动态对比与完整63所数据库：https://mal-dz.vercel.app</div>
  </div>
</body>
</html>`;
  };

  // 100% ISOLATED PRINT METHOD: Creates a hidden iframe containing ONLY the A4 report!
  // Guarantees zero bleed-through from the background page (eliminates the 7-page duplicate bug)!
  const handlePrint = () => {
    const htmlContent = generatePrintHTML();

    // Create hidden iframe
    const existingIframe = document.getElementById('isolated-print-iframe');
    if (existingIframe) {
      existingIframe.remove();
    }

    const iframe = document.createElement('iframe');
    iframe.id = 'isolated-print-iframe';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.visibility = 'hidden';

    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(htmlContent);
      doc.close();

      setTimeout(() => {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();

        // Cleanup after printing
        setTimeout(() => {
          iframe.remove();
        }, 3000);
      }, 350);
    }
  };

  // Fallback: Open in dedicated clean window
  const handleOpenInNewWindow = () => {
    const htmlContent = generatePrintHTML();
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.open();
      newWindow.document.write(htmlContent);
      newWindow.document.close();
      newWindow.focus();
    }
  };

  const handleCopy = () => {
    const text = generateWhatsAppText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-red-700 mb-2">
          <Share2 className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">多校对比简报</span>
        </div>
        <h3 className="text-2xl font-black text-slate-900">
          导出与分享对比报告 ({schools.length}所学校)
        </h3>
        <p className="text-slate-500 text-xs mt-1">
          采用独立隔离渲染技术，直接输出 1 页纯净 A4 PDF 简报，杜绝多余空白页与网页背景。
        </p>

        {/* Tab Switcher */}
        <div className="mt-6 flex border-b border-slate-200 space-x-4">
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-2.5 text-xs font-bold transition flex items-center space-x-1.5 border-b-2 ${
              activeTab === 'preview'
                ? 'border-red-700 text-red-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>A4 纯净报告预览 (推荐打印/存PDF)</span>
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`pb-2.5 text-xs font-bold transition flex items-center space-x-1.5 border-b-2 ${
              activeTab === 'text'
                ? 'border-red-700 text-red-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Copy className="w-4 h-4" />
            <span>WhatsApp / 微信 文本格式</span>
          </button>
        </div>

        {/* Tab 1: Printable Visual Preview */}
        {activeTab === 'preview' && (
          <div className="mt-4 border border-slate-200 rounded-2xl p-4 bg-slate-50/50 max-h-96 overflow-y-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-xs space-y-3">
              <div className="flex justify-between items-center border-b pb-2">
                <div className="font-bold text-slate-900 text-sm">
                  🇲🇾 独中通 · 多校横向择校决策简报 ({schools.map(s => s.name_zh).join(' vs ')})
                </div>
                <span className="text-[10px] text-slate-400">{currentDate}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-left text-xs">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="p-2 border border-slate-200 font-semibold text-slate-600">项目</th>
                      {schools.map(s => (
                        <th key={s.school_id} className="p-2 border border-slate-200 font-bold text-slate-900">
                          {s.name_zh}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-2 border border-slate-200 text-slate-500 font-medium">学制</td>
                      {schools.map(s => (
                        <td key={s.school_id} className="p-2 border border-slate-200 font-semibold">
                          {s.academics.track_type}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 border border-slate-200 text-slate-500 font-medium">走读首年预估</td>
                      {schools.map(s => (
                        <td key={s.school_id} className="p-2 border border-slate-200 font-bold text-slate-900">
                          RM {s.costs_and_fees.first_year_est_day_student.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 border border-slate-200 text-slate-500 font-medium">宿舍与寄宿首年</td>
                      {schools.map(s => (
                        <td key={s.school_id} className="p-2 border border-slate-200">
                          {s.dormitory_and_boarding.has_dormitory ? (
                            <span className="font-bold text-amber-700">
                              RM {s.costs_and_fees.first_year_est_boarder?.toLocaleString() || '详询'}
                            </span>
                          ) : (
                            <span className="text-slate-400">无宿舍</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 border border-slate-200 text-slate-500 font-medium">晚自习与纪律</td>
                      {schools.map(s => (
                        <td key={s.school_id} className="p-2 border border-slate-200 text-[11px] text-slate-600">
                          {s.dormitory_and_boarding.study_hall_rules || '统一校纪晚自习'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-[11px] text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>已切换为独立沙箱打印引擎：只输出上方标准 A4 报表，完全杜绝 7 页冗余网页背景！</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: WhatsApp Plain Text */}
        {activeTab === 'text' && (
          <div className="mt-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 font-mono text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
            {generateWhatsAppText()}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={handleOpenInNewWindow}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center space-x-1 underline"
          >
            <span>在独立网页窗口中打开报告</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition flex items-center justify-center space-x-1.5 shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>打印 / 另存为 PDF (1页纯净版)</span>
            </button>

            <button
              onClick={handleCopy}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center space-x-1.5 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-red-700 text-white hover:bg-red-800 shadow-md'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>已复制到剪贴板！</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>一键复制 WhatsApp 格式</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
