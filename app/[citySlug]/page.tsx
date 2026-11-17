'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  MapPin,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Phone,
  ArrowRight,
  FileCheck,
} from 'lucide-react';

interface CityPageProps {
  params: {
    citySlug: string;
  };
}

function parseCitySlug(slug: string) {
  const lower = slug.toLowerCase();
  const isBike = lower.includes('bike');
  const vehicleType = isBike ? 'Two-Wheeler / Bike' : 'Car';

  let cleanName = lower
    .replace('authorised-', '')
    .replace('authorized-', '')
    .replace('car-scrap-dealers-in-', '')
    .replace('car-scrap-dealer-in-', '')
    .replace('bike-scrap-dealers-in-', '')
    .replace('bike-scrap-dealer-in-', '')
    .replace('scrap-bike-in-', '')
    .replace('-scrap-dealers', '')
    .replace('-scrap-dealer', '');

  const cityName = cleanName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    vehicleType,
    isBike,
    cityName: cityName || 'Your City',
  };
}

export default function CityScrapPage({ params }: CityPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { citySlug } = params;

  const reservedSlugs = [
    'about-us',
    'services',
    'team',
    'calculator',
    'certificates',
    'locations',
    'guides',
    'contact-us',
    'privacy-policy',
    'terms-conditions',
    'sitemap',
    'vehicle-scrapping-process',
  ];

  if (reservedSlugs.includes(citySlug.toLowerCase())) {
    return null;
  }

  const { vehicleType, isBike, cityName } = parseCitySlug(citySlug);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenQuoteModal={() => setModalOpen(true)} />

      {/* Hero Header for City matching Mockup UI Theme */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#f0fdf4]/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Authorised RVSF Yard Service &bull; {cityName}</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
                Authorised {vehicleType} Scrap Facility in{' '}
                <span className="text-[#10b981]">{cityName}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                Looking to scrap your old {vehicleType.toLowerCase()} legally in {cityName}?
                Mervoxa operates a verified Registered Vehicle Scrapping Facility network under MoRTH MV Rules 2021.
                Get free doorstep flatbed towing in {cityName}, instant upfront IMPS bank payout, and official VAHAN CoD &amp; CVS certificates.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all flex items-center gap-2 cursor-pointer shadow-none"
                >
                  <span>Check Scrap Value in {cityName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919873528080"
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-emerald-600 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call {cityName} Desk</span>
                </a>
              </div>

              {/* Assurance points */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Free Doorstep Towing across {cityName}
                </span>
                <span className="text-slate-300">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Direct VAHAN De-Registration
                </span>
                <span className="text-slate-300">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Form 2B Legal Indemnity
                </span>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden border-2 border-emerald-100 shadow-md bg-slate-100">
                <Image
                  src={isBike ? '/images/motorcycle.jpg' : '/images/flatbed-towing.jpg'}
                  alt={`Scrap ${vehicleType} in ${cityName}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-mono font-bold text-emerald-300 uppercase">
                    RVSF Pickup Dispatch &bull; {cityName}
                  </div>
                  <div className="text-sm font-bold">
                    Doorstep Flatbed Recovery within 4 to 6 Hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mervoxa in this city */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Why vehicle owners in {cityName} trust Mervoxa over local scrap dealers
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm font-normal">
              Unregulated kabadiwalas in {cityName} cannot cancel your Registration Certificate (RC), leaving you liable for police cases or automated traffic fines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f8faf9] border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1.5">
                100% Legal Indemnity (Form 2B)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Before your vehicle is winched onto our tow truck in {cityName}, we execute statutory Form 2B.
                Your liability is immediately and permanently terminated.
              </p>
            </div>

            <div className="bg-[#f8faf9] border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1.5">
                Official VAHAN CoD &amp; CVS
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Generated directly on the Ministry of Road Transport Parivahan database, unlocking up to
                25% state road tax concession when registering your next vehicle in {cityName}.
              </p>
            </div>

            <div className="bg-[#f8faf9] border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:border-emerald-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1.5">
                Free Doorstep Flatbed Towing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Zero driving risk. Our GPS-equipped recovery carriers pick up your vehicle from your residence,
                society parking, or office anywhere across {cityName} at zero charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Booking Callout in Deep Forest Teal matching Mockup */}
      <section className="py-14 bg-[#042f2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Schedule free {vehicleType.toLowerCase()} inspection in {cityName} today
          </h2>
          <p className="text-emerald-100/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Get instant valuation, upfront bank payout, and genuine government Parivahan de-registration certificates.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-7 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 transition-colors cursor-pointer inline-flex items-center gap-2 shadow-none"
            >
              <span>Book Doorstep Pickup in {cityName}</span>
              <ArrowRight className="w-4 h-4" />
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
