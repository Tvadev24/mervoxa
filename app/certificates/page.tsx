'use client';


import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DocumentShowcase from '@/components/DocumentShowcase';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Download,
  QrCode,
} from 'lucide-react';

export default function CertificatesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenQuoteModal={() => setModalOpen(true)} />

      {/* Hero Header matching Mockup UI Theme */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#f0fdf4]/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-4">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Official Government Parivahan Documentation</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Certificate of Deposit (CoD) &amp;{' '}
              <span className="text-[#10b981]">Vehicle Scrapping (CVS)</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Understand the two critical statutory instruments generated under the Motor Vehicles (RVSF) Rules 2021.
              Each certificate is cryptographically secured, logged on the Parivahan VAHAN 4.0 database, and verifiable via dynamic QR code.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Document Comparison Component */}
      <DocumentShowcase />

      {/* Deep-Dive FAQ on Certificates */}
      <section className="py-16 bg-[#f8faf9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Frequently asked questions about CoD &amp; CVS
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                Can I sell my Certificate of Deposit (CoD) to another person?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Yes! Under the Central Motor Vehicles Rules, the Certificate of Deposit (CoD) is an electronically tradeable instrument.
                If you scrap an old car but do not wish to buy a new car yourself, you can legally transfer or sell your CoD voucher to anyone
                purchasing a new vehicle who wants to claim the 25% road tax discount. Mervoxa helps you monetize your CoD directly.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                How do I verify the authenticity of a Mervoxa CoD or CVS?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Every certificate issued by Mervoxa includes an encrypted Government Parivahan QR code and our statutory RVSF license number.
                Scanning the QR code opens the live verification page on <span className="font-mono text-emerald-700 font-bold">parivahan.gov.in</span>,
                confirming that the certificate was digitally signed and logged by an authorized facility.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                What is the timeline between receiving CoD and CVS?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                The <strong>Certificate of Deposit (CoD)</strong> is issued on <strong>Day 1</strong> upon vehicle handover.
                The <strong>Certificate of Vehicle Scrapping (CVS)</strong> is generated typically within <strong>15 to 30 days</strong>,
                following complete mechanical depollution, fluid evacuation, and the physical cutting of the structural chassis frame under CCTV.
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
