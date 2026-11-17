'use client';


import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react';

export default function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    regNumber: '',
    fullName: '',
    phone: '',
    city: 'Delhi NCR',
    vehicleModel: '',
    vehicleYear: '2010',
    preferredDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.regNumber || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="quote-form" className="py-16 md:py-24 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-md p-6 sm:p-10 relative overflow-hidden shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-3.5">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Request Registered Successfully!
              </h3>
              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName || 'Vehicle Owner'}</strong>.
                Our RTO Officer has initiated the VAHAN check for registration{' '}
                <span className="font-mono text-emerald-700 font-bold">{formData.regNumber}</span>.
                You will receive a call at <strong className="text-slate-900">{formData.phone}</strong> within 15 minutes
                with the guaranteed scrap payout and pickup schedule.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:border-emerald-600 transition-colors cursor-pointer"
                >
                  Submit Another Vehicle
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Official RVSF Pickup Booking
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Schedule free doorstep inspection &amp; instant payout.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">
                  Zero advance fees &bull; 100% IMPS payment prior to pickup &bull; Immediate Form 2B legal handover
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Vehicle Registration Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. DL 03 CC 4471"
                      value={formData.regNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, regNumber: e.target.value.toUpperCase() })
                      }
                      className="w-full bg-white border border-slate-300 text-slate-900 rounded px-3 py-2 text-sm font-semibold focus:outline-none focus:border-emerald-600 uppercase tracking-wider"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-900 rounded px-3 py-2 text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-900 rounded px-3 py-2 text-sm focus:outline-none focus:border-emerald-600 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Pickup Location / City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Delhi NCR">Delhi NCR (Delhi, Noida, Gurgaon, GZB)</option>
                      <option value="Noida">Noida / Greater Noida</option>
                      <option value="Gurugram">Gurgaon / Manesar</option>
                      <option value="Faridabad">Faridabad</option>
                      <option value="Ghaziabad">Ghaziabad / Meerut</option>
                      <option value="Lucknow">Lucknow (UP)</option>
                      <option value="Dehradun">Dehradun / Haridwar (UK)</option>
                      <option value="Jaipur">Jaipur (Rajasthan)</option>
                      <option value="Bengaluru">Bengaluru (Karnataka)</option>
                      <option value="Other">Other City (Pan-India)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Pickup Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-white border border-slate-300 text-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* Assurance row */}
                <div className="pt-1.5 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    Encrypted submission. Your details are never shared with third parties.
                  </span>
                  <span className="text-emerald-700 font-semibold">
                    100% Free Doorstep Flatbed Towing
                  </span>
                </div>

                {/* Submit button - STRICTLY NO DROP SHADOW, minimal radius */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Guaranteed Scrap Valuation &amp; Pickup</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
