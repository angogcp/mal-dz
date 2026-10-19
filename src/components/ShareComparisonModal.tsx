'use client';

import React, { useState } from 'react';
import { School } from '../types/school';
import { X, Copy, Check, Printer, Share2 } from 'lucide-react';

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

  if (!isOpen || schools.length === 0) return null;

  // Generate plain text formatted for WhatsApp
  const generateWhatsAppText = () => {
    let text = `🇲🇾【独中通 · 多校横向择校简报】\n`;
    text += `对比学校：${schools.map(s => s.name_zh).join(' vs ')}\n`;
    text += `------------------------------------\n\n`;

    schools.forEach((s, idx) => {
      text += `📍 ${idx + 1}. ${s.name_zh} (${s.location.state} · ${s.location.city})\n`;
      text += `• 学制：${s.academics.track_type}\n`;
      text += `• 宿舍：${s.dormitory_and_boarding.has_dormitory ? '设有宿舍 (' + (s.dormitory_and_boarding.air_conditioned || '备有宿舍') + ')' : '无宿舍 (纯走读)'}\n`;
      text += `• 初中走读首年初估：RM ${s.costs_and_fees.first_year_est_day_student.toLocaleString()}\n`;
      if (s.costs_and_fees.first_year_est_boarder) {
        text += `• 寄宿首年初估：RM ${s.costs_and_fees.first_year_est_boarder.toLocaleString()}\n`;
      }
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

  const handleCopy = () => {
    const text = generateWhatsAppText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
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
          导出与分享对比报告
        </h3>
        <p className="text-slate-500 text-xs mt-1">
          生成结构化文本，一键复制转发到家庭微信群、WhatsApp 讨论群，或直接打印为 PDF 存档。
        </p>

        {/* Text Preview Box */}
        <div className="mt-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 font-mono text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto">
          {generateWhatsAppText()}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition flex items-center justify-center space-x-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>打印 / 另存为 PDF</span>
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
                <span>一键复制 WhatsApp / 微信 格式</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
