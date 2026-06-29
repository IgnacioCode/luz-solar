import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Clock4, ShieldCheck } from 'lucide-react';

interface ContactFormProps {
  preFilledData: {
    clientType: 'hogar' | 'comercio' | 'industria' | 'campo';
    monthlyBill: number;
    message: string;
  } | null;
}

export default function ContactForm({ preFilledData }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [clientType, setClientType] = useState<'hogar' | 'comercio' | 'industria' | 'campo'>('hogar');
  const [monthlyBill, setMonthlyBill] = useState('50000');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  // Auto-fill form fields when preFilledData is passed from the Calculator
  useEffect(() => {
    if (preFilledData) {
      setClientType(preFilledData.clientType);
      setMonthlyBill(String(preFilledData.monthlyBill));
      setMessage(preFilledData.message);
    }
  }, [preFilledData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!name || !phone || !email) {
      setErrorMessage('Por favor complete los campos obligatorios: Nombre, Teléfono e Email.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppDirect = () => {
    let customText = `Hola Helios Solar! Me gustaría recibir asesoramiento personalizado.\n\n` +
                     `- *Nombre:* ${name || 'Interesado'}\n` +
                     `- *Teléfono:* ${phone || 'No provisto'}\n` +
                     `- *Ubicación:* ${location || 'No provista'}\n` +
                     `- *Tipo:* ${clientType.toUpperCase()}\n` +
                     `- *Factura Eléctrica:* $${Number(monthlyBill).toLocaleString('es-AR')} ARS\n` +
                     `- *Consulta:* ${message || 'Solicito cotización para sistema de paneles solares.'}`;
    
    const encoded = encodeURIComponent(customText);
    window.open(`https://wa.me/5491123456789?text=${encoded}`, '_blank');
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setLocation('');
    setClientType('hogar');
    setMonthlyBill('50000');
    setMessage('');
    setErrorMessage('');
    setIsSubmitted(false);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#19A7CE]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#57C5B6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Form on left, Commercial CTA on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Right Column: High conversion block */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#19A7CE] font-mono uppercase bg-[#19A7CE]/10 px-3.5 py-1.5 rounded-full border border-[#19A7CE]/25 inline-block">
                Contacto e Ingeniería
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B2447] leading-tight">
                Empezá a ahorrar con energía solar
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Contanos qué necesitás y te asesoramos con una solución a medida. Recibí una estimación técnica preliminar y una propuesta financiera detallada sin ningún compromiso.
              </p>
            </div>

            {/* Quick Contact Info Items */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2.5 rounded-lg bg-[#57C5B6]/10 text-[#57C5B6]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase">Línea de Guardia WhatsApp</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0B2447] mt-0.5">+54 9 11 2345-6789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2.5 rounded-lg bg-[#19A7CE]/10 text-[#19A7CE]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase">Departamento de Ingeniería</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0B2447] mt-0.5">ingenieria@heliossolar.com.ar</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2.5 rounded-lg bg-orange-500/10 text-[#F27D26]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase">Zona de Cobertura Principal</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0B2447] mt-0.5">Todo el país (Despachos y Obras LLave en mano)</p>
                </div>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#57C5B6] shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-500 leading-relaxed">Tus datos están protegidos bajo estricto secreto profesional. Los utilizaremos únicamente para modelar el diseño eléctrico preliminar y contactarte.</p>
            </div>
          </div>

          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl relative">
            
            {/* Success State */}
            {isSubmitted ? (
              <div className="p-8 sm:p-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#57C5B6]/10 border border-[#57C5B6]/20 flex items-center justify-center text-[#57C5B6] mx-auto">
                  <CheckCircle className="w-10 h-10 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0B2447]">¡Presupuesto Solicitado!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed font-normal">
                    Hemos recibido tus datos con éxito. Un ingeniero de nuestro departamento técnico ya está analizando tu perfil de consumo.
                  </p>
                </div>

                {/* Simulated Timeline for Response */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-4 text-left">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
                    Próximos Pasos de tu Cotización:
                  </h4>
                  <div className="space-y-3.5">
                    <div className="flex items-start space-x-3 text-xs">
                      <Clock4 className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#0B2447]">Análisis Técnico (Siguiente Hora)</p>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Calculamos tu radiación e inclinación óptima según tu ubicación ({location || 'tu localidad'}).</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 text-xs">
                      <Phone className="w-4 h-4 text-[#19A7CE] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#0B2447]">Llamado de Validación (Siguientes 24hs)</p>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Te llamamos al {phone} para resolver dudas menores y afinar el presupuesto.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-1/2 flex items-center justify-center space-x-1.5 py-3 rounded-full bg-[#57C5B6] text-white hover:bg-[#57C5B6]/90 text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Acelerar por WhatsApp</span>
                  </button>
                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-1/2 py-3 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-800 hover:bg-slate-50 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Pedir Otra Cotización</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form State */
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#0B2447]">Formulario de Presupuesto Técnico</h3>
                  <p className="text-xs text-slate-500 font-normal">Los campos marcados con * son requeridos para elaborar el diseño.</p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-bold">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19A7CE] focus:ring-1 focus:ring-[#19A7CE] transition-all font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">Teléfono de Contacto *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. +54 9 11 1234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19A7CE] focus:ring-1 focus:ring-[#19A7CE] transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="Ej. juan.perez@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19A7CE] focus:ring-1 focus:ring-[#19A7CE] transition-all font-sans"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">Ubicación / Ciudad</label>
                    <input
                      type="text"
                      placeholder="Ej. Rosario, Santa Fe"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19A7CE] focus:ring-1 focus:ring-[#19A7CE] transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Client Type selection */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">Sector Consumo</label>
                    <select
                      value={clientType}
                      onChange={(e) => setClientType(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#19A7CE] focus:ring-1 focus:ring-[#19A7CE] transition-all font-sans"
                    >
                      <option value="hogar">Hogar (Residencial)</option>
                      <option value="comercio">Comercio (Oficina/Taller)</option>
                      <option value="industria">Industria pequeña</option>
                      <option value="campo">Campo / Zona Rural</option>
                    </select>
                  </div>

                  {/* Monthly Bill Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">Factura de Luz Promedio (ARS/Mes)</label>
                    <input
                      type="number"
                      placeholder="Ej. 45000"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19A7CE] focus:ring-1 focus:ring-[#19A7CE] transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">Detalles de tu Necesidad</label>
                  <textarea
                    rows={4}
                    placeholder="Contanos si tenés cortes de luz frecuentes, espacio disponible en el techo (losas, chapas), o si necesitás alimentar un boyero rural..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19A7CE] focus:ring-1 focus:ring-[#19A7CE] transition-all font-sans resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-1/2 flex items-center justify-center space-x-2 py-3.5 rounded-full border border-[#57C5B6]/30 bg-[#57C5B6]/5 hover:bg-[#57C5B6]/10 text-[#57C5B6] text-xs font-bold transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Hablar por WhatsApp</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-1/2 flex items-center justify-center space-x-2 py-3.5 rounded-full bg-[#F27D26] hover:bg-orange-600 text-white text-xs font-bold shadow-lg shadow-orange-200 disabled:opacity-50 transition-all cursor-pointer transform active:scale-95"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Pedir Presupuesto</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
