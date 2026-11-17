'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import DualFeatureSection from '@/components/DualFeatureSection';
import HandoverVerificationSection from '@/components/HandoverVerificationSection';
import TraceabilityBar from '@/components/TraceabilityBar';
import CircularEconomySection from '@/components/CircularEconomySection';
import FaqSection from '@/components/FaqSection';
import QuoteFormSection from '@/components/QuoteFormSection';
import Footer from '@/components/Footer';
import InstantQuoteModal from '@/components/InstantQuoteModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReg, setSelectedReg] = useState('');

  const handleOpenQuoteModal = () => {
    setIsModalOpen(true);
  };

  const handleCheckVehicle = (regNo: string) => {
    setSelectedReg(regNo);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* 1. Header & Navigation matching Mockup */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 2. Hero Section matching Mockup */}
      <Hero
        onCheckVehicle={handleCheckVehicle}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 3. Our Services Section matching Mockup */}
      <ServicesSection />

      {/* 4. Dual Feature Section: Scrap Value Calculator + About Mervoxa matching Mockup */}
      <DualFeatureSection
        onCheckVehicle={handleCheckVehicle}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 5. Identity & Handover Verification Card matching Mockup */}
      <HandoverVerificationSection />

      {/* 6. Traceability Checkpoints Full-Width Bar matching Mockup */}
      <TraceabilityBar />

      {/* 7. Sustainable Circular Economy Impact */}
      <CircularEconomySection />

      {/* 8. Doorstep Pickup & Quotation Booking Form */}
      <QuoteFormSection />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Footer matching Mockup */}
      <Footer />

      {/* Instant Valuation & Pickup Modal */}
      <InstantQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialRegNo={selectedReg}
      />
    </main>
  );
}
