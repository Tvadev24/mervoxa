'use client';


import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Network, Car, Bike, FileText, Building, MapPin } from 'lucide-react';

export default function SitemapPage() {
  const cities = [
    { name: 'Delhi', carSlug: 'car-scrap-dealer-in-delhi', bikeSlug: 'scrap-bike-in-delhi' },
    { name: 'Noida', carSlug: 'authorised-car-scrap-dealers-in-noida', bikeSlug: 'bike-scrap-dealer-in-noida' },
    { name: 'Gurgaon', carSlug: 'car-scrap-dealers-in-gurgaon', bikeSlug: 'bike-scrap-dealers-in-gurgaon' },
    { name: 'Faridabad', carSlug: 'car-scrap-dealers-in-faridabad', bikeSlug: 'bike-scrap-dealer-in-faridabad' },
    { name: 'Ghaziabad', carSlug: 'car-scrap-dealers-in-ghaziabad', bikeSlug: 'bike-scrap-dealer-in-ghaziabad' },
    { name: 'Lucknow', carSlug: 'car-scrap-dealers-in-lucknow', bikeSlug: 'bike-scrap-dealer-in-lucknow' },
    { name: 'Kanpur', carSlug: 'car-scrap-dealers-in-kanpur', bikeSlug: 'bike-scrap-dealer-in-kanpur' },
    { name: 'Dehradun', carSlug: 'car-scrap-dealers-in-dehradun', bikeSlug: 'bike-scrap-dealer-in-dehradun' },
    { name: 'Bengaluru', carSlug: 'car-scrap-dealers-in-bangalore', bikeSlug: 'bike-scrap-dealer-in-bangalore' },
    { name: 'Jaipur', carSlug: 'car-scrap-dealers-in-jaipur', bikeSlug: 'bike-scrap-dealer-in-jaipur' },
    { name: 'Agra', carSlug: 'car-scrap-dealers-in-agra', bikeSlug: 'bike-scrap-dealer-in-agra' },
    { name: 'Meerut', carSlug: 'car-scrap-dealers-in-meerut', bikeSlug: 'bike-scrap-dealer-in-meerut' },
    { name: 'Roorkee', carSlug: 'car-scrap-dealers-in-roorkee', bikeSlug: 'bike-scrap-dealer-in-roorkee' },
    { name: 'Haridwar', carSlug: 'car-scrap-dealers-in-haridwar', bikeSlug: 'bike-scrap-dealer-in-haridwar' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="pt-36 pb-16 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-4">
              <Network className="w-4 h-4 text-emerald-700" />
              <span>HTML Navigation Sitemap</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Website Structure &amp; Directory
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore all portals, vehicle scrapping services, legal guides, and city facility hubs of Mervoxa Ventures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main Website Pages */}
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-6 flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-700" />
              <span>Corporate &amp; Process Pages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Home Page', href: '/' },
                { name: 'About Mervoxa & RVSF', href: '/about-us' },
                { name: 'Our Team & Leadership', href: '/team' },
                { name: 'Comprehensive Services', href: '/services' },
                { name: '5-Step Scrapping Process', href: '/vehicle-scrapping-process' },
                { name: 'Scrap Value & Tax Calculator', href: '/calculator' },
                { name: 'CoD & CVS Certificates', href: '/certificates' },
                { name: 'Pan-India RVSF Network', href: '/locations' },
                { name: 'Policy Guides & NGT Rules', href: '/guides' },
                { name: 'Contact & Doorstep Towing', href: '/contact-us' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms & Conditions', href: '/terms-conditions' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="p-4 rounded-md bg-slate-50 border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  {item.name} &rarr;
                </Link>
              ))}
            </div>
          </div>

          {/* Car Scrap Dealers by City */}
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-6 flex items-center gap-2">
              <Car className="w-5 h-5 text-emerald-700" />
              <span>Authorized Car Scrap Dealers by City</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cities.map((city, idx) => (
                <Link
                  key={idx}
                  href={`/${city.carSlug}`}
                  className="p-3 rounded bg-slate-50 border border-slate-200 hover:border-emerald-600 hover:text-emerald-800 text-slate-700 text-xs font-medium transition-colors truncate"
                >
                  Car Scrap in {city.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bike Scrap Dealers by City */}
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-6 flex items-center gap-2">
              <Bike className="w-5 h-5 text-emerald-700" />
              <span>Authorized Bike &amp; Two-Wheeler Scrap Dealers by City</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cities.map((city, idx) => (
                <Link
                  key={idx}
                  href={`/${city.bikeSlug}`}
                  className="p-3 rounded bg-slate-50 border border-slate-200 hover:border-emerald-600 hover:text-emerald-800 text-slate-700 text-xs font-medium transition-colors truncate"
                >
                  Bike Scrap in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

