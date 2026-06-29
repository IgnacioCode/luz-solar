import React from 'react';
import { Sun, Zap, Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenCalculator: () => void;
}

export default function Footer({ onScrollToSection, onOpenCalculator }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2447] border-t border-slate-900 py-16 text-slate-300 relative overflow-hidden">
      {/* Visual background separation */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#19A7CE]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => onScrollToSection('hero')}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#19A7CE] to-[#57C5B6] shadow-lg">
                <Sun className="w-6 h-6 text-white" />
                <Zap className="w-3.5 h-3.5 text-[#0B2447] absolute font-bold" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">HELIOS</span>
                <span className="text-[10px] tracking-widest text-[#57C5B6] font-mono font-semibold uppercase leading-tight">Energía Solar</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-sm">
              Sistemas de generación fotovoltaica diseñados bajo estrictos estándares de ingeniería para asegurar durabilidad y retornos de inversión sólidos.
            </p>

            {/* Social media icons */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-lg bg-[#0B2447]/50 border border-slate-800 text-slate-300 hover:text-[#19A7CE] hover:border-slate-750 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Navegación Rápida
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Beneficios principales', id: 'beneficios' },
                { label: 'Catálogo de Productos', id: 'productos' },
                { label: 'Soluciones por sector', id: 'soluciones' },
                { label: 'Línea de Proceso', id: 'proceso' },
                { label: 'Soporte Post Venta', id: 'post-venta' },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#57C5B6] mr-1.5" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sizing Link Column (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Herramientas
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#F27D26] mr-1.5" />
                  <span className="font-bold text-[#F27D26]">Calculadora Solar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('preguntas')}
                  className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#57C5B6] mr-1.5" />
                  <span>Preguntas frecuentes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contacto')}
                  className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#57C5B6] mr-1.5" />
                  <span>Pedir presupuesto</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Coverage & Technical Info Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Zona de Cobertura
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4.5 h-4.5 text-[#57C5B6] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  <span className="text-white font-bold block">Despachos Logísticos:</span>
                  Toda la República Argentina (Envío de kits y accesorios con seguro técnico total).
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4.5 h-4.5 text-[#19A7CE] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  <span className="text-white font-bold block">Obras de Instalación:</span>
                  Zona Metropolitana, Provincia de Buenos Aires, Córdoba, Santa Fe y Cuyo.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono">
          <p>© {year} HELIOS Energía Solar S.A. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
