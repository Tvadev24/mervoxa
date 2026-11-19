'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Car,
  ShieldCheck,
  CheckCircle2,
  Truck,
  ArrowRight,
  Check,
} from 'lucide-react';

interface HeroProps {
  onCheckVehicle?: (regNo: string) => void;
  onOpenQuoteModal?: () => void;
}

/* Organic "leaf" corner radii shared by the photo card and the two
   tinted cards stacked behind it, so they read as one layered object. */
const LEAF = 'rounded-[1.75rem] rounded-tl-[5.5rem] rounded-br-[5.5rem]';

export default function Hero({ onCheckVehicle, onOpenQuoteModal }: HeroProps) {
  const [regNo, setRegNo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onCheckVehicle && regNo.trim()) {
      onCheckVehicle(regNo.trim().toUpperCase());
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal();
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f7fcfa] border-b border-slate-100">

      {/* ---------- Ambient background ---------- */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[620px] h-[620px] rounded-full bg-gradient-to-bl from-emerald-200/50 via-emerald-100/30 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-emerald-100/50 to-transparent blur-3xl" />
      <div
        className="pointer-events-none absolute left-0 bottom-10 w-40 h-24 opacity-20 hidden lg:block"
        style={{
          backgroundImage: 'radial-gradient(#059669 1.1px, transparent 1.1px)',
          backgroundSize: '13px 13px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center pt-28 pb-16 lg:pt-32 lg:pb-16">

          {/* ================================================
              LEFT: Copy, Search Bar & Value Props
             ================================================ */}
          <div className="lg:col-span-6 space-y-5">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300/80 text-[11px] font-bold text-emerald-800 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>MoRTH Compliant Vehicle Scrapping &bull; Pan-India</span>
            </div>

            <h1 className="font-heading font-extrabold text-[32px] sm:text-5xl lg:text-[44px] text-slate-900 tracking-tight leading-[1.14]">
              Scrap your old vehicle with{' '}
              <span className="text-[#059669]">complete peace of mind</span> and guaranteed bank payout.
            </h1>

            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl">
              Mervoxa facilitates vehicle scrapping and recycling in accordance with MoRTH MV Rules 2021.
              Get instant VAHAN 4.0 CoD &amp; CVS certificates, 100% legal indemnity against vehicle misuse,
              and up to 25% road tax rebate on your next car purchase.
            </p>

            {/* Registration search */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-1.5 pl-4 rounded-full border border-slate-200 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-500/10 shadow-[0_8px_24px_-12px_rgba(2,44,34,0.25)] flex items-center justify-between max-w-xl transition-all"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
                <Car className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="ENTER REGISTRATION NO. (E.G. DL 03 CC 4477)"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value.toUpperCase())}
                  className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-semibold outline-none uppercase tracking-wider py-1.5"
                  maxLength={14}
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer whitespace-nowrap"
              >
                <span>Check Scrap Value</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Value props */}
            <div className="grid grid-cols-3 gap-3 pt-1 text-slate-700">
              {[
                { icon: ShieldCheck, a: 'Free Doorstep', b: 'Flatbed Towing' },
                { icon: CheckCircle2, a: '100% Uptime', b: 'RVSF/NEFT Payout' },
                { icon: Truck, a: 'Direct VAHAN', b: 'E-Registration' },
              ].map(({ icon: Icon, a, b }) => (
                <div key={a} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold leading-tight">
                    {a}<br />{b}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================
              RIGHT: Layered Leaf Photo Card
             ================================================ */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[560px] lg:max-w-none lg:ml-6">

              {/* Two tinted leaves stacked behind, peeking at the bottom-right */}
              <div
                className={`absolute inset-0 translate-x-7 translate-y-7 bg-gradient-to-br from-emerald-200/80 to-emerald-100/50 ${LEAF}`}
              />
              <div
                className={`absolute inset-0 translate-x-3.5 translate-y-3.5 bg-gradient-to-br from-[#10b981] to-[#047857] ${LEAF}`}
              />

              {/* Photo */}
              <div
                className={`relative aspect-[4/3] overflow-hidden bg-slate-100 ring-1 ring-white/70 shadow-[0_28px_60px_-28px_rgba(2,44,34,0.55)] ${LEAF}`}
              >
                {/* Photo: Pexels #17429097 (free licence) — flatbed loading a vehicle */}
                <Image
                  src="/images/hero-flatbed-pickup.jpg"
                  alt="Vehicle being loaded onto a flatbed tow truck for MoRTH authorised scrapping"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/35 via-transparent to-transparent" />
              </div>

              {/* 100% Legal Process shield badge */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 w-[72px] sm:w-[84px]">
                <div className="relative w-full aspect-[4/5]">
                  <svg viewBox="0 0 100 125" className="absolute inset-0 w-full h-full drop-shadow-xl" aria-hidden="true">
                    <path
                      d="M4 14 C4 7 8 3 15 3 L85 3 C92 3 96 7 96 14 L96 74 C96 93 72 108 50 121 C28 108 4 93 4 74 Z"
                      fill="#064e3b"
                      stroke="#3ddc84"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="relative h-full flex flex-col items-center justify-center pb-[14%] text-center">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500/25 flex items-center justify-center mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
                    </div>
                    <div className="font-heading font-extrabold text-xs sm:text-sm text-white leading-none">100%</div>
                    <div className="text-[8px] sm:text-[10px] font-semibold text-emerald-200 leading-tight mt-0.5">
                      Legal Process
                    </div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center mt-1">
                      <Check className="w-2 h-2 stroke-[3.5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating trust chip */}
              <div className="absolute -bottom-6 -left-3 sm:left-4 lg:-left-8 z-20 bg-white rounded-2xl shadow-[0_18px_40px_-18px_rgba(2,44,34,0.45)] ring-1 ring-slate-900/5 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    Free doorstep pickup
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">
                    Flatbed towing in 12 hrs
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
