'use client';


import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledReg?: string;
  initialRegNo?: string;
}

export default function InstantQuoteModal({
  isOpen,
  onClose,
  prefilledReg = '',
  initialRegNo = '',
}: InstantQuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [regNo, setRegNo] = useState(initialRegNo || prefilledReg);
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Delhi NCR');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regNo || !phone) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3.5">
            <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Valuation Request Logged!
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-normal">
              Registration <strong className="text-emerald-700 font-mono">{regNo}</strong> has been
              submitted to our RTO inspection desk. Our officer will call you at{' '}
              <strong className="text-slate-900">{phone}</strong> with the guaranteed cash payout &amp; pickup time.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all cursor-pointer shadow-none"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant MoRTH Valuation</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Get Guaranteed Scrap Value
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-normal">
                Enter your vehicle registration to pull current RTO status and maximum scrap payout.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Registration Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. DL 03 CC 4471"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value.toUpperCase())}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:border-emerald-600 uppercase tracking-wider"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  City / Location
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:border-emerald-600"
                >
                  <option value="Delhi NCR">Delhi NCR (All Zones)</option>
                  <option value="Noida">Noida &amp; Greater Noida</option>
                  <option value="Gurgaon">Gurgaon / Gurugram</option>
                  <option value="Ghaziabad">Ghaziabad &amp; Sahibabad</option>
                  <option value="Faridabad">Faridabad</option>
                  <option value="Lucknow">Lucknow &amp; Kanpur</option>
                  <option value="Jaipur">Jaipur &amp; Alwar</option>
                  <option value="Dehradun">Dehradun &amp; Roorkee</option>
                  <option value="Other">Other (Pan-India)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none"
                >
                  <span>Get Guaranteed Cash Valuation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>100% Privacy Protected &bull; Zero Spam Guarantee</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
