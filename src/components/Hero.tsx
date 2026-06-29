import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Award, ArrowRight, Calculator, FileText } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenCalculator: () => void;
}

export default function Hero({ onScrollToSection, onOpenCalculator }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 bg-[#0B2447] flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradients and Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#19A7CE]/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#57C5B6]/10 rounded-full blur-[80px] sm:blur-[120px]" />
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Badges of Trust */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-[#19A7CE]/15 text-[#19A7CE] border border-[#19A7CE]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Asesoramiento Técnico</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-[#57C5B6]/15 text-[#57C5B6] border border-[#57C5B6]/30">
                <Award className="w-3.5 h-3.5" />
                <span>Equipos Certificados Tier 1</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Energía solar para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19A7CE] to-[#57C5B6] font-extrabold">
                ahorrar, producir y crecer
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Venta de paneles solares, inversores, baterías e insumos con asesoramiento técnico especializado para hogares, comercios e industrias. Soporte post-venta asegurado para que tu transición energética sea transparente.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onScrollToSection('contacto')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 text-sm font-bold rounded-full bg-[#F27D26] text-white hover:bg-orange-600 shadow-xl shadow-orange-500/10 hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
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
              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 text-sm font-bold rounded-full border-2 border-dashed border-[#57C5B6]/40 bg-[#57C5B6]/5 text-[#57C5B6] hover:bg-[#57C5B6]/15 hover:border-[#57C5B6]/60 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#57C5B6]" />
                <span>Simular Presupuesto</span>
              </button>
            </div>

            {/* Basic metrics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-white">90%</p>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Ahorro Máximo</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-white">+500</p>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Instalaciones</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#19A7CE]">25 Años</p>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Garantía Potencia</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Solar Visualization Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#19A7CE]/20 to-[#57C5B6]/20 rounded-3xl blur-2xl z-0" />
              
              {/* Beautiful Solar Panel Panel Frame */}
              <div className="relative z-10 p-2.5 rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group">
                <div className="relative aspect-video sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000"
                    alt="Paneles solares instalados en techo moderno"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Tech Badge (Real-time Simulation Mock) */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B2447]/95 backdrop-blur-md border border-[#19A7CE]/20 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#57C5B6] animate-pulse" />
                      <div>
                        <p className="text-xs font-bold text-white">Rendimiento Solar Actual</p>
                        <p className="text-[10px] text-slate-300 font-mono">Generación: 4.8 kW / Eficiencia 98%</p>
                      </div>
                    </div>
                    <div className="bg-[#19A7CE]/20 text-[#19A7CE] px-2 py-1 rounded text-[10px] font-mono font-bold border border-[#19A7CE]/30">
                      ON-GRID LIVE
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating components */}
              <div className="absolute -top-4 -right-4 bg-[#0B2447] border border-white/10 p-3 rounded-xl shadow-lg hidden sm:flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F27D26]/20 flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-[#F27D26]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-300 leading-none">Amortización</p>
                  <p className="text-xs font-bold text-white mt-1">3 a 5 Años Promedio</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#0B2447] border border-white/10 p-3 rounded-xl shadow-lg hidden sm:flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#19A7CE]/20 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[#19A7CE]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-300 leading-none">Apto Ley Distribuida</p>
                  <p className="text-xs font-bold text-white mt-1">Medidor Bidireccional</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
