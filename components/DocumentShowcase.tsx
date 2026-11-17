'use client';


import React, { useState } from 'react';
import {
  FileText,
  QrCode,
  CheckCircle2,
} from 'lucide-react';

export default function DocumentShowcase() {
  const [activeDoc, setActiveDoc] = useState<'cod' | 'cvs'>('cod');

  return (
    <section id="certificates" className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-3">
            <FileText className="w-3.5 h-3.5" />
            Official Legal Paperwork
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Two documents. Two distinct legal protections.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            One proves we received your vehicle and transfers all liability. The other proves it no
            longer exists on the Indian National Transport Register (VAHAN).
          </p>
        </div>

        {/* Document Switcher Tabs - Numbering removed, minimal radius */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border border-slate-200 p-1 rounded-md inline-flex gap-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveDoc('cod')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-bold transition-colors cursor-pointer border ${
                activeDoc === 'cod'
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'bg-white border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Certificate of Deposit (CoD)
            </button>
            <button
              type="button"
              onClick={() => setActiveDoc('cvs')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-bold transition-colors cursor-pointer border ${
                activeDoc === 'cvs'
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'bg-white border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Certificate of Vehicle Scrapping (CVS)
            </button>
          </div>
        </div>

        {/* Content Box - Minimal radius */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Detailed Explanatory Column */}
          <div className="lg:col-span-6 space-y-6">
            {activeDoc === 'cod' ? (
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
                  DAY ONE &bull; AT DOORSTEP HANDOVER
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Certificate of Deposit (CoD)
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Issued immediately once your vehicle is handed over to our verified pickup crew.
                  This is the official government document required to unlock cash savings on your next new car.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Up to 25% State Motor Tax Discount</div>
                      <div className="text-xs text-slate-600">
                        Presents direct rebate on registration of a new personal vehicle (15% for commercial).
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Waiver of New Registration Fee</div>
                      <div className="text-xs text-slate-600">
                        RTO completely waives the mandatory registration charges for the newly purchased car.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Legally Tradeable Instrument</div>
                      <div className="text-xs text-slate-600">
                        Not planning to buy a new car right now? You can legally sell your CoD voucher to any other buyer on the VAHAN portal!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
                  DAY 15-30 &bull; AT FINAL SHREDDING
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Certificate of Vehicle Scrapping (CVS)
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Issued following comprehensive depollution and physical chassis destruction at the
                  registered facility. This permanently erases the vehicle in RTO records under Section 55 of the Motor Vehicles Act.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Permanent VAHAN De-Registration</div>
                      <div className="text-xs text-slate-600">
                        The vehicle registration status is marked as officially SCRAPPED in government records.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">End of All Recurring Tax &amp; Fitness Liabilities</div>
                      <div className="text-xs text-slate-600">
                        Guarantees no future fines, road tax notices, green cess, or summons will ever be sent to you.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Proof of Physical Chassis Cut</div>
                      <div className="text-xs text-slate-600">
                        Backed by CCTV footage and high-resolution photo archives of the sliced vehicle chassis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Document Preview Mockup - Minimal radius */}
          <div className="lg:col-span-6 bg-white border border-slate-300 rounded-md p-5 sm:p-6 shadow-sm font-mono text-xs">
            <div className="border border-slate-300 rounded p-4 bg-slate-50 relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span className="text-slate-900 font-bold tracking-wider">
                    {activeDoc === 'cod' ? 'FORM 2 - CERTIFICATE OF DEPOSIT' : 'FORM 4 - CERTIFICATE OF VEHICLE SCRAPPING'}
                  </span>
                </div>
                <span className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                  VAHAN 4.0 VERIFIED
                </span>
              </div>

              {/* Certificate Mockup Body */}
              <div className="mt-4 space-y-3 text-slate-700">
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>FACILITY REG NO: <strong className="text-slate-900">RVSF-DL-2022-004</strong></span>
                  <span>DATE: <strong className="text-slate-900">12-NOV-2026</strong></span>
                </div>

                <div className="p-3 bg-white rounded border border-slate-200 space-y-1.5 shadow-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Vehicle Reg No:</span>
                    <span className="font-bold text-slate-900">DL 01 AB 4471</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Chassis No:</span>
                    <span className="font-bold text-slate-700">MA3EJB41S00******</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Engine No:</span>
                    <span className="font-bold text-slate-700">K12MN764****</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Class &amp; Make:</span>
                    <span className="font-bold text-slate-700">LMV Passenger (Maruti Swift Dzire)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Registered Owner:</span>
                    <span className="font-bold text-slate-900">SANJEEV SHARMA</span>
                  </div>
                </div>

                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900 leading-relaxed font-sans font-medium">
                  {activeDoc === 'cod'
                    ? 'Official declaration: The vehicle described above has been legally accepted at Mervoxa RVSF Yard 01. The registered owner is indemnified from this timestamp onwards under Section 55 Rules.'
                    : 'Official declaration: The vehicle described above has been permanently dismantled, fluids purged, and chassis cut. Registration is revoked permanently in national transport register.'}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-10 h-10 text-emerald-700" />
                    <div className="text-[9px] text-slate-500 leading-tight">
                      <div>Scan to verify on</div>
                      <div className="text-emerald-700 font-bold">parivahan.gov.in</div>
                    </div>
                  </div>
                  <div className="text-right text-[10px] text-slate-600">
                    <div className="text-slate-900 font-bold">Authorized Signatory</div>
                    <div>Mervoxa Ventures Pvt Ltd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
