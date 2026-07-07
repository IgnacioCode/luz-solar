import React, { useState, useMemo } from 'react';
import { Calculator, HelpCircle, ArrowRight, MessageSquare, Check, Sparkles, Zap, Leaf } from 'lucide-react';
import { buildWhatsAppUrl } from '../siteConfig';

interface SolarCalculatorProps {
  onPreFillInquiry: (data: {
    clientType: 'hogar' | 'comercio' | 'industria' | 'campo';
    monthlyBill: number;
    message: string;
  }) => void;
}

type ClientType = 'hogar' | 'comercio' | 'industria' | 'campo';

export default function SolarCalculator({ onPreFillInquiry }: SolarCalculatorProps) {
  const [clientType, setClientType] = useState<ClientType>('hogar');
  const [monthlyBill, setMonthlyBill] = useState<number>(50000); // Default $50,000 ARS
  const [roofType, setRoofType] = useState<string>('chapa');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Dynamic calculations based on research values
  const results = useMemo(() => {
    // Basic multiplication factors
    let costPerKwh = 120; // Avg energy cost estimation in ARS per kWh
    let monthlyKwh = Math.round(monthlyBill / costPerKwh);
    
    // Solar coverage factor (systems usually size to offset 70-90% of energy)
    let solarCoverage = 0.8; 
    let yearlyKwhOffset = Math.round(monthlyKwh * 12 * solarCoverage);

    // Dynamic sizing calculation
    // A 1 kWp system generates roughly 1400 kWh of energy per year in average sunny regions of LatAm
    let systemPowerKwp = Math.round((yearlyKwhOffset / 1400) * 10) / 10;
    
    // Ensure logical bounds
    if (systemPowerKwp < 1.5) systemPowerKwp = 1.5;
    if (clientType === 'comercio' && systemPowerKwp < 5) systemPowerKwp = 5;
    if (clientType === 'industria' && systemPowerKwp < 15) systemPowerKwp = 15;
    if (clientType === 'campo' && systemPowerKwp < 3) systemPowerKwp = 3;

    // Panels count (assuming 450W = 0.45kW panels)
    let panelsCount = Math.ceil((systemPowerKwp * 1000) / 450);

    // Financial Savings
    let monthlySavings = Math.round(monthlyBill * solarCoverage);
    let yearlySavings = monthlySavings * 12;
    
    // Return investment index (avg amortization period in years)
    let amortizationYears = clientType === 'comercio' ? 3.5 : clientType === 'industria' ? 4 : 5;

    // CO2 Footprint index (0.4 kg CO2 per kWh offset)
    let co2SavedKg = Math.round(yearlyKwhOffset * 0.4);
    // 1 tree absorbs ~20kg of CO2 per year
    let equivalentTrees = Math.round(co2SavedKg / 20);

    return {
      monthlyKwh,
      yearlyKwhOffset,
      systemPowerKwp,
      panelsCount,
      monthlySavings,
      yearlySavings,
      amortizationYears,
      co2SavedKg,
      equivalentTrees,
    };
  }, [clientType, monthlyBill]);

  const handleConsultWhatsApp = () => {
    const text = `Hola Luz Solar! Utilicé su Calculadora de Ahorro Web y obtuve estos resultados estimativos para mi *${clientType.toUpperCase()}*:\n\n` +
      `- *Factura Eléctrica Mensual:* $${monthlyBill.toLocaleString('es-AR')} ARS\n` +
      `- *Potencia Recomendada:* ${results.systemPowerKwp} kWp\n` +
      `- *Cantidad de Paneles:* ${results.panelsCount} unidades de 450W\n` +
      `- *Ahorro Anual Estimado:* $${results.yearlySavings.toLocaleString('es-AR')} ARS\n` +
      `- *Orientación del Techo:* ${roofType.toUpperCase()}\n\n` +
      `¿Me podrían contactar para coordinar un presupuesto técnico formal? ¡Gracias!`;
    
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  const handlePreFillForm = () => {
    const message = `Estimados, realicé el cálculo solar web para mi ${clientType}. Tengo un gasto mensual de $${monthlyBill.toLocaleString('es-AR')} con techo tipo ${roofType}. Me interesa conocer opciones de financiamiento y plazos de entrega para un sistema de aproximadamente ${results.systemPowerKwp} kWp (${results.panelsCount} paneles).`;
    
    onPreFillInquiry({
      clientType,
      monthlyBill,
      message
    });
    
    // Scroll to contact form smoothly
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculadora" className="py-24 bg-white relative overflow-hidden border-t border-b border-slate-100">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#006CB5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-[#6DA42C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#006CB5] font-mono uppercase bg-[#006CB5]/10 px-3.5 py-1.5 rounded-full border border-[#006CB5]/25">
            Cotizador Interactivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5]">
            Simulá tu sistema fotovoltaico en tiempo real
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Ingresá tu gasto de luz promedio y seleccioná el tipo de propiedad para proyectar la potencia necesaria de paneles, ahorro financiero e impacto ecológico.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#006CB5] flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#006CB5]" />
                <span>Configuración de Consumo</span>
              </h3>

              {/* Step 1: Client Type */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  1. Tipo de Propiedad / Conexión
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(['hogar', 'comercio', 'industria', 'campo'] as ClientType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setClientType(type)}
                      className={`py-3 px-4 rounded-xl text-xs font-bold capitalize border transition-all cursor-pointer text-center ${
                        clientType === type
                          ? 'bg-[#006CB5] text-white border-[#006CB5] shadow-md shadow-blue-700/10'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Slider for Electric Bill */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  <span>2. Factura de Luz Mensual</span>
                  <span className="text-[#006CB5] text-sm font-sans font-extrabold">
                    ${monthlyBill.toLocaleString('es-AR')} ARS
                  </span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max={clientType === 'industria' ? '1200000' : '500000'}
                  step="5000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006CB5] focus:outline-none"
                />
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono font-bold">
                  <span>$15K ARS</span>
                  <span>
                    {clientType === 'industria' ? '$1.2M ARS' : '$500K ARS'}
                  </span>
                </div>
              </div>

              {/* Step 3: Roof type selection */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  3. Tipo de Superficie / Techo
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 'chapa', lbl: 'Chapa Metálica' },
                    { val: 'teja', lbl: 'Tejas' },
                    { val: 'suelo', lbl: 'Suelo / Campo' },
                  ].map((roof) => (
                    <button
                      key={roof.val}
                      onClick={() => setRoofType(roof.val)}
                      className={`py-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        roofType === roof.val
                          ? 'bg-white border-[#006CB5] text-[#006CB5] shadow-sm'
                          : 'bg-white/60 border-slate-200 text-slate-500 hover:border-slate-350 hover:text-slate-800'
                      }`}
                    >
                      {roof.lbl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Info warning */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-2.5 text-[11px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F98A1E] shrink-0 mt-1.5" />
              <p>Los cálculos son estimaciones teóricas referenciales basadas en la radiación media ponderada de la región central del país. No sustituyen la visita e ingeniería formal.</p>
            </div>
          </div>

          {/* Results Column (Right) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#006CB5] to-[#004E86] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Ambient gold glow decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <h3 className="text-sm font-mono font-bold tracking-wider text-slate-300 uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#6DA42C] animate-pulse" />
                <span>Estimación del Sistema LUZ SOLAR</span>
              </h3>

              {/* Big Sizing Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center space-x-1.5 text-[#006CB5] mb-1">
                    <Zap className="w-4.5 h-4.5 text-[#006CB5]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Potencia</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{results.systemPowerKwp} <span className="text-xs font-normal text-slate-400 font-mono">kWp</span></p>
                  <p className="text-[10px] text-slate-300 font-mono mt-0.5">Capacidad del Inversor</p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center space-x-1.5 text-[#6DA42C] mb-1">
                    <Calculator className="w-4.5 h-4.5 text-[#6DA42C]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Módulos</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{results.panelsCount} <span className="text-xs font-normal text-slate-400">Unidades</span></p>
                  <p className="text-[10px] text-slate-300 font-mono mt-0.5">Paneles de 450W c/u</p>
                </div>
              </div>

              {/* Economic Projections */}
              <div className="p-5 rounded-2xl bg-[#6DA42C]/10 border border-[#6DA42C]/25 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">Ahorro Mensual Estimado:</span>
                  <span className="text-sm font-extrabold text-[#6DA42C] font-mono">+${results.monthlySavings.toLocaleString('es-AR')}</span>
                </div>
                <div className="flex items-center justify-between pt-3.5 border-t border-[#6DA42C]/20">
                  <span className="text-xs font-bold text-slate-200">Ahorro Anual Estimado:</span>
                  <span className="text-lg font-extrabold text-[#6DA42C] font-mono">+${results.yearlySavings.toLocaleString('es-AR')}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>Plazo de Amortización Estimado:</span>
                  <span className="font-mono text-[#006CB5] font-bold">{results.amortizationYears} Años aprox.</span>
                </div>
              </div>

              {/* Environmental Metrics */}
              <div className="grid grid-cols-2 gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center space-x-2.5">
                  <Leaf className="w-5 h-5 text-[#6DA42C] shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-300 font-mono leading-none">Emisiones Evitadas</p>
                    <p className="text-xs font-bold text-slate-100 mt-1">{results.co2SavedKg.toLocaleString('es-AR')} kg CO2/año</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2.5 border-l border-white/10 pl-3.5">
                  <div className="text-[#6DA42C] text-sm font-bold shrink-0 font-mono">🌳</div>
                  <div>
                    <p className="text-[10px] text-slate-300 font-mono leading-none">Equivalencia Ecológica</p>
                    <p className="text-xs font-bold text-slate-100 mt-1">{results.equivalentTrees} Árboles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculation Actions */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePreFillForm}
                className="w-full sm:w-1/2 flex items-center justify-center space-x-1.5 py-3 rounded-full border-2 border-white/20 hover:bg-white/10 text-white text-xs font-bold transition-all cursor-pointer"
              >
                <span>Usar en Consulta Web</span>
              </button>
              <button
                onClick={handleConsultWhatsApp}
                className="w-full sm:w-1/2 flex items-center justify-center space-x-1.5 py-3 rounded-full bg-[#F98A1E] text-white hover:bg-[#E47412] text-xs font-bold shadow-lg shadow-[#F98A1E]/10 hover:shadow-[#F98A1E]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar por WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
