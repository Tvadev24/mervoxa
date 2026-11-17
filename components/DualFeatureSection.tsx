'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calculator,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface DualFeatureSectionProps {
  onCheckVehicle?: (regNo: string) => void;
  onOpenQuoteModal?: () => void;
}

export default function DualFeatureSection({
  onCheckVehicle,
  onOpenQuoteModal,
}: DualFeatureSectionProps) {
  const [calcReg, setCalcReg] = useState('');

  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onCheckVehicle && calcReg.trim()) {
      onCheckVehicle(calcReg.trim().toUpperCase());
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal();
    }
  };

  return (
    <section className="py-10 md:py-14 bg-[#f8faf9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Dark Green Card + Right White Card matching Reference Mockup 1:1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* ========================================================
              LEFT CARD: Dark Green Card + Calculator + Integrated Scrap Artwork
             ======================================================== */}
          <div className="bg-[#034435] text-white rounded-3xl overflow-hidden relative shadow-sm flex flex-col justify-between">
            <div className="flex flex-col md:flex-row items-stretch h-full min-h-[300px]">
              
              {/* Left Column: Text, Input Box & Checkpoints with Generous Width */}
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-4 z-10">
                <div className="space-y-2.5">
                  {/* Calculator Outline Icon + 2-Line Bold Heading */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/70 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calculator className="w-5 h-5 text-white stroke-[2.2]" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight">
                      Calculate your vehicle<br />
                      scrap value &amp; tax rebate
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-emerald-100/90 leading-relaxed font-normal">
                    Get an instant estimate and know your benefits before you scrap.
                  </p>
                </div>

                {/* Input + Check Value Button (Full Width, Zero Truncation) */}
                <form onSubmit={handleCalcSubmit} className="pt-1">
                  <div className="flex items-center bg-white rounded-lg p-1 shadow-inner border border-white/30 max-w-md">
                    <input
                      type="text"
                      placeholder="Enter Registration No."
                      value={calcReg}
                      onChange={(e) => setCalcReg(e.target.value.toUpperCase())}
                      className="min-w-0 flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium px-3 py-2 outline-none uppercase"
                      maxLength={14}
                    />
                    <button
                      type="submit"
                      className="px-4 sm:px-5 py-2 rounded-md text-xs font-bold text-white bg-[#00c060] hover:bg-[#00a854] transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer shadow-none flex-shrink-0"
                    >
                      <span>Check Value</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                </form>

                {/* 3 Green Checkmarks */}
                <div className="space-y-1.5 pt-1 text-xs text-white font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e676] fill-[#00e676]/20 flex-shrink-0" />
                    <span>Instant Estimate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e676] fill-[#00e676]/20 flex-shrink-0" />
                    <span>Up to 25% Road Tax Rebate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e676] fill-[#00e676]/20 flex-shrink-0" />
                    <span>No Hidden Charges</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Scrapped Vehicles with 3D Green Recycling Symbol */}
              <div className="w-full md:w-44 lg:w-48 relative min-h-[220px] md:min-h-full flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/final_scrap_recycle.png"
                  alt="Scrap Car Recycling"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Organic curved swoosh arching from dark green card over top of the photo */}
                <svg
                  className="absolute -top-1 -left-1 w-14 h-24 text-[#034435] z-10 pointer-events-none hidden md:block"
                  viewBox="0 0 60 100"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0,0 L60,0 C45,35 25,70 0,100 Z" />
                </svg>
                <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#034435] to-transparent pointer-events-none hidden md:block" />
              </div>

            </div>
          </div>

          {/* ========================================================
              RIGHT CARD: White Card + About Mervoxa + Eco Car Artwork
             ======================================================== */}
          <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden relative shadow-sm flex flex-col justify-between">
            <div className="flex flex-col md:flex-row items-stretch h-full min-h-[300px]">
              
              {/* Left Column: Text, Badge & Checkpoints */}
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-4 z-10">
                <div className="space-y-2.5">
                  {/* Top Pill Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f4ea] text-[11px] font-bold text-[#0f5132] tracking-wide">
                    About Mervoxa
                  </div>

                  {/* Headline: Your Trusted Partner in Vehicle Recycling */}
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug">
                    Your Trusted Partner<br />
                    <span className="text-slate-900">in </span>
                    <span className="text-[#059669]">Vehicle Recycling</span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    At Mervoxa, we are committed to building a cleaner, greener India by promoting responsible vehicle recycling. Our RVSF network ensures a seamless, transparent and legally compliant scrapping process.
                  </p>
                </div>

                {/* 3 Green Checkpoints */}
                <div className="space-y-1.5 pt-0.5 text-xs text-slate-800 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00c060] fill-[#00c060]/20 flex-shrink-0" />
                    <span>Environment Friendly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00c060] fill-[#00c060]/20 flex-shrink-0" />
                    <span>Compliant with MoRTH Rules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00c060] fill-[#00c060]/20 flex-shrink-0" />
                    <span>Nationwide Network</span>
                  </div>
                </div>

                {/* CTA Button: Learn More → */}
                <div className="pt-1">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all cursor-pointer shadow-none"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Seamless Eco Car Artwork with Leaves & Skyline */}
              <div className="w-full md:w-48 lg:w-56 relative min-h-[220px] md:min-h-full flex-shrink-0 flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/images/final_eco_car_large.png"
                  alt="Eco Friendly Vehicle Recycling"
                  fill
                  className="object-contain object-center scale-150"
                  priority
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
