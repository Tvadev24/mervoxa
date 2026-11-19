'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  MapPin,
  Building,
  Truck,
  ShieldCheck,
  Phone,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export default function LocationsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const hubs = [
    {
      city: 'Maharashtra Hub (Mumbai & Pune)',
      address: 'Plot C-12, TTC Industrial Area, Turbhe MIDC, Navi Mumbai / Bhosari MIDC, Pune, Maharashtra 400705',
      coverage: 'Mumbai City, Mumbai Suburban, Pune, Thane, Navi Mumbai, Kalyan-Dombivli, Pimpri-Chinchwad, Panvel, Nashik',
      turnaround: 'Same-day doorstep flatbed collection across MMR & Pune within 3 to 4 hours',
      towingFleet: '14 GPS-tracked hydraulic winch flatbeds & heavy carriers',
      helpline: '+91 9873 528 080',
    },
    {
      city: 'Delhi NCR Hub (Noida & Delhi)',
      address: 'Suite 402, Signature Tower, Sector 62, Noida, Gautam Buddha Nagar, UP 201301',
      coverage: 'South Delhi, East Delhi, West Delhi, North Delhi, Noida, Greater Noida, Ghaziabad',
      turnaround: 'Same-day doorstep pickup within 3 hours',
      towingFleet: '12 GPS-tracked hydraulic flatbeds',
      helpline: '+91 9873 528 080',
    },
    {
      city: 'Gurgaon & Haryana Hub',
      address: 'Industrial Plot 88, Udyog Vihar Phase IV, Gurugram, Haryana 122015',
      coverage: 'Gurugram, Manesar, Faridabad, Rewari, Palwal, Sonipat, Panipat',
      turnaround: 'Same-day doorstep flatbed collection',
      towingFleet: '8 Hydraulic winch flatbed carriers',
      helpline: '+91 9873 528 080',
    },
    {
      city: 'Industrial Scrapping Facility 01 (Roorkee)',
      address: 'Plot 14-B, Bhagwanpur Industrial Area, Roorkee, Haridwar, Uttarakhand 247661',
      coverage: 'Haridwar, Roorkee, Dehradun, Saharanpur, Muzaffarnagar, Meerut',
      turnaround: 'Central Heavy Automated Dismantling & Material Recovery Yard',
      towingFleet: 'Industrial heavy tow & multi-car transporters',
      helpline: '+91 9873 528 080',
    },
    {
      city: 'Uttar Pradesh Central Hub (Lucknow)',
      address: 'Transport Nagar Phase II, Amar Shaheed Path, Lucknow, UP 226012',
      coverage: 'Lucknow, Kanpur, Ayodhya, Barabanki, Unnao, Rae Bareli',
      turnaround: '24-hour scheduled doorstep collection',
      towingFleet: '6 Flatbed tow units & 2-wheeler ramp carriers',
      helpline: '+91 9873 528 080',
    },
    {
      city: 'Rajasthan Hub (Jaipur & Alwar)',
      address: 'RIICO Industrial Area, Phase III, Sitapura, Jaipur, Rajasthan 302022',
      coverage: 'Jaipur, Alwar, Bhiwadi, Ajmer, Sikar, Kota',
      turnaround: 'Doorstep pickup within 24 hours of booking',
      towingFleet: '5 Hydraulic recovery carriers',
      helpline: '+91 9873 528 080',
    },
    {
      city: 'South India Hub (Bengaluru)',
      address: 'Peenya Industrial Estate, 4th Phase, Bengaluru, Karnataka 560058',
      coverage: 'Bengaluru Urban, Bengaluru Rural, Hosur, Tumakuru, Mysuru',
      turnaround: 'Same-day / next-day doorstep pickup',
      towingFleet: '7 Flatbed tow trucks',
      helpline: '+91 9873 528 080',
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
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Pan-India Registered Facility Network</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Our registered RVSF yards &amp;{' '}
              <span className="text-[#10b981]">doorstep collection hubs</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Operating a verified network of Registered Vehicle Scrapping Facilities (RVSFs) with dedicated
              GPS-tracked hydraulic flatbed tow fleets across Maharashtra (Mumbai &amp; Pune), Delhi NCR, Uttar Pradesh, Haryana, Rajasthan, Uttarakhand, and Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Hubs Cards Grid matching Mockup Design */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    <Building className="w-4 h-4 text-emerald-600" />
                    <span>Vehicle Recycling Center</span>
                  </div>

                  <h2 className="font-heading font-extrabold text-lg text-slate-900">
                    {hub.city}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {hub.address}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-slate-900">Coverage: </span>
                      <span className="text-slate-600">{hub.coverage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{hub.turnaround}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <Truck className="w-3.5 h-3.5 text-slate-400" />
                      <span>{hub.towingFleet}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`tel:${hub.helpline.replace(/\s+/g, '')}`}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{hub.helpline}</span>
                  </a>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all cursor-pointer shadow-none"
                  >
                    Book Pickup
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Forest Teal Bar matching Mockup */}
      <section className="py-14 bg-[#042f2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Don’t see your city listed above?
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 mb-6 leading-relaxed">
            Mervoxa arranges licensed interstate long-haul transport carriers for remote vehicle batches and enterprise fleet decommissioning pan-India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 transition-colors cursor-pointer shadow-none"
            >
              Request Custom Pickup &rarr;
            </button>
            <a
              href="tel:+919873528080"
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#10b981] transition-colors shadow-none"
            >
              Call Pan-India Desk
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
