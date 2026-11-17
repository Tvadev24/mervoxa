'use client';


import React from 'react';
import Link from 'next/link';
import {
  Gavel,
  Car,
  Landmark,
  Truck,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesProps) {
  const serviceCards = [
    {
      id: 'indemnity',
      title: '100% Legal Indemnity',
      description: 'Complete protection for vehicle owners',
      icon: Gavel,
      href: '/services#indemnity',
    },
    {
      id: 'vahan',
      title: 'Direct VAHAN CoD & CVS',
      description: 'Get instant certificates online',
      icon: Car,
      href: '/certificates',
    },
    {
      id: 'payout',
      title: 'Upfront Bank Transfer',
      description: 'Fast & secure payment',
      icon: Landmark,
      href: '/calculator',
    },
    {
      id: 'towing',
      title: 'Free Doorstep Towing',
      description: 'At your convenience',
      icon: Truck,
      href: '/contact-us',
    },
    {
      id: 'transparency',
      title: 'Trusted & Transparent',
      description: 'No hidden charges',
      icon: ShieldCheck,
      href: '/about-us',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Dotted Grid on Left & Right */}
      <div className="absolute left-4 sm:left-8 top-16 hidden lg:block opacity-40 pointer-events-none">
        <div className="grid grid-cols-4 gap-2.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          ))}
        </div>
      </div>
      <div className="absolute right-4 sm:right-8 top-16 hidden lg:block opacity-40 pointer-events-none">
        <div className="grid grid-cols-4 gap-2.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Mockup */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-widest mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
              Our Services
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            <span className="text-emerald-500 font-bold">&bull;&bull;</span> Comprehensive RVSF services to power legal vehicle recycling <span className="text-emerald-500 font-bold">&bull;&bull;</span>
          </p>
        </div>

        {/* 5 Cards Row matching Mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group bg-white border border-slate-200/90 hover:border-emerald-500 p-5 rounded-2xl flex flex-col justify-between transition-all hover:shadow-md cursor-pointer relative"
              >
                {/* Top Row: Icon Container + Small Chevron Arrow in Top-Right */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors mt-1" />
                </div>

                {/* Card Title & Description */}
                <div>
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Button matching Mockup */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all cursor-pointer shadow-none"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
