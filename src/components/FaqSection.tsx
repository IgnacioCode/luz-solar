import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqsData } from '../data';

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };

  return (
    <section id="preguntas" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#006CB5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5]">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            Compilamos las respuestas a las consultas técnicas y comerciales más habituales que recibimos de familias y gerentes de proyectos.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openFaqId === faq.id;
            
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 shadow-sm hover:border-[#006CB5]/30"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-3.5">
                    <HelpCircle className="w-5 h-5 text-[#006CB5] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-bold text-[#006CB5] pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Container */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-8">
                      {faq.answer}
                    </p>
                    <div className="mt-4 pl-8 flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded">
                        Categoría: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
