
import React from 'react';
import Image from 'next/image';
import {
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

export default function CircularEconomySection() {
  const steps = [
    {
      title: 'Scientific Depollution',
      description:
        'Before any mechanical cut, sealed vacuum systems evacuate 100% of motor oils, brake fluids, refrigerants, and coolants, preventing toxic seepage into ground water.',
      stat: 'Fluid Recovery Protocol',
    },
    {
      title: 'Precision Component Salvage',
      description:
        'Certified technicians extract catalytic converters, copper wiring harnesses, starter motors, and electric battery packs for specialized high-yield metallurgical recycling.',
      stat: 'Zero Landfill Standard',
    },
    {
      title: 'Industrial Heavy Shredding',
      description:
        'The depolluted chassis enters our high-torque hydraulic shredder and magnetic separation drum, dividing pure ferrous steel from aluminum and plastics in seconds.',
      stat: 'Automated Magnetic Sorting',
    },
    {
      title: 'Circular Green Steel',
      description:
        'Recovered scrap metal is melted in electric arc furnaces with 65% less energy than virgin iron ore, returning as secondary steel for Indian railways and infrastructure.',
      stat: 'Electric Arc Furnace Reclaim',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-3">
            <RotateCcw className="w-3.5 h-3.5" />
            Sustainable Industrial Circularity
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Your old car doesn’t disappear. It builds a cleaner India.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            By recycling an unfit vehicle through an authorized RVSF instead of an unregulated scrapyard,
            you eradicate harmful tailpipe emissions and channel tons of clean industrial steel back into the economy.
          </p>
        </div>

        {/* 4 Steps Grid - Numbering removed, minimal radius */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 p-5 rounded-md flex flex-col justify-between hover:border-emerald-500/50 hover:bg-white transition-all"
            >
              <div>
                <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>CPCB &amp; MoRTH Certified</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Industrial Photography Banner - Minimal radius */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-60 rounded-md overflow-hidden border border-slate-200">
            <Image
              src="/images/scrapyard-industrial.jpg"
              alt="Automotive Material Baling"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <div className="text-xs font-mono font-bold text-emerald-300 uppercase">Controlled Yard Baling</div>
              <div className="text-sm font-bold">Mechanical Sorting &amp; Material Recovery Facility</div>
            </div>
          </div>

          <div className="relative h-60 rounded-md overflow-hidden border border-slate-200">
            <Image
              src="/images/steel-recycling.jpg"
              alt="Secondary Steel Circularity"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <div className="text-xs font-mono font-bold text-emerald-300 uppercase">Secondary Metallurgy</div>
              <div className="text-sm font-bold">Steel Circularity for Rail &amp; EV Infrastructure</div>
            </div>
          </div>
        </div>

        {/* Impact Bar - Minimal radius */}
        <div className="mt-8 bg-slate-900 text-white rounded-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="border-b md:border-b-0 md:border-r border-slate-800 pb-5 md:pb-0">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">
              10,000+
            </div>
            <div className="text-xs font-semibold text-white mt-1">Vehicles Legally Scrapped</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Zero legal disputes, 100% VAHAN closures</div>
          </div>

          <div className="border-b md:border-b-0 md:border-r border-slate-800 pb-5 md:pb-0">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">
              18,000+ MT
            </div>
            <div className="text-xs font-semibold text-white mt-1">CO₂ Emissions Avoided</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Equivalent to planting 3,20,000 mature trees</div>
          </div>

          <div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">
              100%
            </div>
            <div className="text-xs font-semibold text-white mt-1">Upfront Bank Payouts</div>
            <div className="text-[11px] text-slate-400 mt-0.5">IMPS transfers completed prior to towing</div>
          </div>
        </div>
      </div>
    </section>
  );
}
