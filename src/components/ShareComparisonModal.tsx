'use client';

import React, { useState } from 'react';
import { School } from '../types/school';
import { X, Copy, Check, Printer, Share2, FileText, CheckCircle2 } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'text' | 'preview'>('preview');

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
    <>
      {/* ================= 1. DEDICATED PRINTABLE DOCUMENT (Visible ONLY when printing) ================= */}
      <div id="printable-comparison-sheet" className="hidden print:block p-2 text-slate-900 bg-white">
        {/* Document Header */}
        <div className="border-b-2 border-red-800 pb-3 mb-4 flex justify-between items-end">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-red-800 text-white font-black text-sm px-2 py-0.5 rounded">独中通</span>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">
                马来西亚华文独中 · 多校横向择校决策简报
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              全国 63 所华文独中标准化数据库横向对比 · 客观中立 · 拒绝粗暴排名 · 倡导因材施教
            </p>
          </div>
          <div className="text-right text-xs text-slate-400">
            <div>简报生成日期：{currentDate}</div>
            <div className="font-semibold text-slate-700">共对比 {schools.length} 所学校</div>
          </div>
        </div>

        {/* Comparison Matrix Table for Print */}
        <table className="w-full border-collapse border border-slate-300 text-xs">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 p-2 font-bold text-slate-700 w-28 text-left">
                比较维度
              </th>
              {schools.map(sch => (
                <th key={sch.school_id} className="border border-slate-300 p-2 font-bold text-slate-900 text-left bg-slate-50">
                  <div className="text-sm font-black">{sch.name_zh}</div>
                  <div className="text-[10px] text-slate-500 font-normal">{sch.location.state} · {sch.location.city} (创校{sch.founding_year})</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2 font-semibold bg-slate-50 text-slate-600">
                学制体制
              </td>
              {schools.map(sch => (
                <td key={sch.school_id} className="border border-slate-300 p-2 font-bold text-slate-800">
                  {sch.academics.track_type}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 font-semibold bg-slate-50 text-slate-600">
                高中分流科系
              </td>
              {schools.map(sch => (
                <td key={sch.school_id} className="border border-slate-300 p-2 text-slate-700">
                  {sch.academics.senior_tracks.join('、')}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 font-semibold bg-slate-50 text-slate-600">
                走读生首年总投入
              </td>
              {schools.map(sch => (
                <td key={sch.school_id} className="border border-slate-300 p-2 font-black text-slate-900">
                  RM {sch.costs_and_fees.first_year_est_day_student.toLocaleString()}
                  <span className="block text-[10px] font-normal text-slate-500">含学杂费与初一建校杂费</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 font-semibold bg-slate-50 text-slate-600">
                学生宿舍与寄宿投入
              </td>
              {schools.map(sch => (
                <td key={sch.school_id} className="border border-slate-300 p-2">
                  {sch.dormitory_and_boarding.has_dormitory ? (
                    <div>
                      <span className="font-bold text-red-900">
                        RM {sch.costs_and_fees.first_year_est_boarder?.toLocaleString() || '详询校方'}
                      </span>
                      <span className="block text-[10px] text-slate-600 mt-0.5">
                        {sch.dormitory_and_boarding.air_conditioned || '备有宿舍'} ({sch.dormitory_and_boarding.dorm_gender})
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400">无宿舍 (全走读)</span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 font-semibold bg-slate-50 text-slate-600">
                晚自习与生活管理
              </td>
              {schools.map(sch => (
                <td key={sch.school_id} className="border border-slate-300 p-2 text-slate-600 text-[11px] leading-relaxed">
                  {sch.dormitory_and_boarding.study_hall_rules || '统一晚自习与严格行为准则'}
                  {sch.dormitory_and_boarding.electronics_policy && (
                    <div className="mt-1 text-slate-500">• 手机规定：{sch.dormitory_and_boarding.electronics_policy}</div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 font-semibold bg-slate-50 text-slate-600">
                初一招考与重要日程
              </td>
              {schools.map(sch => (
                <td key={sch.school_id} className="border border-slate-300 p-2 text-[11px]">
                  {sch.admission_intake ? (
                    <div>
                      <div>入学考日：<strong>{sch.admission_intake.entrance_exam_date || '9月-10月'}</strong></div>
                      <div>考试科目：{sch.admission_intake.exam_subjects?.join('/') || '四科联考'}</div>
                      <div className="text-slate-500">截止日期：{sch.admission_intake.registration_deadline || '9月'}</div>
                    </div>
                  ) : (
                    <span className="text-slate-500">6月启动报名，详询各校教务处</span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 font-semibold bg-slate-50 text-slate-600">
                办学特色标签
              </td>
              {schools.map(sch => (
                <td key={sch.school_id} className="border border-slate-300 p-2">
                  <div className="flex flex-wrap gap-1">
                    {sch.fit_tags.map(t => (
                      <span key={t} className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-[10px]">
                        #{t}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 font-semibold bg-slate-50 text-slate-600">
                联系与官方网址
              </td>
              {schools.map(sch => (
                <td key={sch.school_id} className="border border-slate-300 p-2 text-[10px] text-slate-600">
                  {sch.contact.phone && <div>电话：{sch.contact.phone}</div>}
                  {sch.contact.website_url && <div className="text-blue-800 truncate">{sch.contact.website_url}</div>}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        {/* Print Footer Note */}
        <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400">
          <div>报告由「独中通｜马来西亚全国独中择校平台」自动导出 · 权威数据源：董总《全国华文独中基本资料调查》及各校官方章程</div>
          <div>在线浏览与动态对比：https://mal-dz.vercel.app</div>
        </div>
      </div>

      {/* ================= 2. ON-SCREEN INTERACTIVE MODAL (Hidden when printing via .no-print) ================= */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn no-print">
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
            支持一键另存为高清 A4 纯净 PDF，或复制排版好的微信/WhatsApp 文本转发至家庭讨论群。
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
                  <span>点击下方【打印 / 另存为 PDF】，将自动剥离背景页面与弹窗遮罩，专页输出整洁的 A4 决策简报。</span>
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
          <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition flex items-center justify-center space-x-1.5 shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>打印 / 另存为 PDF (A4 纯净版)</span>
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
    </>
  );
}
