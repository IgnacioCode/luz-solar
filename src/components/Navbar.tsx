import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
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
    { label: 'Servicios', id: 'alcance' },
    { label: 'Soluciones', id: 'soluciones' },
    { label: 'Guía solar', id: 'conceptos' },
    { label: 'Catálogo', id: 'catalogo' },
    { label: 'Cómo trabajamos', id: 'proceso' },
    { label: 'Preguntas', id: 'preguntas' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  const logoTextClass = isScrolled ? 'text-[#006CB5]' : 'text-white';
  const logoSubTextClass = isScrolled ? 'text-[#6DA42C]' : 'text-white/75';
  const menuTextClass = isScrolled
    ? 'text-slate-600 hover:text-[#006CB5] decoration-[#006CB5]'
    : 'text-white/90 hover:text-white decoration-[#F98A1E] drop-shadow-sm';
  const mobileButtonClass = isScrolled
    ? 'text-slate-600 hover:text-[#006CB5] hover:bg-slate-100'
    : 'text-white hover:text-white hover:bg-white/10';

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between gap-6 xl:gap-10">
          <BrandLogo id="navbar-logo" onClick={() => handleLinkClick('hero')} textClassName={logoTextClass} subTextClassName={logoSubTextClass} />

          {/* Desktop Menu */}
          <div id="desktop-menu" className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-6 xl:gap-9 2xl:gap-11">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`whitespace-nowrap text-[11px] xl:text-xs 2xl:text-sm font-semibold uppercase tracking-wider hover:underline underline-offset-4 decoration-2 transition-all cursor-pointer ${menuTextClass}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div id="desktop-ctas" className="hidden lg:flex shrink-0 items-center space-x-3">
            <button
              id="nav-contact-btn"
              onClick={() => handleLinkClick('contacto')}
              className="flex items-center space-x-1.5 px-5 py-2 text-sm font-bold rounded-full bg-[#F98A1E] hover:bg-[#E47412] text-white shadow-lg shadow-[#F98A1E]/20 transition-all cursor-pointer transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div id="mobile-menu-btn" className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${mobileButtonClass} p-2 rounded-lg transition-colors`}
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
                className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#006CB5] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200 px-3 space-y-2">
              <button
                onClick={() => handleLinkClick('contacto')}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-sm font-bold rounded-lg bg-[#F98A1E] text-white hover:bg-[#E47412] shadow-lg shadow-[#F98A1E]/20"
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
