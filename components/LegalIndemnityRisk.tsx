
import React from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  XCircle,
  CheckCircle2,
  Lock,
  Scale,
} from 'lucide-react';

export default function LegalIndemnityRisk() {
  const comparisons = [
    {
      feature: 'Legal Vehicle Handover Document',
      unauthorised: 'Rough paper slip or informal receipt with zero legal standing',
      mervoxa: 'Statutory Form 2B legal agreement and VAHAN Certificate of Deposit (CoD)',
    },
    {
      feature: 'Criminal & Police Liability',
      unauthorised: 'You remain the registered owner. Liable for any crimes or hit-and-run using your engine/chassis',
      mervoxa: 'Complete legal indemnity from the second the pickup receipt is signed',
    },
    {
      feature: 'VAHAN & RTO Records Closure',
      unauthorised: 'Vehicle remains active on Parivahan portal. Continuous road tax notices and automated e-challans',
      mervoxa: 'Permanent digital de-registration on MoRTH VAHAN 4.0 under Section 55',
    },
    {
      feature: 'Payment Security',
      unauthorised: 'Cash haggling at doorstep, counterfeit notes risk, bounced cheques',
      mervoxa: '100% upfront IMPS/NEFT bank transfer directly to the RC holder’s account',
    },
    {
      feature: 'Environmental Depollution',
      unauthorised: 'Hazardous engine oil, coolant, and battery acid dumped directly into local sewers',
      mervoxa: 'Scientific vacuum extraction, certified lead/lithium recycling, zero-landfill',
    },
    {
      feature: 'New Car 25% Road Tax Discount',
      unauthorised: 'Zero tax benefits. No official CoD issued',
      mervoxa: 'Official CoD unlocks up to 25% road tax discount & registration fee waiver',
    },
  ];

  return (
    <section id="legal" className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 text-xs font-semibold text-amber-900 tracking-wide uppercase mb-3">
            <Scale className="w-3.5 h-3.5" />
            Legal Responsibility &amp; Consumer Protection
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            The hidden legal dangers of unauthorised scrap dealers.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            In India, selling an old car to an informal kabadiwala does not cancel your RC. If that chassis or engine
            is used in illegal activities, the law holds the registered owner accountable.
          </p>
        </div>

        {/* Comparison Grid Table - Minimal radius */}
        <div className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-100/80 border-b border-slate-200 p-4 sm:p-5 text-sm font-bold">
            <div className="md:col-span-4 text-slate-700 uppercase tracking-wider text-xs">
              Key Compliance Parameter
            </div>
            <div className="hidden md:block md:col-span-4 text-red-700 text-xs uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Unauthorised Local Scrapyard (Kabadiwala)
              </span>
            </div>
            <div className="hidden md:block md:col-span-4 text-emerald-800 text-xs uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                MERVOXA Authorised RVSF Network
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-200">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm gap-4 items-center hover:bg-slate-50 transition-colors"
              >
                <div className="md:col-span-4 font-bold text-slate-900">
                  {item.feature}
                </div>

                {/* Mobile / Desktop Unauthorised */}
                <div className="md:col-span-4 text-slate-700 flex items-start gap-2 bg-red-50/50 md:bg-transparent p-2.5 md:p-0 rounded border border-red-200 md:border-none">
                  <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="md:hidden font-bold text-red-700 block mb-0.5">
                      Unauthorised Yard:
                    </span>
                    <span>{item.unauthorised}</span>
                  </div>
                </div>

                {/* Mobile / Desktop Mervoxa */}
                <div className="md:col-span-4 text-slate-900 flex items-start gap-2 bg-emerald-50/60 md:bg-transparent p-2.5 md:p-0 rounded border border-emerald-200 md:border-none font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="md:hidden font-bold text-emerald-800 block mb-0.5">
                      Mervoxa RVSF:
                    </span>
                    <span className="text-emerald-950">{item.mervoxa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Advisory Callout - Minimal radius */}
        <div className="mt-6 bg-white border border-slate-200 p-5 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Supreme Court &amp; MoRTH Directive:</strong> Vehicle owners
              whose end-of-life cars are impounded by transport enforcement in Delhi-NCR can directly authorize
              Mervoxa RVSF to release and scrap the vehicle with zero impound penalty.
            </p>
          </div>
          <a
            href="tel:+919873528080"
            className="flex-shrink-0 px-4 py-2 rounded text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors"
          >
            Speak to Legal Desk
          </a>
        </div>
      </div>
    </section>
  );
}
