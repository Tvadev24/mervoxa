'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  Briefcase,
} from 'lucide-react';

export default function TeamPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const team = [
    {
      name: 'Er. Rajesh Vardhan',
      role: 'Chief Technical Officer & Head of RVSF Operations',
      division: 'Automotive Dismantling & Metallurgy',
      experience: '22+ Years in Automotive Metallurgy',
      bio: 'Former senior manufacturing engineer with Maruti Suzuki and Tata Motors. Spearheads Mervoxa’s automated shearing, shredding, and CPCB-certified depollution systems at Roorkee Yard 01.',
      image: '/images/team-engineers.jpg',
    },
    {
      name: 'Adv. Suresh Narang',
      role: 'Principal Legal Counsel & RTO Liaison',
      division: 'MoRTH Compliance & Legal Indemnity',
      experience: '18+ Years Transport Law Practice',
      bio: 'Specialist in the Motor Vehicles Act 1988 and MV Scrappage Rules 2021. Oversees Form 2B legal drafting and guarantees 100% legal indemnity against vehicle misuse for every customer.',
      image: '/images/inspection-check.jpg',
    },
    {
      name: 'Vikas Singhal',
      role: 'Head of National Logistics & Flatbed Towing',
      division: 'Doorstep Fleet Operations',
      experience: '14+ Years Heavy Recovery Logistics',
      bio: 'Manages our pan-India fleet of GPS-tracked hydraulic flatbed tow trucks, coordinating rapid same-day doorstep vehicle winching across Delhi NCR, UP, and Rajasthan.',
      image: '/images/flatbed-towing.jpg',
    },
    {
      name: 'Dr. Ananya Sen',
      role: 'Director of Environmental Sustainability & ESG',
      division: 'Circular Steel & Battery Recycling',
      experience: 'PhD Environmental Engineering',
      bio: 'Audits our zero-landfill depollution bays and chemical reclamation protocols. Produces ESG corporate sustainability reports for MNC and PSU vehicle decommissioning.',
      image: '/images/depollution-tech.jpg',
    },
    {
      name: 'Amitabh Mukherjee',
      role: 'Chief Digital Certificate Officer',
      division: 'Parivahan VAHAN 4.0 Integration',
      experience: '12+ Years Enterprise Transport Systems',
      bio: 'Authorized digital certificate manager responsible for instant real-time generation of Certificate of Deposit (CoD) and final Certificate of Vehicle Scrapping (CVS).',
      image: '/images/hero-facility.jpg',
    },
    {
      name: 'Pooja Rawat',
      role: 'Head of Customer Experience & Fair Valuation',
      division: 'Client Desk & Payout Operations',
      experience: '10+ Years Automotive Appraisal',
      bio: 'Oversees the instant quotation desk and ensures 100% upfront electronic IMPS/NEFT bank payouts are credited to vehicle owners prior to doorstep flatbed departure.',
      image: '/images/sedan-car.jpg',
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
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Leadership &amp; RTO Specialists</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              The experts safeguarding your vehicle’s{' '}
              <span className="text-[#10b981]">legal closure</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Meet the leadership, automotive engineers, legal advocates, and logistics professionals
              ensuring 100% statutory compliance, zero liability, and transparent bank payouts at Mervoxa.
            </p>
          </div>
        </div>
      </section>

      {/* Team Cards Grid matching Mockup Design */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative h-56 w-full bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[11px] font-mono font-bold text-emerald-300 uppercase">
                      {member.division}
                    </div>
                    <div className="font-heading font-extrabold text-lg text-white">
                      {member.name}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-bold text-emerald-700 mb-1">
                      {member.role}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mb-3 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{member.experience}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>MoRTH Certified</span>
                    </span>
                    <a
                      href="tel:+919873528080"
                      className="text-slate-600 hover:text-emerald-700 font-bold transition-colors"
                    >
                      Desk Support &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RTO Officer Commitment Banner in Deep Forest Teal */}
      <section className="py-14 bg-[#042f2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Speak directly with an authorized RTO Scrapping Officer
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Have questions about lost RC, pending hypothecation / bank NOC, or NGT diesel deregistration notices?
                Our legal team is on call 24/7 to guide you with complete confidentiality.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3 justify-end">
              <a
                href="tel:+919873528080"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 transition-colors shadow-none"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>+91 9873 528 080</span>
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#10b981] transition-colors shadow-none cursor-pointer"
              >
                <span>Check Vehicle Value</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
