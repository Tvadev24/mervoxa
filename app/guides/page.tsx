'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  BookOpen,
  Scale,
  FileText,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export default function GuidesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const guides = [
    {
      slug: 'ngt-10-15-year-rule-delhi-ncr',
      title: 'Complete Guide: NGT 10-Yr Diesel & 15-Yr Petrol Ban in Delhi-NCR',
      category: 'Legal Mandates',
      summary:
        'Understand the National Green Tribunal orders, Delhi Transport Department impounding guidelines, and how to avoid the ₹10,000 towing penalty by opting for authorized RVSF scrappage before the enforcement date.',
      highlights: [
        'Why unregistered old vehicles are seized directly from private parking spaces',
        'How NOC to other states works vs. scrapping for 25% road tax concession',
        'Protection against parking seizure under CAQM Graded Response Action Plan (GRAP)',
      ],
    },
    {
      slug: 'how-to-scrap-vehicle-without-rc',
      title: 'Can You Scrap a Vehicle If You Lost the Registration Certificate (RC)?',
      category: 'Document Solutions',
      summary:
        'Step-by-step statutory process for scrapping vehicles with missing or damaged physical RC cards. Learn how Form 2B legal verification, VAHAN digital ledger search, and an authorized police loss report allow lawful scrapping.',
      highlights: [
        'Form 2B statutory owner undertaking under MV Scrappage Rules 2021',
        'Online NCR / Police Lost Article Report requirements',
        'Zero need to queue at RTO for duplicate RC before scrapping',
      ],
    },
    {
      slug: 'certificate-of-deposit-trade-guide',
      title: 'How to Monetize & Trade Your Certificate of Deposit (CoD)',
      category: 'Financial Rebates',
      summary:
        'A comprehensive investor and owner guide on selling your digital CoD voucher to new car buyers who want to claim the 25% state road tax concession. Learn the legal transfer protocol on VAHAN 4.0.',
      highlights: [
        'Average market resale value of private and commercial CoDs',
        'How car dealerships verify electronic trade endorsements',
        'Tax exemptions and capital gain treatment of scrap sale payouts',
      ],
    },
    {
      slug: 'bank-hypothecation-loan-scrapping',
      title: 'Scrapping a Vehicle with Outstanding Bank Loan or Pending Hypothecation',
      category: 'Banking & NOC',
      summary:
        'What to do if your old car still shows HP (Hypothecation) on VAHAN portal despite the loan being paid off years ago. How Mervoxa assists in bank NOC clearances and Form 35 closures.',
      highlights: [
        'Form 35 submission and automated bank ledger clearing',
        'Handling old non-banking finance companies (NBFCs) that have merged or shut down',
        'Direct settlement options for vehicles with minor remaining loan dues',
      ],
    },
    {
      slug: 'unauthorized-kabadiwala-vs-rvsf-dangers',
      title: 'The Hidden Criminal Liability of Selling Cars to Local Scrapyards (Mayapuri / Meerut)',
      category: 'Legal Risks',
      summary:
        'Real case studies of vehicle owners receiving police summons, court notices, and hit-and-run FIRs years after selling their car to local scrap dealers without VAHAN 4.0 deregistration.',
      highlights: [
        'Why affidavit on stamp paper holds zero legal weight in motor accident tribunals',
        'Chassis cut clone rackets and illegal diesel engine transplant operations',
        'How Form 2B and Certificate of Vehicle Scrapping (CVS) grant absolute legal indemnity',
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
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Policy &amp; Legal Knowledgebase</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Vehicle scrappage guides &amp;{' '}
              <span className="text-[#10b981]">statutory policies</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              In-depth legal guides authored by our transport advocates and RTO specialists to help you navigate
              NGT bans, lost RC scrapping, 25% road tax rebates, and complete criminal liability protection.
            </p>
          </div>
        </div>
      </section>

      {/* Guides List Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-emerald-500/80 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800 tracking-wide">
                    {g.category}
                  </div>

                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                    {g.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {g.summary}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    {g.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-48 flex-shrink-0 flex flex-col justify-center gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-none"
                  >
                    <span>Check Your Car</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="tel:+919873528080"
                    className="w-full px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
                  >
                    Ask Legal Officer
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA in Deep Forest Teal matching Mockup */}
      <section className="py-14 bg-[#042f2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Have a unique vehicle registration situation?
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 mb-6 leading-relaxed">
            Whether your vehicle is an out-of-state registered vehicle, commercial yellow plate, or deceased owner estate vehicle, our legal desk provides free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919873528080"
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 transition-colors shadow-none"
            >
              Consult Legal Officer: +91 9873 528 080
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#10b981] transition-colors cursor-pointer shadow-none"
            >
              Get Scrap Value Estimate
            </button>
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
