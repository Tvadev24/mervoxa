'use client';


import React from 'react';
import {
  ShieldCheck,
  FileText,
  Cpu,
  Scissors,
  Recycle,
  ChevronRight,
  Check,
} from 'lucide-react';

export default function TraceabilityBar() {
  const steps = [
    {
      icon: FileText,
      label: 'Doorstep Form 2B Sign Off',
    },
    {
      icon: Cpu,
      label: 'Direct MoRTH Portal Entry',
    },
    {
      icon: Scissors,
      label: 'Physical Frame Dismantling',
    },
    {
      icon: Recycle,
      label: 'Zero Landfill Disposal',
    },
    {
      icon: ShieldCheck,
      label: 'Final VAHAN CVS & Archive',
    },
  ];

  return (
    <section className="py-8 pb-16 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Traceability Horizontal Bar matching Mockup */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Block: Green Shield Badge + Title + Description */}
            <div className="lg:col-span-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 leading-snug">
                  Traceability Checkpoints that protect you.
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  From doorstep handover to final VAHAN disposal details, every official milestone is verified, documented, and permanently registered so you never receive an unexpected RTO notice or police inquiry.
                </p>
              </div>
            </div>

            {/* Right Block: 5 Sequential Process Steps with Chevron Connectors */}
            <div className="lg:col-span-7 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center p-2 min-w-[90px] flex-1">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        {step.label}
                      </span>
                    </div>

                    {/* Chevron Connector */}
                    {idx < steps.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-slate-300 hidden sm:block flex-shrink-0 -mx-1" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

