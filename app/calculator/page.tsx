'use client';


import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrapCalculator from '@/components/ScrapCalculator';
import QuoteFormSection from '@/components/QuoteFormSection';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  Calculator,
  Percent,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  Info,
} from 'lucide-react';

export default function CalculatorPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenQuoteModal={() => setModalOpen(true)} />

      {/* Hero Header matching Mockup UI Theme */}
      <section className="relative pt-36 pb-14 md:pt-40 md:pb-16 bg-gradient-to-b from-[#f0fdf4]/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-4">
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>National Vehicle Scrappage Policy (NVSP) Calculator</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Scrap value &amp; road tax rebate{' '}
              <span className="text-[#10b981]">calculator</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Estimate your guaranteed scrap payout based on live automotive steel index rates, plus the official
              25% state road tax concession unlocked via the Certificate of Deposit (CoD).
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Calculator */}
      <ScrapCalculator />

      {/* State-by-State Road Tax Rebate Guide */}
      <section className="py-16 bg-[#f8faf9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-3">
              <Percent className="w-3.5 h-3.5" />
              <span>State Concession Matrix</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              How state governments calculate your 25% motor tax concession.
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Under the MoRTH Scrappage Policy, state transport departments extend concessions on the One-Time Motor Vehicle Tax
              payable when registering a newly purchased car against an authorized CoD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase mb-2">
                DELHI &bull; NCR
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Delhi NCT &amp; Gurgaon</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                Delhi Transport Department offers up to a 25% concession on road tax for private non-transport vehicles,
                plus a waiver of the new registration certificate fee.
              </p>
              <div className="text-xs font-bold text-emerald-800 bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
                Avg. Savings: ₹35,000 &ndash; ₹95,000 on new car
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase mb-2">
                UTTAR PRADESH
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Noida, Lucknow &amp; Meerut</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                Under the UP Motor Vehicles Taxation Act amendments, producing a valid VAHAN CoD entitles buyers to
                a 25% road tax rebate (15% for commercial fleets).
              </p>
              <div className="text-xs font-bold text-emerald-800 bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
                Avg. Savings: ₹40,000 &ndash; ₹1,10,000 on new car
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase mb-2">
                HARYANA &bull; RAJASTHAN
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Faridabad, Jaipur &amp; Alwar</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                Haryana and Rajasthan transport authorities extend road tax rebate along with zero inspection fees at
                Automated Testing Stations (ATS) for replacement vehicles.
              </p>
              <div className="text-xs font-bold text-emerald-800 bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
                Avg. Savings: ₹38,000 &ndash; ₹1,05,000 on new car
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doorstep Pickup Form Section */}
      <QuoteFormSection />

      <Footer />
      <InstantQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
