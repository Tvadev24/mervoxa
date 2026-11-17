'use client';


import React, { useState, useId } from 'react';
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  Percent,
  CheckCircle,
  Info,
} from 'lucide-react';

interface ScrapCalculatorProps {
  initialRegNo?: string;
  onProceed?: (quoteData: any) => void;
}

export default function ScrapCalculator({
  initialRegNo = '',
  onProceed,
}: ScrapCalculatorProps) {
  const [vehicleType, setVehicleType] = useState<'hatchback' | 'sedan' | 'suv' | 'twoWheeler' | 'commercialLight' | 'commercialHeavy'>('hatchback');
  const [fuelType, setFuelType] = useState<'petrol' | 'diesel' | 'cng' | 'ev'>('diesel');
  const [year, setYear] = useState<number>(2010);
  const [condition, setCondition] = useState<'running' | 'nonRunning' | 'accidental'>('running');
  const [newVehicleBudget, setNewVehicleBudget] = useState<number>(1000000);
  const [stateRto, setStateRto] = useState<string>('delhi_ncr');

  const budgetInputId = useId();

  const calculateScrapValues = () => {
    const baseWeights: Record<string, number> = {
      twoWheeler: 4500,
      hatchback: 32000,
      sedan: 42000,
      suv: 62000,
      commercialLight: 58000,
      commercialHeavy: 145000,
    };

    let scrapPrice = baseWeights[vehicleType] || 32000;

    if (fuelType === 'diesel') scrapPrice *= 1.08;
    if (fuelType === 'cng') scrapPrice *= 0.96;
    if (fuelType === 'ev') scrapPrice *= 1.15;

    if (condition === 'nonRunning') scrapPrice *= 0.88;
    if (condition === 'accidental') scrapPrice *= 0.75;

    const currentYear = 2026;
    const age = currentYear - year;
    if (age >= 15) scrapPrice *= 1.05;

    const finalScrapPayout = Math.round(scrapPrice / 500) * 500;

    const stateTaxRate = stateRto === 'delhi_ncr' ? 0.08 : stateRto === 'up' ? 0.09 : 0.10;
    const estimatedStateTax = newVehicleBudget * stateTaxRate;
    const roadTaxRebate = vehicleType === 'commercialHeavy'
      ? Math.round(estimatedStateTax * 0.15)
      : Math.round(estimatedStateTax * 0.25);

    const regFeeWaiver = vehicleType === 'twoWheeler' ? 600 : vehicleType === 'commercialHeavy' ? 3500 : 1500;

    const totalSavings = finalScrapPayout + roadTaxRebate + regFeeWaiver;

    return {
      finalScrapPayout,
      roadTaxRebate,
      regFeeWaiver,
      totalSavings,
      age,
    };
  };

  const { finalScrapPayout, roadTaxRebate, regFeeWaiver, totalSavings, age } = calculateScrapValues();

  const handleBookQuote = () => {
    if (onProceed) {
      onProceed({
        vehicleType,
        fuelType,
        year,
        condition,
        stateRto,
        finalScrapPayout,
        roadTaxRebate,
        totalSavings,
      });
    } else {
      const contactSection = document.getElementById('quote-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/contact-us';
      }
    }
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Instant Valuation Engine
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Calculate your vehicle scrap value &amp; tax rebate.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Get an instant estimate combining real steel market scrap payouts plus the official 25%
            state road tax concession under the National Vehicle Scrappage Policy.
          </p>
        </div>

        {/* Interactive Calculator Grid - Minimal radius */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-5 sm:p-7 rounded-md shadow-sm">
            <h3 className="font-heading font-bold text-base text-slate-900 mb-5">
              Vehicle Specifications
            </h3>

            {/* 1. Vehicle Segment Selector */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Vehicle Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'hatchback', label: 'Hatchback', sub: 'i10, Swift, WagonR' },
                  { id: 'sedan', label: 'Sedan', sub: 'City, Verna, Dzire' },
                  { id: 'suv', label: 'SUV / MPV', sub: 'Innova, Creta, XUV' },
                  { id: 'twoWheeler', label: 'Two-Wheeler', sub: 'Bike / Scooter' },
                  { id: 'commercialLight', label: 'Light Comm.', sub: 'Bolero, Tata Ace' },
                  { id: 'commercialHeavy', label: 'Truck / Bus', sub: 'Heavy Commercial' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVehicleType(item.id as any)}
                    className={`p-2.5 rounded text-left transition-colors cursor-pointer border ${
                      vehicleType === item.id
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm">{item.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Fuel & Condition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {/* Fuel Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Engine &amp; Fuel Type
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'diesel', label: 'Diesel (10yr NGT)' },
                    { id: 'petrol', label: 'Petrol (15yr NGT)' },
                    { id: 'cng', label: 'CNG' },
                    { id: 'ev', label: 'Electric / EV' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFuelType(f.id as any)}
                      className={`px-2.5 py-1.5 rounded text-xs font-medium border text-center transition-colors cursor-pointer ${
                        fuelType === f.id
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle Condition */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Vehicle Condition
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {[
                    { id: 'running', label: 'Running & Intact Parts' },
                    { id: 'nonRunning', label: 'Non-Running / Stalled' },
                    { id: 'accidental', label: 'Accidental / Total Loss' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCondition(c.id as any)}
                      className={`px-2.5 py-1 rounded text-xs font-medium border text-left transition-colors cursor-pointer ${
                        condition === c.id
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Year & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Manufacturing Year
                  </label>
                  <span className="text-xs font-bold text-emerald-700">
                    {year} ({age} years old)
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="2016"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  className="w-full accent-emerald-600 bg-slate-200 h-2 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>2000 (26 yrs)</span>
                  <span>2008</span>
                  <span>2016 (10 yrs)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Registration State / RTO
                </label>
                <select
                  value={stateRto}
                  onChange={(e) => setStateRto(e.target.value)}
                  className="w-full bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm rounded px-3 py-1.5 focus:outline-none focus:border-emerald-600"
                >
                  <option value="delhi_ncr">Delhi NCR (Strict NGT 10/15 Mandate)</option>
                  <option value="up">Uttar Pradesh (MoRTH RVSF Zone)</option>
                  <option value="haryana">Haryana (Faridabad / Gurgaon)</option>
                  <option value="rajasthan">Rajasthan (Jaipur / Alwar)</option>
                  <option value="karnataka">Karnataka (Bengaluru)</option>
                  <option value="maharashtra">Maharashtra (Mumbai / Pune)</option>
                  <option value="other">Other State / Pan-India</option>
                </select>
              </div>
            </div>

            {/* Planned New Car Purchase Budget */}
            <div className="pt-3.5 border-t border-slate-200">
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor={budgetInputId} className="text-xs font-semibold text-slate-700">
                  Planning to buy a new car? (For 25% Road Tax Savings)
                </label>
                <span className="text-xs font-bold text-emerald-700">
                  ₹{(newVehicleBudget / 100000).toFixed(1)} Lakhs Ex-Showroom
                </span>
              </div>
              <input
                id={budgetInputId}
                type="range"
                min="500000"
                max="4000000"
                step="50000"
                value={newVehicleBudget}
                onChange={(e) => setNewVehicleBudget(parseInt(e.target.value))}
                className="w-full accent-emerald-600 bg-slate-200 h-2 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Results Summary Card (Right) - Minimal radius */}
          <div className="lg:col-span-5 bg-slate-900 text-white border border-slate-800 p-5 sm:p-7 rounded-md flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Estimated Financial Value
                </span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  MoRTH CoD Eligible
                </span>
              </div>

              {/* Total Benefit Callout */}
              <div className="my-5">
                <div className="text-xs text-slate-400 mb-1">Total Combined Economic Return</div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">
                  ₹{totalSavings.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Direct Bank Scrap Payment + State Road Tax Discount + Fee Waiver
                </p>
              </div>

              {/* Breakdown Items */}
              <div className="space-y-2.5 pt-3.5 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Direct Scrap Bank Transfer:
                  </span>
                  <span className="font-bold text-white">
                    ₹{finalScrapPayout.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Percent className="w-3.5 h-3.5 text-emerald-400" />
                    Up to 25% Road Tax Rebate (CoD):
                  </span>
                  <span className="font-bold text-emerald-400">
                    ₹{roadTaxRebate.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    RTO Registration Fee Waiver:
                  </span>
                  <span className="font-bold text-emerald-400">
                    ₹{regFeeWaiver.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Important Legal Notice */}
              <div className="mt-5 p-3 rounded bg-slate-800/80 border border-slate-700 flex items-start gap-2">
                <Info className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  The <strong className="text-white">Certificate of Deposit (CoD)</strong> is also tradeable.
                  If you are not buying a new car yourself, you can legally transfer or sell your CoD voucher on the Parivahan portal!
                </p>
              </div>
            </div>

            {/* Action Button - STRICTLY NO DROP SHADOW */}
            <div className="mt-6 pt-3.5 border-t border-slate-800">
              <button
                type="button"
                onClick={handleBookQuote}
                className="w-full py-3 px-5 rounded text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock This Valuation &amp; Book Free Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-2 text-center text-[11px] text-slate-400">
                100% Free Towing &bull; IMPS Payout Before Flatbed Leaves
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
