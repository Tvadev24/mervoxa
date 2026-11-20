'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import {
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  FileCheck2,
  Building,
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#042621] border-t border-emerald-950/60 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top 4-Column Main Section matching UI Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-emerald-900/40">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Logo size="md" lightText={true} />
            </Link>

            <div className="pt-1 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>HQ:</strong> Suite 402, Signature Tower, Sector 62, Noida, UP &ndash; 201301
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Yard 01:</strong> Plot 14-B, Bhagwanpur Industrial Area, Roorkee &ndash; 247661
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong>24/7 Helpline:</strong> +91 9873 528 080
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong>Support Desk:</strong> support@mervoxa.com
                </span>
              </div>
            </div>

            {/* 4 Social Icons in Emerald Circular Buttons matching Mockup */}
            <div className="flex items-center gap-2.5 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow-none"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow-none"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow-none"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow-none"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Understand & Documentation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-heading font-extrabold text-sm text-white tracking-wider flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              <span>Understand Scrapping</span>
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/vehicle-scrapping-process" className="hover:text-emerald-400 transition-colors">
                  5-Step Scrapping Timeline
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-emerald-400 transition-colors">
                  Scrap Value &amp; 25% Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-emerald-400 transition-colors">
                  Certificate of Deposit (CoD)
                </Link>
              </li>
              <li>
                <Link href="/certificates#cvs" className="hover:text-emerald-400 transition-colors">
                  Certificate of Vehicle Scrapping (CVS)
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-emerald-400 transition-colors">
                  NGT 10-Yr Diesel &amp; 15-Yr Petrol Ban
                </Link>
              </li>
              <li>
                <Link href="/guides#no-rc" className="hover:text-emerald-400 transition-colors">
                  How to Scrap Vehicle Without RC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Facilities */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-heading font-extrabold text-sm text-white tracking-wider flex items-center gap-1.5">
              <Building className="w-4 h-4 text-emerald-400" />
              <span>Company</span>
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="hover:text-emerald-400 transition-colors">
                  About Mervoxa
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-emerald-400 transition-colors">
                  Our Team &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Scrappage Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-emerald-400 transition-colors">
                  Pan-India Collection Hubs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-emerald-400 transition-colors">
                  Contact &amp; Towing Desk
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-emerald-400 transition-colors">
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Statutory Verification */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-heading font-extrabold text-sm text-white tracking-wider">
              Subscribe Newsletter
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Get the latest updates on NGT policies, RTO scrappage rules, and steel recycling index.
            </p>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="bg-white p-1 pl-4 rounded-full flex items-center justify-between shadow-sm border border-emerald-900/20">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs font-semibold outline-none pr-2"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-[#059669] hover:bg-[#10b981] text-white flex items-center justify-center flex-shrink-0 transition-all cursor-pointer shadow-none"
                  aria-label="Subscribe"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 font-semibold mt-2">
                  ✓ Thank you! You have been subscribed to Mervoxa updates.
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Sub-Footer Bar matching UI Theme */}
        <div className="pt-8 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; 2025 Mervoxa Ventures Private Limited. Backed by EagleBulls Realty Pvt Ltd &amp; J S Enterprises. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-conditions" className="hover:text-emerald-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link href="/sitemap" className="hover:text-emerald-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
