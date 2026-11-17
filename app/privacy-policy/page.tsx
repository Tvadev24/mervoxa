'use client';


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <div className="pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last Updated: November 2026</p>
        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
          <p>
            Mervoxa Ventures Private Limited (&ldquo;Mervoxa&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal information
            and vehicle data. This policy explains how we collect, process, and retain vehicle details submitted on our platform
            in accordance with the Motor Vehicles Rules, 2021 and Information Technology Act, 2000.
          </p>
          <h2 className="font-heading font-bold text-lg text-slate-900 pt-2">1. Data We Collect</h2>
          <p>
            When you request a vehicle scrappage valuation or book a doorstep pickup, we collect your full name, phone number,
            email address, vehicle registration number, chassis number, engine number, and state of registration.
          </p>
          <h2 className="font-heading font-bold text-lg text-slate-900 pt-2">2. Purpose of Processing</h2>
          <p>
            Your information is used strictly to verify vehicle ownership against Parivahan VAHAN records, calculate statutory scrap valuation,
            dispatch GPS-tracked flatbed tow trucks, execute Form 2B legal undertakings, and issue the Certificate of Deposit (CoD)
            and Certificate of Vehicle Scrapping (CVS). We do not sell or rent your personal data to marketing third parties.
          </p>
          <h2 className="font-heading font-bold text-lg text-slate-900 pt-2">3. Statutory Disclosures</h2>
          <p>
            As an authorized Registered Vehicle Scrapping Facility (RVSF), we submit required vehicle handover and physical destruction
            data directly to the Ministry of Road Transport &amp; Highways (MoRTH) and respective state transport departments as legally required.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

