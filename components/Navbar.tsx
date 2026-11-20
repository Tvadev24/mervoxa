'use client';


import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Car,
  Calculator,
  ArrowRight,
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Main Navigation Bar - Crisp White with Pill CTA Buttons */}
      <nav
        className={`transition-all duration-200 bg-white ${
          scrolled
            ? 'shadow-sm border-b border-slate-200/90 py-2.5'
            : 'border-b border-slate-200/70 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" ref={dropdownRef}>
          {/* Logo */}
          <Link href="/" className="group focus:outline-none flex-shrink-0">
            <Logo size="md" lightText={false} />
          </Link>

          {/* Desktop Streamlined Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* 1. Home */}
            <Link
              href="/"
              className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 ${
                pathname === '/' ? 'text-emerald-600 font-extrabold' : 'text-slate-700 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>

            {/* 2. Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 inline-flex items-center gap-1 cursor-pointer ${
                  pathname.startsWith('/services') ? 'text-emerald-600 font-extrabold' : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === 'services' && (
                <div className="absolute top-full -left-4 w-80 bg-white border border-slate-200 rounded-xl shadow-lg p-3 grid grid-cols-1 gap-1 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1">
                    Certified Scrappage Solutions
                  </div>
                  <Link
                    href="/services#car"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Private Cars
                  </Link>

                  <Link
                    href="/services#bike"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Two-Wheelers &amp; Scooters
                  </Link>

                  <Link
                    href="/services#commercial"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Commercial Taxis &amp; Fleets
                  </Link>

                  <Link
                    href="/services#heavy"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Heavy Trucks &amp; Buses
                  </Link>

                  <Link
                    href="/services#corporate"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Corporate Fleets &amp; PSUs
                  </Link>
                </div>
              )}
            </div>

            {/* 3. How It Works Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('process')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 inline-flex items-center gap-1 cursor-pointer ${
                  pathname.startsWith('/vehicle-scrapping-process') || pathname.startsWith('/certificates') || pathname.startsWith('/calculator')
                    ? 'text-emerald-600 font-extrabold'
                    : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>How It Works</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === 'process' && (
                <div className="absolute top-full -left-4 w-72 bg-white border border-slate-200 rounded-xl shadow-lg p-3 grid grid-cols-1 gap-1 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1">
                    Traceability &amp; Documents
                  </div>
                  <Link
                    href="/vehicle-scrapping-process"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    5-Step Process
                  </Link>

                  <Link
                    href="/certificates"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    CoD &amp; CVS Certificates
                  </Link>

                  <Link
                    href="/calculator"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Scrap &amp; Tax Calculator
                  </Link>
                </div>
              )}
            </div>

            {/* 4. RVSF Network */}
            <Link
              href="/locations"
              className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 ${
                pathname === '/locations' ? 'text-emerald-600 font-extrabold' : 'text-slate-700 hover:text-emerald-600'
              }`}
            >
              Network Hubs
            </Link>

            {/* 5. Company & Guides Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('company')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 inline-flex items-center gap-1 cursor-pointer ${
                  pathname.startsWith('/about-us') || pathname.startsWith('/team') || pathname.startsWith('/guides') || pathname.startsWith('/contact-us')
                    ? 'text-emerald-600 font-extrabold'
                    : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>Company &amp; Guides</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === 'company' && (
                <div className="absolute top-full -left-8 w-72 bg-white border border-slate-200 rounded-xl shadow-lg p-3 grid grid-cols-1 gap-1 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1">
                    About &amp; Knowledgebase
                  </div>
                  <Link
                    href="/about-us"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    About Mervoxa RVSF
                  </Link>

                  <Link
                    href="/team"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Our Team &amp; RTO Desk
                  </Link>

                  <Link
                    href="/guides"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Policy &amp; Legal Guides
                  </Link>

                  <Link
                    href="/contact-us"
                    className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    Contact &amp; Towing Desk
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Right Actions - Pill Call Helpline & Pill Green Get Scrap Value */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919873528080"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Helpline</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              type="button"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#10b981] hover:bg-[#059669] transition-all cursor-pointer shadow-none"
            >
              <span>Get Scrap Value</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuoteModal}
              type="button"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#10b981] hover:bg-[#059669] shadow-none"
            >
              Get Scrap Value
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg max-h-[85vh] overflow-y-auto animate-fadeIn">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSubMenu(mobileSubMenu === 'services' ? null : 'services')}
                className="w-full px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubMenu === 'services' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg">
                  <Link
                    href="/services#car"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Private Car Scrapping
                  </Link>
                  <Link
                    href="/services#bike"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Two-Wheelers &amp; Scooters
                  </Link>
                  <Link
                    href="/services#commercial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Commercial Taxis &amp; Fleets
                  </Link>
                  <Link
                    href="/services#heavy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Heavy Trucks &amp; Buses
                  </Link>
                  <Link
                    href="/services#corporate"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Corporate Fleet Disposal
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile How It Works Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSubMenu(mobileSubMenu === 'process' ? null : 'process')}
                className="w-full px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>How It Works</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubMenu === 'process' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubMenu === 'process' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg">
                  <Link
                    href="/vehicle-scrapping-process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    5-Step Scrapping Timeline
                  </Link>
                  <Link
                    href="/certificates"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    CoD &amp; CVS Certificates
                  </Link>
                  <Link
                    href="/calculator"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Scrap &amp; Tax Calculator
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Network Hubs
            </Link>

            {/* Mobile Company Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSubMenu(mobileSubMenu === 'company' ? null : 'company')}
                className="w-full px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Company &amp; Guides</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubMenu === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubMenu === 'company' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg">
                  <Link
                    href="/about-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    About Mervoxa RVSF
                  </Link>
                  <Link
                    href="/team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Leadership &amp; Team
                  </Link>
                  <Link
                    href="/guides"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Policy &amp; NGT Guides
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700"
                  >
                    Contact &amp; Towing Desk
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <a
                href="tel:+919873528080"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Helpline (+91 9873 528 080)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-bold text-white bg-[#10b981] hover:bg-[#059669] shadow-none"
              >
                <span>Get Scrap Value Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
