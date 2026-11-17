'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import {
  FileCheck2,
  Cpu,
  Scissors,
  Recycle,
  Archive,
  CheckCircle2,
} from 'lucide-react';

export default function TraceabilityCheckpoints() {
  const [activeStep, setActiveStep] = useState(0);

  const checkpoints = [
    {
      title: 'Identity & Handover Verification',
      short: 'Doorstep Form 2B Sign-Off',
      image: '/images/inspection-check.jpg',
      icon: FileCheck2,
      tagline: 'The moment we take your vehicle, it legally stops being your liability.',
      description:
        'A verified, uniformed Mervoxa pickup officer arrives at your premises. We verify vehicle chassis against your RC and national crime databases. Before the vehicle is loaded onto our flatbed, Form 2B legal undertaking is executed, transferring all custody and liability away from you.',
      bulletPoints: [
        'Zero physical risk: 100% flatbed winch loading, no rogue driving',
        'Full IMPS/NEFT payment directly credited before handover',
        'Signed Form 2B handover receipt handed to owner immediately',
      ],
    },
    {
      title: 'Certificate Created on VAHAN',
      short: 'Direct MoRTH Portal Entry',
      image: '/images/flatbed-towing.jpg',
      icon: Cpu,
      tagline: 'Instant legal recognition on the Government of India database.',
      description:
        'The vehicle registration number is marked as surrendered on the VAHAN 4.0 National Transport Portal. The official Certificate of Deposit (CoD) is created under authorized RVSF digital credentials, locking the vehicle from any potential road use or tax summons.',
      bulletPoints: [
        'Officially recorded on Parivahan VAHAN database',
        'Unlocks eligibility for 25% road tax rebate & registration fee waiver',
        'Digital PDF with verifiable QR code dispatched to your WhatsApp & Email',
      ],
    },
    {
      title: 'Proof of Chassis Cut Captured',
      short: 'Physical Frame Destruction',
      image: '/images/car-shredder.jpg',
      icon: Scissors,
      tagline: 'Visible, geo-tagged proof that the vehicle can never be re-used.',
      description:
        'At our Registered Vehicle Scrapping Facility, the structural chassis number section is physically cut out with industrial shears under continuous CCTV surveillance. We capture high-definition, geo-tagged photos and video footage of the excision.',
      bulletPoints: [
        'Permanent excision of VIN / Chassis plate',
        'Timestamped & geo-tagged photographic evidence archived',
        '100% protection against clone number plates or hit-and-run misuse',
      ],
    },
    {
      title: 'Material Audit Trail Logged',
      short: 'Zero-Landfill Depollution',
      image: '/images/depollution-tech.jpg',
      icon: Recycle,
      tagline: 'Hazardous fluids and batteries scientifically neutralized.',
      description:
        'Before mechanical shredding or compaction, every environmental contaminant is extracted in our sealed depollution bay: brake fluids, motor oils, transmission oils, refrigerants (CFCs/HFCs), catalytic converters, and lead-acid or EV lithium batteries are recycled through certified metallurgical partners.',
      bulletPoints: [
        'Compliant with Central Pollution Control Board (CPCB) standards',
        '95%+ vehicle mass recycled back into Indian circular manufacturing',
        'Over 1.8 metric tons of CO2 offset per scrapped vehicle',
      ],
    },
    {
      title: 'Record Stays Retrievable Forever',
      short: 'Final VAHAN CVS & Archive',
      image: '/images/steel-recycling.jpg',
      icon: Archive,
      tagline: 'Permanent peace of mind. Accessible whenever you need it.',
      description:
        'Following complete dismantling, the definitive Certificate of Vehicle Scrapping (CVS) is issued via VAHAN, formally deregistring the vehicle in RTO records under Section 55 of the Motor Vehicles Act. All records remain permanently searchable on government portals.',
      bulletPoints: [
        'Vehicle registration status permanently changed to "SCRAPPED"',
        'Indemnity remains valid indefinitely against any past/future claim',
        'One-click digital document retrieval on the Mervoxa customer portal',
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Security &amp; Legal Compliance
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Traceability Checkpoints that protect you.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From doorstep handover to final VAHAN de-registration, every critical milestone is verified,
            documented, and permanently retained so you never receive an unexpected RTO notice or police inquiry.
          </p>
        </div>

        {/* Navigation Tabs - Numbering removed, Minimal Border Radius */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
          {checkpoints.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded text-left transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-emerald-50 border-emerald-600 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Icon
                    className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`}
                  />
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  )}
                </div>
                <div className="font-semibold text-xs sm:text-sm line-clamp-1">{step.short}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card - Minimal Radius, Numbering removed */}
        <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-slate-900 mb-2">
                {checkpoints[activeStep].title}
              </h3>
              <p className="text-emerald-700 text-sm sm:text-base font-semibold mb-4">
                &ldquo;{checkpoints[activeStep].tagline}&rdquo;
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {checkpoints[activeStep].description}
              </p>

              <div className="space-y-2.5">
                {checkpoints[activeStep].bulletPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Preview - Minimal Radius */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-72 w-full rounded border border-slate-200 overflow-hidden bg-slate-100">
                <Image
                  src={checkpoints[activeStep].image}
                  alt={checkpoints[activeStep].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-mono text-emerald-300 font-bold uppercase">
                    Protocol Verified
                  </div>
                  <div className="text-xs font-semibold">
                    Live Operational Standard &bull; RVSF Facility
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
