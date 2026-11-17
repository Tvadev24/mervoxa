'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  FileCheck2,
  Cpu,
  ShieldCheck,
  Recycle,
  Scissors,
  CheckCircle2,
  ArrowRight,
  Phone,
} from 'lucide-react';

export default function ProcessPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      title: 'Digital Verification & Instant Scrap Quotation',
      subtitle: 'Tell Us Your Vehicle Registration Number',
      image: '/images/inspection-check.jpg',
      icon: FileCheck2,
      description:
        'You provide your vehicle registration number online or over a quick phone call. We immediately run an automated verification against national transport databases to check registration tenure (15+ yrs petrol, 10+ yrs diesel NCR), bank hypothecation status, and blacklisting clearance. Within minutes, you receive a guaranteed scrap payout quotation based on real-time steel index rates.',
      highlights: [
        'Paperless instant vehicle history lookup on Parivahan',
        'Transparent net price without hidden towing deductions',
        'Personalized calculation of your 25% new vehicle road tax concession',
      ],
    },
    {
      title: 'Doorstep Pickup & Form 2B Legal Handover',
      subtitle: 'Full Payment Credited Before Car Leaves Your Gate',
      image: '/images/flatbed-towing.jpg',
      icon: Cpu,
      description:
        'A verified, uniformed Mervoxa logistics crew arrives at your residence with a specialized hydraulic flatbed tow truck. We match the chassis stamp on the engine compartment with your RC details. Before the vehicle is loaded, our officer transfers the 100% agreed payment directly into your bank account via IMPS/NEFT. Both parties sign statutory Form 2B under MV Rules 2021, instantly indemnifying you from all subsequent legal liabilities.',
      highlights: [
        '100% upfront electronic bank transfer (zero cash, zero disputes)',
        'Form 2B legal undertaking receipt handed to vehicle owner immediately',
        'Zero driving: vehicle is winched safely onto our GPS-tracked flatbed',
      ],
    },
    {
      title: 'MoRTH Certificate of Deposit (CoD) Generation',
      subtitle: 'Issued on Day One to Unlock New Car Purchase Discounts',
      image: '/images/hero-facility.jpg',
      icon: ShieldCheck,
      description:
        'Once received at the Registered Vehicle Scrapping Facility, our authorized digital certificate manager logs the vehicle onto the VAHAN 4.0 system under our government RVSF credentials. The official Certificate of Deposit (CoD) is generated. This certificate proves the vehicle has been surrendered to the state and is digitally dispatched to your WhatsApp and email. You can present it at any car showroom to claim your road tax rebate or trade it on the open market.',
      highlights: [
        'Verifiable digital PDF with official Parivahan QR code',
        'Guarantees up to 25% road tax discount & registration fee waiver on new vehicle',
        'Legally tradeable instrument on the National Transport portal',
      ],
    },
    {
      title: 'CPCB-Compliant Scientific Depollution',
      subtitle: 'Zero Toxic Seepage: Extraction of Fluids, Gases & Batteries',
      image: '/images/depollution-tech.jpg',
      icon: Recycle,
      description:
        'Before any mechanical cut occurs, the vehicle enters our sealed depollution bay. Certified technicians use pneumatic vacuum pumps to extract all hazardous liquids: engine oil, brake oil, steering fluid, transmission oil, and engine coolants. Air-conditioning refrigerants (CFCs/HFCs) are reclaimed using sealed recovery stations. Fuel tanks are vented and neutralized. Lead-acid and EV lithium-ion battery packs are de-linked for certified metallurgical recovery.',
      highlights: [
        '100% compliant with Central Pollution Control Board (CPCB) norms',
        'Zero chemical discharge into soil, waterways, or local municipal drains',
        'Catalytic converters decanned for precious metal recovery (platinum, rhodium)',
      ],
    },
    {
      title: 'Physical Chassis Cut & Final VAHAN CVS Closure',
      subtitle: 'Permanent Erasure from the National Vehicle Register',
      image: '/images/car-shredder.jpg',
      icon: Scissors,
      description:
        'At our industrial facility, the structural chassis section carrying the VIN number is physically cut out with heavy hydraulic shears under continuous high-definition CCTV surveillance. The depolluted shell is shredded or compacted into secondary steel bales. The definitive Certificate of Vehicle Scrapping (CVS) is issued on VAHAN 4.0, marking the vehicle status as SCRAPPED permanently in all national police and RTO databases.',
      highlights: [
        'Permanent excision and physical destruction of Chassis / VIN plate',
        'Time-stamped, geo-tagged photo/video evidence stored permanently',
        'Final Certificate of Vehicle Scrapping (CVS) issued under Section 55',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenQuoteModal={() => setModalOpen(true)} />

      {/* Hero Header matching Mockup UI Theme */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#f0fdf4]/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Statutory Traceability</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              5-Step transparent vehicle{' '}
              <span className="text-[#10b981]">scrapping journey</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Every step from your doorstep handover to final VAHAN deregistration is recorded,
              digitally verified, and backed by statutory Form 2B legal immunity under MoRTH MV Rules 2021.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Process Steps Detailed Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm hover:border-emerald-500/80 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                        {st.subtitle}
                      </span>
                    </div>

                    <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      {st.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {st.description}
                    </p>

                    <div className="pt-2 space-y-2">
                      {st.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual Frame */}
                  <div className="lg:col-span-5">
                    <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                      <Image
                        src={st.image}
                        alt={st.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <div className="text-[10px] font-mono text-emerald-300 font-bold uppercase">
                          Mervoxa RVSF Yard Facility
                        </div>
                        <div className="text-xs font-semibold">
                          Protocol Audited &bull; Central VAHAN System
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Forest Teal Bottom Callout matching Mockup */}
      <section className="py-14 bg-[#042f2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Start Your Vehicle’s Legal Deregistration Today
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 mb-6 leading-relaxed">
            Free doorstep pickup available across Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, Lucknow &amp; pan-India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 transition-colors cursor-pointer shadow-none"
            >
              Get Instant Valuation &rarr;
            </button>
            <a
              href="tel:+919873528080"
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#10b981] transition-colors shadow-none"
            >
              Helpline: +91 9873 528 080
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <InstantQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
