import React from 'react';
import { MapPin, ChevronRight, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#003E6B] border-t border-slate-900 py-16 text-slate-300 relative overflow-hidden">
      {/* Visual background separation */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#006CB5]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => onScrollToSection('hero')}>
              <div className="flex h-12 w-16 items-center justify-center rounded-xl bg-white p-1.5 shadow-lg">
                <img
                  src="/logoLuzSolarSolo.png"
                  alt="Logo Luz Solar"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">LUZ SOLAR</span>
                <span className="text-[10px] tracking-widest text-[#6DA42C] font-mono font-semibold uppercase leading-tight">SRL</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-sm">
              Equipos, kits y sistemas de generación fotovoltaica para ahorrar energía, ganar independencia y avanzar hacia consumos más sustentables.
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
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#F98A1E] hover:border-[#F98A1E]/40 transition-all"
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
                { label: 'Servicios y alcance', id: 'alcance' },
                { label: 'Soluciones por sector', id: 'soluciones' },
                { label: 'Catálogo de productos', id: 'productos' },
                { label: 'Cómo trabajamos', id: 'proceso' },
                { label: 'Preguntas frecuentes', id: 'preguntas' },
                { label: 'Contacto', id: 'contacto' },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#6DA42C] mr-1.5" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Link Column (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('preguntas')}
                  className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#6DA42C] mr-1.5" />
                  <span>Preguntas frecuentes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contacto')}
                  className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#6DA42C] mr-1.5" />
                  <span>Pedir presupuesto</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contacto')}
                  className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#F98A1E] mr-1.5" />
                  <span className="font-bold text-[#F98A1E]">WhatsApp</span>
                </button>
              </li>
              <li>
                <span className="flex items-center text-slate-300">
                  <MessageSquare className="w-3.5 h-3.5 text-[#F98A1E] mr-1.5" />
                  <span>{siteConfig.whatsapp.display}</span>
                </span>
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
                <MapPin className="w-4.5 h-4.5 text-[#6DA42C] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  <span className="text-white font-bold block">Base comercial:</span>
                  {siteConfig.location.base}. Consultas, entregas y puntos de retiro a coordinar.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4.5 h-4.5 text-[#006CB5] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  <span className="text-white font-bold block">Cobertura:</span>
                  {siteConfig.location.coverage}. Instalaciones y puesta en marcha según relevamiento.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono">
          <p>Diseñado y desarrollado por IgnacioCode | © {year} LUZ SOLAR SRL. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
