'use client';

import React, { useState } from 'react';
import { Building2, Landmark, GraduationCap } from 'lucide-react';

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

  // Fallback rendering
  if (!src || hasError) {
    return (
      <div 
        className={`w-full ${aspectClass} rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-inner ${className}`}
      >
        {/* Subtle decorative background circles */}
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 -translate-x-8 translate-y-8 w-40 h-40 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs text-amber-300">
              <Landmark className="w-4 h-4" />
            </div>
            {state && (
              <span className="px-2.5 py-0.5 rounded-md bg-red-800/80 text-white text-[11px] font-bold tracking-wide">
                {state}
              </span>
            )}
          </div>
          {foundingYear && (
            <span className="text-[11px] text-slate-400 font-medium tracking-wider">
              EST. {foundingYear}
            </span>
          )}
        </div>

        {/* Center / School Name & Motto */}
        <div className="z-10 my-auto text-center py-2">
          <h4 className="text-lg sm:text-xl font-black text-white tracking-wide drop-shadow-sm">
            {alt}
          </h4>
          {motto && (
            <div className="mt-2 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs font-semibold">
              <span className="text-[10px] uppercase text-amber-300/80">校训</span>
              <span>{motto}</span>
            </div>
          )}
        </div>

        {/* Bottom subtle bar */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 z-10 border-t border-white/10 pt-2.5">
          <span>马来西亚华文独立中学</span>
          <span className="text-amber-400/80 font-medium">独中通校园档案</span>
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
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition duration-500 group-hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Caption & Motto Overlay */}
      <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none flex items-end justify-between">
        <div>
          {motto && (
            <span className="inline-block px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-amber-300 text-[10px] font-bold border border-amber-300/30 mb-1">
              校训：{motto}
            </span>
          )}
          {caption ? (
            <p className="text-xs font-medium text-slate-200 line-clamp-1 drop-shadow-sm">
              {caption}
            </p>
          ) : (
            <p className="text-xs font-semibold text-slate-200 drop-shadow-sm">
              {alt} 校园全貌
            </p>
          )}
        </div>

        {foundingYear && (
          <span className="text-[10px] text-slate-300 bg-black/50 px-2 py-0.5 rounded shrink-0 backdrop-blur-xs">
            立校于 {foundingYear}
          </span>
        )}
      </div>
    </div>
  );
}
