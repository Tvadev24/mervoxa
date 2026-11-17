'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  ShieldCheck,
  Factory,
  Users,
  CheckCircle2,
  Building,
  Recycle,
  Award,
  ArrowRight,
} from 'lucide-react';

export default function AboutUsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenQuoteModal={() => setModalOpen(true)} />

      {/* Hero Header with Organic Ambient Background matching Mockup Theme */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#f0fdf4]/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Government Registered RVSF Network</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Pioneering safe, transparent, and circular{' '}
              <span className="text-[#10b981]">vehicle recycling</span> in India.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Mervoxa Ventures Private Limited was founded to solve the single largest threat facing vehicle owners:
              the criminal and civil risks of unauthorized local scrap yards. We operate a licensed network
              under the Ministry of Road Transport &amp; Highways (MoRTH) MV Rules 2021.
            </p>
          </div>
        </div>
      </section>

      {/* Facility & Mission Story Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Showcase with Rounded Shape matching Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-emerald-100 shadow-md">
                <Image
                  src="/images/hero-facility.jpg"
                  alt="Mervoxa Authorised RVSF Industrial Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-mono font-bold text-emerald-300 uppercase">
                    Yard Facility 01 &bull; Roorkee Industrial Belt
                  </div>
                  <div className="text-sm font-bold">
                    MoRTH Certified Mechanical &amp; Depollution Infrastructure
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-5 -right-5 bg-[#042f2e] text-white p-5 rounded-2xl border-2 border-emerald-400 shadow-xl hidden sm:block max-w-xs">
                <div className="text-2xl font-heading font-extrabold text-emerald-400">100%</div>
                <div className="text-xs font-semibold mt-0.5">VAHAN 4.0 Legal Compliance</div>
                <div className="text-[11px] text-emerald-200/80 mt-1">
                  Zero consumer disputes, direct Parivahan certificate generation.
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800 tracking-wide">
                Our Foundation
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
                Built to protect Indian vehicle owners from illegal scrapyard liability.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Under the Indian Motor Vehicles Act, selling a vehicle to an unauthorized scrap dealer does not cancel
                your registered ownership. If that vehicle’s engine, chassis cut, or registration number is used in a hit-and-run,
                smuggling, or felony, the registered owner remains criminally liable in court.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Mervoxa operates strictly as an authorized RVSF under MoRTH MV Rules 2021.
                The minute our flatbed loads your vehicle, Form 2B legal undertaking transfers all civil and criminal custody away from you.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all flex items-center justify-center gap-2 shadow-none cursor-pointer"
                >
                  <span>Get Instant Valuation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/vehicle-scrapping-process"
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center"
                >
                  Explore 5-Step Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid with UI Theme */}
      <section className="py-16 bg-[#f8faf9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Our Core Operational Pillars
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Engineered for absolute legal certainty, environmental purity, and client trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200/90 hover:border-emerald-500 p-6 rounded-2xl shadow-sm transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">100% Legal Indemnity</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Statutory Form 2B indemnification guaranteed at your doorstep. Zero police summon risk.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 hover:border-emerald-500 p-6 rounded-2xl shadow-sm transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">Zero-Landfill Circularity</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Sealed evacuation bays for toxic fluids and high-torque secondary steel re-circulation.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 hover:border-emerald-500 p-6 rounded-2xl shadow-sm transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">Parivahan VAHAN 4.0</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Direct digital integration issuing CoD and CVS with verifiable QR codes.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 hover:border-emerald-500 p-6 rounded-2xl shadow-sm transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">25% Tax Concession</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                CoD unlocks statutory road tax rebates across Delhi NCR, UP, Haryana, and Rajasthan.
              </p>
            </div>
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
