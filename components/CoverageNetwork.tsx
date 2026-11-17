'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation, Truck, Clock, ShieldCheck, Check } from 'lucide-react';

export default function CoverageNetwork() {
  const [selectedRegion, setSelectedRegion] = useState('delhi_ncr');

  const regions: Record<string, { name: string; yards: string; turnaround: string; cities: string[] }> = {
    delhi_ncr: {
      name: 'Delhi NCR Hubs',
      yards: 'Facility 01 (Noida Sec 68) & Facility 02 (Manesar Gurugram)',
      turnaround: 'Same-Day 4 to 6 Hours Pickup',
      cities: [
        'Central & South Delhi',
        'Noida & Greater Noida',
        'Gurgaon / Gurugram',
        'Faridabad',
        'Ghaziabad & Indirapuram',
        'Manesar & Sohna',
        'Bahadurgarh',
        'Sonipat & Kundli',
      ],
    },
    up: {
      name: 'Uttar Pradesh',
      yards: 'RVSF Roorkee / Meerut Expressway Facility',
      turnaround: '24-Hour Doorstep Towing',
      cities: [
        'Lucknow',
        'Meerut & Modinagar',
        'Agra',
        'Kanpur',
        'Bareilly',
        'Moradabad',
        'Aligarh',
        'Muzaffarnagar',
        'Prayagraj',
        'Gorakhpur',
      ],
    },
    uttarakhand: {
      name: 'Uttarakhand',
      yards: 'Manglour Roorkee Industrial Facility (Authorized RVSF)',
      turnaround: '24 to 48 Hours Pickup',
      cities: [
        'Dehradun',
        'Haridwar',
        'Roorkee',
        'Rishikesh',
        'Udham Singh Nagar',
        'Kashipur',
        'Haldwani / Nainital',
      ],
    },
    rajasthan: {
      name: 'Rajasthan',
      yards: 'Bhiwadi / Neemrana Auto Cluster Facility',
      turnaround: '24-Hour Pickup',
      cities: [
        'Jaipur',
        'Alwar',
        'Bhiwadi',
        'Neemrana',
        'Kotputli',
        'Rewari Belt',
      ],
    },
    south_west: {
      name: 'South & Western Hubs',
      yards: 'Bengaluru Peenya & Pune Industrial RVSFs',
      turnaround: '24 to 48 Hours',
      cities: [
        'Bengaluru (Bangalore)',
        'Mysuru (Mysore)',
        'Pune & Pimpri Chinchwad',
        'Navi Mumbai MMR',
        'Thane Belt',
      ],
    },
  };

  return (
    <section id="network" className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-3">
            <Navigation className="w-3.5 h-3.5" />
            Pan-India Physical RVSF Infrastructure
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            One seamless Mervoxa standard across every state.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From Delhi NCR's dense urban centers to state industrial zones, our fleet of GPS-equipped
            flatbed tow trucks provides hassle-free doorstep recovery.
          </p>
        </div>

        {/* Region Switcher - Minimal radius */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-8">
          {Object.entries(regions).map(([key, region]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedRegion(key)}
              className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-bold transition-colors cursor-pointer border ${
                selectedRegion === key
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Active Region Detail Card - Minimal radius */}
        <div className="bg-white border border-slate-200 rounded-md p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">
                ACTIVE RVSF COVERAGE ZONE
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900">
                {regions[selectedRegion].name}
              </h3>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500">Main Facility &amp; Yard:</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">
                      {regions[selectedRegion].yards}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500">Typical Doorstep Dispatch:</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-700">
                      {regions[selectedRegion].turnaround}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500">Towing Cost:</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      100% Free Doorstep Flatbed (Zero Deduction)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Cities Covered List - Minimal radius */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-5 rounded">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3.5 flex items-center justify-between">
                <span>Key Serviced Cities &amp; Municipalities</span>
                <span className="text-[11px] text-emerald-800 font-mono font-bold bg-emerald-100 px-2 py-0.5 rounded">
                  {regions[selectedRegion].cities.length} Service Clusters Active
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {regions[selectedRegion].cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded bg-white border border-slate-200 text-xs text-slate-800 font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{city}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                <span>Outside these areas? We also arrange pan-India inter-state transport.</span>
                <Link href="/locations" className="text-emerald-700 hover:underline font-bold">
                  View Full Network &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
