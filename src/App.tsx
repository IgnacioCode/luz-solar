'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Process from './components/Process';
import PostSales from './components/PostSales';
import WhyChooseUs from './components/WhyChooseUs';
import SolarCalculator from './components/SolarCalculator';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [preFilledInquiry, setPreFilledInquiry] = useState<{
    clientType: 'hogar' | 'comercio' | 'industria' | 'campo';
    monthlyBill: number;
    message: string;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    handleScrollToSection('calculadora');
  };

  const handlePreFillInquiry = (data: {
    clientType: 'hogar' | 'comercio' | 'industria' | 'campo';
    monthlyBill: number;
    message: string;
  }) => {
    setPreFilledInquiry(data);
  };

  const handleFloatingWhatsApp = () => {
    const text = 'Hola Helios Solar! Estaba visitando su página web institucional y me gustaría realizar una consulta general sobre sus sistemas solares.';
    window.open(`https://wa.me/5491123456789?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div id="app-root" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden antialiased">
      {/* Sticky Navigation Header */}
      <Navbar
        onOpenCalculator={handleOpenCalculator}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Page Contents */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onScrollToSection={handleScrollToSection}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Core Benefits */}
        <Benefits />

        {/* Tabbed Sector Solutions */}
        <Solutions onScrollToSection={handleScrollToSection} />

        {/* Sizing & Savings Calculator */}
        <SolarCalculator onPreFillInquiry={handlePreFillInquiry} />

        {/* Commercial Catalog */}
        <Products />

        {/* Visual Methodology Timeline */}
        <Process />

        {/* Security and Post-Sales Guarantees */}
        <PostSales />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Lead Capture and Direct Contact Forms */}
        <ContactForm preFilledData={preFilledInquiry} />
      </main>

      {/* Institutional Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Floating Action Buttons */}
      <div id="floating-actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
        {/* Back to Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
            aria-label="Ir arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct WhatsApp Float */}
        <button
          onClick={handleFloatingWhatsApp}
          className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer relative group"
          aria-label="Hablar por WhatsApp de guardia"
        >
          <MessageSquare className="w-6 h-6" />
          {/* Tooltip on hover */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ASESOR ONLINE 24/7
          </span>
        </button>
      </div>
    </div>
  );
}
