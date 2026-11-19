'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  XCircle,
  ArrowRight,
  PhoneCall,
  Award,
  Sparkles,
  Truck,
  FileCheck2,
  Scale,
  Leaf,
  Recycle,
  Building2,
  Clock,
  Banknote,
  AlertTriangle,
} from 'lucide-react';

export default function AboutUsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const coreValues = [
    {
      icon: Scale,
      title: 'Integrity & Absolute Legal Compliance',
      description:
        'We adhere 100% to the Ministry of Road Transport & Highways (MoRTH) Motor Vehicles Rules 2021. Every vehicle scrapped is permanently deregistered on the national VAHAN 4.0 database, ensuring total legal immunity for the owner.',
    },
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description:
        'We enforce strict zero-leakage protocols. Hazardous chemicals, automotive battery acids, heavy engine oils, and ozone-depleting refrigerants are extracted inside hermetic evacuation bays before any metal cut.',
    },
    {
      icon: Banknote,
      title: 'Transparency & Guaranteed Value',
      description:
        'Zero hidden charges, zero surprise deductions. Our valuation is driven by real-time secondary raw material indices and verified vehicle kerb weights, paired with instant IMPS/NEFT bank transfers before handover.',
    },
    {
      icon: ShieldCheck,
      title: 'Customer Protection First',
      description:
        'The moment our verified officer executes Form 2B at your premises, civil and criminal liability legally transfers away from you. We safeguard vehicle owners from unauthorized chop shops and police notices.',
    },
    {
      icon: Recycle,
      title: 'Circular Economy Leadership',
      description:
        'Over 95% of every retired vehicle is recovered. Salvaged high-grade secondary steel, aluminum, and copper return directly into domestic infrastructure, railways, and industrial manufacturing.',
    },
    {
      icon: Sparkles,
      title: 'Digital-First Traceability',
      description:
        'From online quote generation and GPS flatbed dispatch to physical shredding and Parivahan CoD/CVS certificate issuance, every milestone is time-stamped and accessible to clients.',
    },
  ];

  const comparisonPoints = [
    {
      feature: 'Legal Indemnity & Liability Transfer',
      mervoxa: 'Instant Form 2B legal undertaking signed at doorstep; all civil & criminal liabilities transfer to Mervoxa immediately.',
      unregulated: 'Zero legal paperwork; registered owner remains criminally liable for future accidents, crime, or police inquiries.',
    },
    {
      feature: 'Government Parivahan De-Registration',
      mervoxa: 'Official VAHAN 4.0 online de-registration with QR-verified Certificate of Deposit (CoD) & Scrapping Certificate (CVS).',
      unregulated: 'RC is rarely cancelled; vehicle identity/chassis plate may be cloned or sold onto illegal second-hand markets.',
    },
    {
      feature: 'Upfront Bank Payment',
      mervoxa: '100% verified IMPS/NEFT bank transfer credited directly to your bank account prior to loading.',
      unregulated: 'Unreliable cash transactions with last-minute renegotiations and deductions for towing and labor.',
    },
    {
      feature: 'Vehicle Transportation',
      mervoxa: 'Free doorstep flatbed towing with hydraulic winch loading; vehicle is never driven on public roads.',
      unregulated: 'Unlicensed drivers drive the unfit vehicle on public roads without insurance or active fitness certificate.',
    },
    {
      feature: 'Environmental Depollution',
      mervoxa: 'CPCB-certified hermetic vacuum drainage of 100% toxic motor oils, coolants, brake fluids, and refrigerants.',
      unregulated: 'Toxic oils and acids drain directly into municipal sewers or open soil, contaminating urban groundwater.',
    },
    {
      feature: 'New Car Tax Concession',
      mervoxa: 'Official CoD entitles you to up to 25% motor vehicle road tax rebate on your next new vehicle purchase.',
      unregulated: 'Zero tax benefits or government incentives; no official proof of legitimate destruction.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar onOpenQuoteModal={() => setModalOpen(true)} />

      {/* ========================================================
          1. HERO SECTION: Corporate Introduction
         ======================================================== */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#f0fdf4]/80 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>MoRTH MV Rules 2021 Compliant Vehicle Recycling</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              About <span className="text-[#059669]">Mervoxa</span>: Transforming Vehicle Recycling Across India.
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Mervoxa Ventures Private Limited is a modern vehicle recycling and scrappage platform 
              engineered to eliminate legal risk for vehicle owners while pioneering zero-landfill circular economy 
              practices. We combine digital VAHAN 4.0 government integration, instant upfront bank payouts, and 
              industrial-grade depollution to provide a completely transparent and hassle-free vehicle scrappage experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none"
              >
                <span>Calculate Scrap Value &amp; Tax Rebate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919873528080"
                className="px-6 py-3 rounded-lg text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Call RTO Desk: +91 9873 528 080</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. ABOUT US: Deep Dive & The Mervoxa Story
         ======================================================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Visual Industrial Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 lg:h-[460px] rounded-3xl overflow-hidden border-2 border-emerald-100 shadow-sm bg-slate-100">
                <Image
                  src="/images/hero-facility.jpg"
                  alt="Mervoxa Vehicle Recycling Facility"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-600/90 text-[10px] font-mono font-bold tracking-wider uppercase mb-2">
                    Automotive Recycling Facility &bull; CPCB Certified
                  </div>
                  <h4 className="text-base sm:text-lg font-bold leading-snug">
                    State-of-the-Art Automotive Dismantling &amp; Depollution Infrastructure
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Equipped with high-torque hydraulic balers, hermetic evacuation stations, and shredding units.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#034435] text-white p-5 rounded-2xl border-2 border-emerald-400 shadow-xl hidden sm:block max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-heading font-extrabold text-emerald-400">100% Legal</div>
                    <div className="text-[11px] font-semibold text-emerald-100">MoRTH &amp; NGT Compliant</div>
                  </div>
                </div>
                <div className="text-[11px] text-emerald-200/80 mt-2 leading-relaxed">
                  Direct issuance of Parivahan Certificate of Deposit (CoD) and Scrapping Certificate (CVS).
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800 tracking-wide">
                Who We Are
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
                Building India’s Most Reliable Automotive Scrappage &amp; Resource Recovery Network.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Under the Indian Motor Vehicles Act and National Green Tribunal (NGT) mandates, private petrol vehicles 
                older than 15 years and diesel vehicles older than 10 years are legally deemed unfit for public roads. 
                However, millions of vehicle owners face severe risks when turning to unorganized local scrapyards 
                where chassis numbers are routinely cloned, engine parts are misused in illegal activities, and 
                the original RC is never deregistered.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                <strong>MERVOXA VENTURES PRIVATE LIMITED</strong> was incorporated to solve this exact vulnerability. 
                We facilitate vehicle recycling and legal de-registration under the 
                <strong> Ministry of Road Transport and Highways (MoRTH) Motor Vehicles Rules 2021</strong>.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Form 2B Doorstep Transfer:</strong> Immediate legal indemnification protecting you from police and RTO summons.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct VAHAN 4.0 Integration:</strong> Official cancellation of vehicle registration in the national Parivahan registry.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Up to 25% Road Tax Concession:</strong> Tradable Certificate of Deposit (CoD) unlocking substantial savings on your next vehicle.</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/vehicle-scrapping-process"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 tracking-wide uppercase transition-colors"
                >
                  <span>Explore Our 5-Step Traceable Process</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. VISION & MISSION: Strategic Roadmap
         ======================================================== */}
      <section className="py-16 md:py-20 bg-[#f8faf9] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800 tracking-wide mb-3">
              Purpose &amp; Direction
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Our Vision &amp; Mission
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Driving sustainable industrial circularity while ensuring total legal peace of mind for every citizen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Vision Card */}
            <div className="bg-white border-2 border-emerald-200/80 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500 transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-bl-full -z-0 pointer-events-none transition-transform group-hover:scale-110" />

              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#034435] text-white flex items-center justify-center shadow-md">
                  <Compass className="w-7 h-7 text-emerald-400 stroke-[2.2]" />
                </div>

                <div className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Long-Term Aspiration
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Our Vision
                </h3>

                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                  To be India’s most trusted, digitally integrated, and ecologically advanced automotive recycling ecosystem—transforming 
                  end-of-life vehicular liabilities into clean secondary industrial resources that power a self-reliant, zero-emission 
                  circular economy for future generations.
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Nationwide Pan-India RVSF collection &amp; dismantling coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Eradication of illegal, hazardous unregulated vehicle chop shops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>95%+ secondary green steel and precious metal re-circulation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <span>Aiming for Greener Indian Highways</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-[#034435] text-white rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-bl-full -z-0 pointer-events-none transition-transform group-hover:scale-110" />

              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-md">
                  <Target className="w-7 h-7 text-emerald-300 stroke-[2.2]" />
                </div>

                <div className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                  Operational Execution
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Our Mission
                </h3>

                <p className="text-sm sm:text-[15px] text-emerald-100/90 leading-relaxed font-normal">
                  To eliminate legal liability for every Indian vehicle owner through guaranteed Form 2B indemnification 
                  and seamless VAHAN 4.0 deregistration; to deliver fair, transparent, and instant upfront bank payouts; 
                  and to execute 100% scientific depollution that prevents toxic contamination of India’s soil, water, and air.
                </p>

                <div className="pt-4 border-t border-emerald-800/80 space-y-2.5 text-xs text-emerald-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                    <span>100% Legal Indemnity: Zero post-scrapping police or court liability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                    <span>Instant Upfront IMPS/NEFT Payment before doorstep vehicle pickup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                    <span>Hermetic Depollution: Safe recovery of battery lead, oils &amp; refrigerants</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-800/80 text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <span>Government Authorized &bull; MoRTH Certified</span>
                <Award className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          4. WHY CHOOSE US: Mervoxa vs Unregulated Scrapyards
         ======================================================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800 tracking-wide mb-3">
              The Mervoxa Advantage
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Why Choose Mervoxa Over Local Scrapyards?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Understand why thousands of vehicle owners, corporate fleets, and institutions trust Mervoxa over unauthorized scrapyards.
            </p>
          </div>

          {/* Detailed Feature Comparison Table */}
          <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                      Key Parameter
                    </th>
                    <th className="py-4 px-6 text-xs font-bold text-emerald-800 bg-emerald-50/70 uppercase tracking-wider w-3/8">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Mervoxa Authorized RVSF</span>
                      </div>
                    </th>
                    <th className="py-4 px-6 text-xs font-bold text-rose-800 bg-rose-50/50 uppercase tracking-wider w-3/8">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Unregulated Scrapyards</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonPoints.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 align-top">
                        {item.feature}
                      </td>
                      <td className="py-4 px-6 text-emerald-900 bg-emerald-50/30 font-medium leading-relaxed align-top">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item.mervoxa}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-rose-900 bg-rose-50/20 font-normal leading-relaxed align-top">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span>{item.unregulated}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <div className="bg-[#f8faf9] border border-slate-200/90 rounded-2xl p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm">Form 2B Legal Indemnity</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero post-handover liability. The law treats vehicle transfer as absolute the moment it is loaded.
              </p>
            </div>

            <div className="bg-[#f8faf9] border border-slate-200/90 rounded-2xl p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Banknote className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm">Guaranteed Bank Payout</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct IMPS/NEFT transfer directly to your account. No cash uncertainties, no bargaining tricks.
              </p>
            </div>

            <div className="bg-[#f8faf9] border border-slate-200/90 rounded-2xl p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm">Free Doorstep Towing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern hydraulic flatbed trucks pick up your vehicle from your parking slot across all operational hubs.
              </p>
            </div>

            <div className="bg-[#f8faf9] border border-slate-200/90 rounded-2xl p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm">25% Road Tax Rebate</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use your official Certificate of Deposit (CoD) to claim up to 25% discount on road tax for your next new car.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          5. CORE VALUES: Operational Principles
         ======================================================== */}
      <section className="py-16 md:py-24 bg-[#f8faf9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800 tracking-wide mb-3">
              Guiding Principles
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every process at Mervoxa is governed by six fundamental commitments to legal compliance, client transparency, and eco-sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 hover:border-emerald-500 rounded-3xl p-7 shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-[#034435] group-hover:text-emerald-400 transition-colors">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
                      {val.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Mervoxa Standard Verified</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          6. CALL TO ACTION: Get Scrap Value
         ======================================================== */}
      <section className="py-16 bg-[#034435] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Ready to Scrap Your Vehicle Legally?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Get an instant fair estimate, claim up to 25% road tax rebate, and enjoy free doorstep flatbed pickup with 100% legal indemnity.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3 rounded-lg text-xs sm:text-sm font-bold text-slate-900 bg-[#00e676] hover:bg-[#00c853] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none"
              >
                <span>Check Scrap Value Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919873528080"
                className="w-full sm:w-auto px-7 py-3 rounded-lg text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-300" />
                <span>Call +91 9873 528 080</span>
              </a>
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
