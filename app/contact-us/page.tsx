'use client';


import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';

export default function ContactUsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleNo: '',
    city: 'Delhi NCR',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenQuoteModal={() => setModalOpen(true)} />

      {/* Hero Header matching Mockup UI Theme */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#f0fdf4]/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-4">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>24/7 Authorised RTO &amp; Towing Helpdesk</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Contact our vehicle scrapping &amp;{' '}
              <span className="text-[#10b981]">RTO desk</span>.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Book free doorstep flatbed recovery, inquire about lost RC scrappage, or consult our legal officers
              regarding VAHAN Certificate of Deposit (CoD) and 25% road tax rebates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#042f2e] text-white p-6 sm:p-8 rounded-3xl shadow-md space-y-4">
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Statutory RVSF Registered Office</span>
                </div>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  Mervoxa Ventures Private Limited
                </h2>
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-emerald-100/90 font-normal">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Corporate HQ:</strong> Suite 402, Signature Tower, Sector 62, Noida, Gautam Buddha Nagar, Uttar Pradesh &ndash; 201301
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Facility Yard 01:</strong> Plot 14-B, Bhagwanpur Industrial Area, Roorkee, Uttarakhand &ndash; 247661
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>
                      <strong>24/7 Helpline:</strong> +91 9873 528 080
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>
                      <strong>Official Email:</strong> support@mervoxa.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>
                      <strong>Operational Hours:</strong> 24 Hours &bull; 7 Days a Week
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-[#f8faf9] border border-slate-200 p-6 rounded-3xl space-y-3">
                <div className="font-heading font-bold text-sm text-slate-900">
                  What Happens When You Reach Out?
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Instant automated valuation based on real steel scrap weight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Same-day flatbed towing scheduled at your preferred time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>100% upfront electronic IMPS bank credit before vehicle moves</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Form 2B legal undertaking signed to terminate your liabilities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking & Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200/90 p-6 sm:p-10 rounded-3xl shadow-sm">
                <div className="mb-6">
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                    Schedule Doorstep Pickup &amp; Valuation
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                    Fill out the form below. An authorized officer will call you back within 15 minutes.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="font-heading font-extrabold text-lg text-emerald-900">
                      Pickup Request Received!
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-normal">
                      Thank you, {formData.name || 'Valued Vehicle Owner'}. Our logistics coordinator is reviewing your vehicle details ({formData.vehicleNo || 'Vehicle'}) and will contact you at {formData.phone || 'your phone number'} within 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white text-slate-900 text-xs sm:text-sm font-semibold rounded-full px-4 py-2.5 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white text-slate-900 text-xs sm:text-sm font-semibold rounded-full px-4 py-2.5 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Registration Number *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. DL 03 CC 4471"
                          value={formData.vehicleNo}
                          onChange={(e) => setFormData({ ...formData, vehicleNo: e.target.value.toUpperCase() })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white text-slate-900 text-xs sm:text-sm font-semibold rounded-full px-4 py-2.5 outline-none uppercase tracking-wider transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          City / Region *
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white text-slate-900 text-xs sm:text-sm font-semibold rounded-full px-4 py-2.5 outline-none transition-colors"
                        >
                          <option value="Delhi NCR">Delhi (All Zones)</option>
                          <option value="Noida">Noida &amp; Greater Noida</option>
                          <option value="Gurgaon">Gurgaon / Gurugram</option>
                          <option value="Ghaziabad">Ghaziabad &amp; Sahibabad</option>
                          <option value="Faridabad">Faridabad</option>
                          <option value="Lucknow">Lucknow &amp; Kanpur</option>
                          <option value="Jaipur">Jaipur &amp; Alwar</option>
                          <option value="Dehradun">Dehradun &amp; Roorkee</option>
                          <option value="Bengaluru">Bengaluru</option>
                          <option value="Other">Other City (Pan-India)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Vehicle Condition &amp; Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. 2010 Diesel Swift Dzire, running condition, RC available, tyres good..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white text-slate-900 text-xs sm:text-sm font-medium rounded-2xl p-4 outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Doorstep Towing &amp; Guaranteed Payout</span>
                    </button>
                  </form>
                )}
              </div>
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
