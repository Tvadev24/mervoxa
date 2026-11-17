'use client';


import React from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
} from 'lucide-react';
import Logo from './Logo';

export default function HandoverVerificationSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Verification Card matching Mockup */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & Guarantees */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                  Identity &amp; Handover Verification
                </span>
              </div>

              <p className="text-emerald-600 text-sm sm:text-base font-bold italic">
                &ldquo;The moment we take your vehicle, it legally stops being your liability.&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                A verified, authorised Mervoxa pickup officer arrives at your premises. We verify vehicle details against your RC, and indemnify you. If any dispute arises, we handle the process with complete transparency.
              </p>

              {/* 3 Checkpoint Pills in Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero Depreciation</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Full Insurance</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Signed Form 2B Handover Receipt</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inspection Photograph with Mervoxa Logo Tag */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <Image
                  src="/images/inspection-check.jpg"
                  alt="Mervoxa Authorised Vehicle Inspection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                
                {/* Mervoxa Official Facility Watermark Tag in Bottom Right */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200/80 shadow flex items-center gap-2">
                  <Logo size="sm" variant="mark" />
                  <div className="text-[10px] font-bold text-slate-900 leading-tight">
                    MERVOXA RVSF<br />
                    <span className="text-[8px] text-emerald-700 uppercase font-mono">Government Verified</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

