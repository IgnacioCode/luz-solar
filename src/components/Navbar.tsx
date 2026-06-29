import React, { useState, useEffect } from 'react';
import { Sun, Zap, Menu, X, Phone, Calculator } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenCalculator, onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Productos', id: 'productos' },
    { label: 'Soluciones', id: 'soluciones' },
    { label: 'Cómo Trabajamos', id: 'proceso' },
    { label: 'Soporte Post Venta', id: 'post-venta' },
    { label: 'Preguntas', id: 'preguntas' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="navbar-logo"
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => handleLinkClick('hero')}
          >
            <div className="w-8 h-8 bg-[#0B2447] rounded-lg flex items-center justify-center shadow-md">
              <div className="w-3.5 h-3.5 bg-[#F27D26] rotate-45 transform group-hover:rotate-90 transition-transform duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0B2447] leading-none">
                HELIOS<span className="text-[#19A7CE]">SOLAR</span>
              </span>
              <span className="text-[9px] tracking-widest text-slate-500 font-mono font-bold uppercase leading-tight">
                Energía Sustentable
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div id="desktop-menu" className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-[#0B2447] hover:underline decoration-[#19A7CE] underline-offset-4 decoration-2 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div id="desktop-ctas" className="hidden lg:flex items-center space-x-3">
            <button
              id="nav-calc-btn"
              onClick={onOpenCalculator}
              className="flex items-center space-x-1.5 px-5 py-2 text-sm font-bold border-2 border-[#19A7CE] text-[#19A7CE] hover:bg-[#19A7CE]/5 rounded-full transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#19A7CE]" />
              <span>Presupuesto</span>
            </button>
            <button
              id="nav-contact-btn"
              onClick={() => handleLinkClick('contacto')}
              className="flex items-center space-x-1.5 px-5 py-2 text-sm font-bold rounded-full bg-[#F27D26] hover:bg-orange-600 text-white shadow-lg shadow-orange-200 transition-all cursor-pointer transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div id="mobile-menu-btn" className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#0B2447] p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Alternar menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white/95 border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#0B2447] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200 px-3 space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCalculator();
                }}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-sm font-semibold rounded-lg border-2 border-[#19A7CE] text-[#19A7CE] hover:bg-[#19A7CE]/5"
              >
                <Calculator className="w-5 h-5 text-[#19A7CE]" />
                <span>Calcular Ahorro Fotovoltaico</span>
              </button>
              <button
                onClick={() => handleLinkClick('contacto')}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-sm font-bold rounded-lg bg-[#F27D26] text-white hover:bg-orange-600 shadow-lg shadow-orange-200"
              >
                <Phone className="w-5 h-5" />
                <span>Solicitar Asesoramiento</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
