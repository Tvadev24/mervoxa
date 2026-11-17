'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the 10-year diesel and 15-year petrol NGT rule in Delhi-NCR?',
      a: 'Under directives from the National Green Tribunal (NGT) and the Hon’ble Supreme Court of India, all diesel vehicles older than 10 years and petrol vehicles older than 15 years are legally deemed End-of-Life Vehicles (ELVs) within the National Capital Region (NCR). Such vehicles cannot be driven on public roads or parked in public spaces. Mervoxa is authorized to legally de-register, pick up, and scrap these vehicles with complete immunity and generate VAHAN CoD/CVS certificates.',
    },
    {
      q: 'Can I legally scrap my vehicle if the original RC book is lost?',
      a: 'Yes. If your original Registration Certificate (RC) is lost or misplaced, you do not need to spend months visiting the RTO. You simply need to provide a Non-Cognizable Report (NCR) / Online Lost Article Report from the state police portal, your Aadhaar card/KYC matching the owner details, and a sworn indemnity bond. Our legal team handles the VAHAN de-linking directly.',
    },
    {
      q: 'How does the 25% Road Tax Discount on a new car work?',
      a: 'When you scrap an end-of-life vehicle with Mervoxa, we immediately issue a Certificate of Deposit (CoD) on the MoRTH VAHAN portal. Under the National Vehicle Scrappage Policy, producing this CoD at any automobile dealership entitles you to up to a 25% concession on state motor road tax for personal vehicles (15% for commercial vehicles), along with a complete waiver of the new registration fees.',
    },
    {
      q: 'Can I sell my Certificate of Deposit (CoD) if I am not buying a new car?',
      a: 'Yes, absolutely! The Certificate of Deposit (CoD) is legally designed as a tradeable financial instrument on the Parivahan portal. If you do not plan to buy a new car yourself, you can sell or transfer your CoD to anyone in India who is purchasing a new vehicle. Mervoxa assists vehicle owners in monetizing their CoD vouchers for extra cash.',
    },
    {
      q: 'What if there are pending traffic e-challans or a bank loan (hypothecation)?',
      a: 'Before scrapping, all pending bank loans must have a No Objection Certificate (NOC) / Form 35 from the financer. For pending e-challans, our team performs an instant RTO ledger check and guides you through one-click virtual court resolution so your vehicle can be deregistered with clean title.',
    },
    {
      q: 'When and how do I receive the scrap payment?',
      a: 'Payment is made 100% upfront via direct bank transfer (IMPS/NEFT) into the registered owner’s verified bank account. The money reflects in your account BEFORE the vehicle is winched onto our flatbed tow truck. We strictly do not operate in cash, ensuring 100% legal traceability and zero disputes.',
    },
    {
      q: 'Are there any towing charges or hidden deductions?',
      a: 'No. Doorstep flatbed towing is 100% free of charge within all our operating clusters (Delhi NCR, UP, Uttarakhand, Rajasthan, etc.). The scrap valuation agreed upon during your quotation is the exact net amount transferred to your bank account.',
    },
    {
      q: 'How does Form 2B protect me against criminal or civil liability?',
      a: 'Form 2B is the statutory undertaking mandated under the Motor Vehicles (Registration and Functions of Vehicle Scrapping Facility) Rules, 2021. The moment our authorized officer signs Form 2B at your doorstep, all civil, criminal, and motor vehicle responsibilities immediately transfer to Mervoxa RVSF. You are 100% shielded against any subsequent misuse.',
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Everything you need to know about vehicle scrapping.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Clear, transparent legal answers to help you navigate RTO rules, NGT policies, and CoD tax benefits.
          </p>
        </div>

        {/* Accordion List - Minimal radius */}
        <div className="max-w-3xl mx-auto space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-emerald-700">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Have a specific scenario like commercial permit cancellation, duplicate RC, or company fleet write-off?
          </p>
          <div className="mt-2.5">
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <span>Explore our Comprehensive Vehicle Scrappage Guides &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
