'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  Car,
  Bike,
  Truck,
  Bus,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileCheck2,
} from 'lucide-react';

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const services = [
    {
      id: 'car',
      title: 'Private Passenger Car Scrapping',
      subtitle: '15-Year Petrol & 10-Year Diesel Vehicles (NGT Mandate)',
      image: '/images/sedan-car.jpg',
      icon: Car,
      tag: 'Personal Vehicles',
      description:
        'Complete legal scrappage for family sedans, hatchbacks, and SUVs facing the 10-year diesel or 15-year petrol ban in Delhi-NCR and pan-India. We provide doorstep flatbed pickup, upfront IMPS payment, and the official Certificate of Deposit (CoD) unlocking up to 25% road tax savings on your next new car.',
      process: [
        'Doorstep flatbed recovery (zero driving, zero toll risk)',
        'Upfront IMPS/NEFT payment credited directly before handover',
        'Execution of statutory Form 2B legal undertaking',
        'Official CoD generated on MoRTH VAHAN 4.0 portal within 24 hours',
      ],
      suitable: 'Maruti Suzuki, Hyundai, Honda, Toyota, Tata, Mahindra, Ford, Volkswagen, Skoda, etc.',
    },
    {
      id: 'bike',
      title: 'Two-Wheeler & Scooter Scrapping',
      subtitle: 'Commuter Bikes, Scooters & Electric Two-Wheelers',
      image: '/images/motorcycle.jpg',
      icon: Bike,
      tag: 'Two-Wheelers',
      description:
        'Certified vehicle scrappage for end-of-life commuter motorcycles, geared scooters, and modern electric 2-wheelers. Electric batteries (Lithium-ion / Lead-acid) are depolluted and recycled through CPCB-authorized metallurgical channels.',
      process: [
        'Collection with ramp-equipped two-wheeler transport carriers',
        'Engine casing and frame structural chassis excision under CCTV',
        'De-registration on Parivahan VAHAN database without RC hassle',
        'CoD issued for registration fee concessions on new two-wheelers',
      ],
      suitable: 'Hero, Bajaj, TVS, Honda Activa, Royal Enfield, Yamaha, Suzuki, Electric Scooters, etc.',
    },
    {
      id: 'commercial',
      title: 'Commercial Taxis & Light Fleet Vehicles',
      subtitle: 'Yellow-Plate Cabs & Intra-City Logistics LCVs',
      image: '/images/commercial-truck.jpg',
      icon: Truck,
      tag: 'Commercial Taxis & LCV',
      description:
        'Comprehensive de-registration solutions for ride-hailing drivers, yellow-plate taxis, and delivery fleet vans reaching state age limits or failing fitness renewals. We handle road tax surrender, permit cancellation, and issue CoD for 15% motor vehicle tax rebate on your new commercial vehicle.',
      process: [
        'Permit surrender & fitness ledger clearance guidance',
        'Weighbridge certification on verified industrial scales',
        '15% Motor Vehicle Tax Concession voucher on new commercial chassis',
        'Fast-track 48-hour CoD generation for swift permit transfer',
      ],
      suitable: 'Maruti Dzire Tour, Toyota Etios, Mahindra Bolero Maxi, Tata Ace, Ashok Leyland Dost, etc.',
    },
    {
      id: 'heavy',
      title: 'Heavy Commercial Trucks & Buses',
      subtitle: 'Rigid Multi-Axle Trucks, Tippers & Fleet Buses',
      image: '/images/car-shredder.jpg',
      icon: Bus,
      tag: 'Heavy Transport',
      description:
        'Heavy-capacity industrial shearing and automated compaction for end-of-life haulage trucks, multi-axle trailers, school buses, and state transport corporation fleets. We guarantee accurate electronic weighbridge receipts and statutory liability indemnity.',
      process: [
        'Hydraulic shearing of heavy chassis rails and multi-axle bogies',
        'Zero-landfill fluid evacuation for heavy industrial oils and coolants',
        'Form 2B corporate indemnity releasing fleet operators from future liabilities',
        'Issuance of official VAHAN Certificate of Vehicle Scrapping (CVS)',
      ],
      suitable: 'Tata Prima / Signa, Ashok Leyland, BharatBenz, Eicher, Volvo, Institutional Buses.',
    },
    {
      id: 'corporate',
      title: 'Corporate & Government Fleet Decommissioning',
      subtitle: 'PSUs, Multinational Corporations & Institutional Fleets',
      image: '/images/depollution-tech.jpg',
      icon: Building2,
      tag: 'Enterprise & PSUs',
      description:
        'Turnkey disposal and transparent e-auction support for corporate vehicle fleets, banking institution vehicles, and central/state government departments. Includes auditable ESG environmental sustainability reports and GST credit compliance.',
      process: [
        'On-site batch inspection and serial number reconciliation',
        'Zero-cash, direct corporate RTGS bank settlement',
        'Bulk VAHAN 4.0 deregistration ledger with signed statutory certificates',
        'Comprehensive carbon-offset & secondary steel recycling certification',
      ],
      suitable: 'Corporate Sedans, Executive Fleets, Utility Vans, Field Logistics Fleets.',
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
              <span>Full Spectrum Vehicle Scrapping</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              MoRTH certified scrappage solutions for{' '}
              <span className="text-[#10b981]">every vehicle category</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From family sedans and two-wheelers to commercial yellow-plate taxis and multi-axle freight trucks,
              Mervoxa provides licensed Registered Vehicle Scrapping Facility (RVSF) operations with complete legal indemnity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="scroll-mt-32 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm hover:border-emerald-500/80 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                        {svc.tag}
                      </span>
                    </div>

                    <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-slate-900 tracking-tight">
                      {svc.title}
                    </h2>
                    <div className="text-xs font-semibold text-emerald-700">
                      {svc.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {svc.description}
                    </p>

                    <div className="pt-2 space-y-2">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Statutory Protocol:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {svc.process.map((p, i) => (
                          <div key={i} className="flex items-start gap-2 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setModalOpen(true)}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all flex items-center gap-1.5 shadow-none cursor-pointer"
                      >
                        <span>Book Doorstep Pickup</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href="tel:+919873528080"
                        className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Helpline Desk</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Image Container with Rounded Shape */}
                  <div className="lg:col-span-5">
                    <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <div className="text-[10px] font-mono text-emerald-300 font-bold uppercase">
                          MoRTH RVSF Certified
                        </div>
                        <div className="text-xs font-semibold">
                          Doorstep Flatbed &bull; 100% Upfront Payout
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

      {/* Bottom CTA in Deep Forest Teal matching Mockup */}
      <section className="py-14 bg-[#042f2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Ready to scrap your vehicle legally?
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 mb-6 leading-relaxed">
            Enter your vehicle registration number to get an instant appraisal and schedule free doorstep flatbed towing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 transition-colors cursor-pointer shadow-none"
            >
              Check Scrap Valuation Online &rarr;
            </button>
            <a
              href="tel:+919873528080"
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#10b981] transition-colors shadow-none"
            >
              Call 24/7 Desk: +91 9873 528 080
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
