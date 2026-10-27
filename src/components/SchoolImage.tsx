'use client';

import React, { useState } from 'react';
import { Building2, Landmark, GraduationCap, MapPin, Award, BookOpen, Sparkles } from 'lucide-react';

interface SchoolImageProps {
  src?: string;
  alt: string;
  caption?: string;
  motto?: string;
  foundingYear?: number;
  state?: string;
  className?: string;
  aspectRatio?: 'video' | 'banner' | 'square';
}

// State-specific heritage color palettes
function getStateTheme(state?: string) {
  if (!state) {
    return {
      gradient: 'from-slate-900 via-stone-900 to-amber-950',
      accent: 'text-amber-400',
      badgeBg: 'bg-amber-500/20 text-amber-200 border-amber-500/30'
    };
  }
  if (state.includes('柔佛')) {
    return {
      gradient: 'from-blue-950 via-slate-900 to-rose-950',
      accent: 'text-blue-300',
      badgeBg: 'bg-blue-600/30 text-blue-200 border-blue-400/40'
    };
  }
  if (state.includes('吉隆坡') || state.includes('雪兰莪')) {
    return {
      gradient: 'from-stone-950 via-slate-900 to-red-950',
      accent: 'text-amber-300',
      badgeBg: 'bg-red-600/30 text-red-200 border-red-400/40'
    };
  }
  if (state.includes('槟城') || state.includes('吉打') || state.includes('玻璃市')) {
    return {
      gradient: 'from-cyan-950 via-slate-900 to-indigo-950',
      accent: 'text-cyan-300',
      badgeBg: 'bg-cyan-600/30 text-cyan-200 border-cyan-400/40'
    };
  }
  if (state.includes('霹雳')) {
    return {
      gradient: 'from-emerald-950 via-slate-900 to-stone-900',
      accent: 'text-emerald-300',
      badgeBg: 'bg-emerald-600/30 text-emerald-200 border-emerald-400/40'
    };
  }
  if (state.includes('森美兰') || state.includes('马六甲') || state.includes('彭亨') || state.includes('吉兰丹') || state.includes('登嘉楼')) {
    return {
      gradient: 'from-rose-950 via-stone-900 to-amber-950',
      accent: 'text-amber-300',
      badgeBg: 'bg-amber-600/30 text-amber-200 border-amber-400/40'
    };
  }
  if (state.includes('沙巴') || state.includes('砂拉越')) {
    return {
      gradient: 'from-teal-950 via-slate-900 to-emerald-950',
      accent: 'text-teal-300',
      badgeBg: 'bg-teal-600/30 text-teal-200 border-teal-400/40'
    };
  }
  return {
    gradient: 'from-slate-900 via-stone-900 to-red-950',
    accent: 'text-amber-300',
    badgeBg: 'bg-amber-500/20 text-amber-200 border-amber-500/30'
  };
}

export default function SchoolImage({
  src,
  alt,
  caption,
  motto,
  foundingYear,
  state,
  className = '',
  aspectRatio = 'video'
}: SchoolImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const aspectClass = 
    aspectRatio === 'banner' ? 'aspect-[21/9]' :
    aspectRatio === 'square' ? 'aspect-square' : 'aspect-[16/9]';

  const theme = getStateTheme(state);
  const isCenturyOld = foundingYear && foundingYear <= 1926;

  // Fallback rendering: Rich Heritage Digital Emblem Card
  if (!src || hasError) {
    return (
      <div 
        className={`w-full ${aspectClass} rounded-2xl bg-gradient-to-br ${theme.gradient} p-5 sm:p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-md select-none ${className}`}
      >
        {/* Subtle decorative glow & architectural watermarks */}
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 -translate-x-8 translate-y-8 w-44 h-44 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
        
        {/* Subtle geometric line patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md text-amber-300 border border-white/10">
              <Landmark className="w-4 h-4" />
            </div>
            {state && (
              <span className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold border backdrop-blur-xs ${theme.badgeBg}`}>
                {state}
              </span>
            )}
          </div>
          {foundingYear && (
            <div className="flex items-center space-x-1.5">
              {isCenturyOld && (
                <span className="px-2 py-0.5 rounded-md bg-amber-500/25 border border-amber-400/40 text-amber-300 text-[10px] font-black uppercase tracking-wider flex items-center space-x-1">
                  <Award className="w-3 h-3 text-amber-300" />
                  <span>百年名校</span>
                </span>
              )}
              <span className="text-[11px] text-slate-300 font-mono tracking-wider">
                EST. {foundingYear}
              </span>
            </div>
          )}
        </div>

        {/* Center / School Name & Motto */}
        <div className="z-10 my-auto text-center py-2 px-2">
          <h4 className="text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow-md">
            {alt}
          </h4>
          {motto && (
            <div className="mt-2.5 inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold backdrop-blur-md transition shadow-inner">
              <span className="text-[10px] uppercase font-bold text-amber-300">校训</span>
              <span className="text-slate-100">{motto}</span>
            </div>
          )}
          {caption && !motto && (
            <p className="text-xs text-slate-300 mt-1.5 line-clamp-1 italic">
              {caption}
            </p>
          )}
        </div>

        {/* Bottom subtle bar */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 z-10 border-t border-white/10 pt-2.5">
          <span className="flex items-center space-x-1">
            <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
            <span>马来西亚华文独立中学</span>
          </span>
          <span className="text-amber-400/90 font-medium">校园数字专档</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden bg-slate-900 group shadow-md ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center text-slate-500">
          <Building2 className="w-6 h-6 animate-bounce" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={`w-full h-full object-cover transition duration-500 group-hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Dark gradient overlay for bottom text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

      {/* State & Year Top Floating Badge */}
      <div className="absolute top-3 left-3 flex items-center space-x-2 z-10">
        {state && (
          <span className="px-2.5 py-0.5 rounded-lg bg-black/50 text-white text-[11px] font-bold backdrop-blur-md border border-white/20 shadow-xs">
            {state}
          </span>
        )}
        {foundingYear && (
          <span className="px-2 py-0.5 rounded-lg bg-black/40 text-amber-200 text-[10px] font-semibold backdrop-blur-md border border-white/10">
            {foundingYear}年
          </span>
        )}
      </div>

      {/* Bottom Caption Pill */}
      {caption && (
        <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-slate-200 line-clamp-1 backdrop-blur-xs flex items-center space-x-1.5 z-10">
          <Landmark className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="font-medium drop-shadow-sm">{caption}</span>
        </div>
      )}
    </div>
  );
}
