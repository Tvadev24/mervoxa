'use client';


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <div className="pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-slate-500">Last Updated: November 2026</p>
        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
          <p>
            These Terms &amp; Conditions govern the vehicle inspection, evaluation, towing, handover, and scrapping services
            offered by Mervoxa Ventures Private Limited through its network of Registered Vehicle Scrapping Facilities (RVSFs)
            authorized under the Motor Vehicles (Registration and Functions of Vehicle Scrapping Facility) Rules, 2021.
          </p>
          <h2 className="font-heading font-bold text-lg text-slate-900 pt-2">1. Vehicle Ownership &amp; Clean Title</h2>
          <p>
            The person or corporate entity handing over the vehicle must be the bona fide registered owner or an authorized representative
            with a valid Power of Attorney / Board Resolution. The vehicle must be free from active police cases, court attachments, or criminal investigations.
          </p>
          <h2 className="font-heading font-bold text-lg text-slate-900 pt-2">2. Execution of Form 2B</h2>
          <p>
            Upon physical inspection and upfront bank payment at doorstep, both parties execute the statutory Form 2B undertaking.
            From the timestamp of this execution, the vehicle owner is legally indemnified from all civil and criminal liabilities arising
            from the vehicle as prescribed under MV Rules.
          </p>
          <h2 className="font-heading font-bold text-lg text-slate-900 pt-2">3. Certificate of Deposit &amp; Scrapping</h2>
          <p>
            Mervoxa facilitates the generation of the Certificate of Deposit (CoD) on the MoRTH VAHAN system on Day 1, and the final
            Certificate of Vehicle Scrapping (CVS) upon physical structural destruction. All tax concession values are subject to
            state-specific motor vehicle taxation rules.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

