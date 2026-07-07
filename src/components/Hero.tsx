'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenCalculator: () => void;
}

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
    alt: 'Paneles solares instalados sobre una cubierta moderna',
  },
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200',
    alt: 'Campo de paneles solares bajo cielo despejado',
  },
  {
    src: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=1200',
    alt: 'Instalacion fotovoltaica con paneles alineados',
  },
];

export default function Hero({ onScrollToSection, onOpenCalculator }: HeroProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const activeImage = heroImages[activeImageIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 bg-gradient-to-br from-[#003E6B] via-[#006CB5] to-[#004E86] flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradients and Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#F98A1E]/15 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#6DA42C]/10 rounded-full blur-[80px] sm:blur-[120px]" />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        {/* Abstract pattern lines from design */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="grid grid-cols-4 gap-2 h-full rotate-12 transform scale-150">
            <div className="bg-white/10 h-full"></div>
            <div className="bg-white/5 h-full"></div>
            <div className="bg-white/10 h-full"></div>
            <div className="bg-white/5 h-full"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[75%] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Energía solar para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F98A1E] to-[#6DA42C] font-extrabold">
                ahorrar y ganar independencia
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Venta de equipos solares, kits armados, dimensionamiento e instalación a medida para hogares, comercios, industrias, campos e instaladores. Te ayudamos a reducir costos, evitar dependencia de la red y elegir una solución consciente con el medio ambiente.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onScrollToSection('contacto')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 text-sm font-bold rounded-full bg-[#F98A1E] text-white hover:bg-[#E47412] shadow-xl shadow-[#F98A1E]/10 hover:shadow-[#F98A1E]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Pedir Cotización Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onScrollToSection('productos')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 text-sm font-bold rounded-full border-2 border-white/20 text-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Ver Productos</span>
              </button>
            </div>

            {/* Basic metrics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-white">90%</p>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Ahorro Potencial</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-white">Morón</p>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Base Comercial</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#F98A1E]">País</p>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Envíos y Kits</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Solar Visualization Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#006CB5]/20 to-[#6DA42C]/20 rounded-3xl blur-2xl z-0" />
              
              {/* Beautiful Solar Panel Panel Frame */}
              <div className="relative z-10 p-2.5 rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group">
                <div className="relative aspect-video sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="w-full h-full object-cover object-center animate-in fade-in duration-500 group-hover:scale-105 transition-transform ease-out brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-slate-950/35 px-3 py-1.5 backdrop-blur-md border border-white/10">
                    {heroImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          index === activeImageIndex
                            ? 'w-6 bg-[#F98A1E]'
                            : 'w-2 bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                      />
                    ))}
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
