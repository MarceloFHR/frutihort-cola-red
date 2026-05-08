"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type FormData = {
  empresa: string;
  rubro: string;
  nombre: string;
  whatsapp: string;
  productos: string;
  mensaje: string;
};

export default function ContactoPage() {
  const [form, setForm] = useState<FormData>({
    empresa: "",
    rubro: "",
    nombre: "",
    whatsapp: "",
    productos: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  const waMessage = encodeURIComponent(
    "Hola, me contacto desde la web. Me gustaría recibir información sobre precios y distribución."
  );

  return (
    <>
      <Header />
      <main className="pt-20 bg-crema min-h-screen">
        {/* Page header */}
        <div className="bg-negro py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <span className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-rojo flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-rojo" />
              Contacto
            </span>
            <h1 className="font-display text-5xl lg:text-7xl text-white italic leading-tight">
              Hablemos
              <br />
              de negocios.
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
            {/* Form */}
            <div>
              {sent ? (
                <div className="py-16">
                  <p className="font-display text-5xl italic text-verde mb-4">
                    ¡Recibimos tu consulta!
                  </p>
                  <p className="font-body text-gris text-lg leading-relaxed">
                    Te respondemos en menos de 2 horas hábiles con precios
                    mayoristas y disponibilidad actualizada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Empresa */}
                    <div>
                      <label className="block font-heading text-xs font-medium uppercase tracking-wide text-gris mb-2">
                        Empresa / Negocio *
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        required
                        placeholder="Nombre de tu empresa"
                        className="w-full bg-white border border-negro/15 px-4 py-3.5 font-heading text-sm text-negro placeholder:text-gris/50 focus:outline-none focus:border-verde transition-colors"
                      />
                    </div>

                    {/* Rubro */}
                    <div>
                      <label className="block font-heading text-xs font-medium uppercase tracking-wide text-gris mb-2">
                        Rubro *
                      </label>
                      <select
                        name="rubro"
                        value={form.rubro}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-negro/15 px-4 py-3.5 font-heading text-sm text-negro focus:outline-none focus:border-verde transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Seleccioná tu rubro</option>
                        <option value="supermercado">Supermercado / Hipermercado</option>
                        <option value="mayorista">Distribuidor Mayorista</option>
                        <option value="restaurante">Restaurante / Gastronomía</option>
                        <option value="verduleria">Verdulería / Frutería</option>
                        <option value="industria">Industria Alimentaria</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    {/* Nombre */}
                    <div>
                      <label className="block font-heading text-xs font-medium uppercase tracking-wide text-gris mb-2">
                        Tu nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Nombre y apellido"
                        className="w-full bg-white border border-negro/15 px-4 py-3.5 font-heading text-sm text-negro placeholder:text-gris/50 focus:outline-none focus:border-verde transition-colors"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block font-heading text-xs font-medium uppercase tracking-wide text-gris mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={form.whatsapp}
                        onChange={handleChange}
                        required
                        placeholder="+54 9 11 XXXX-XXXX"
                        className="w-full bg-white border border-negro/15 px-4 py-3.5 font-heading text-sm text-negro placeholder:text-gris/50 focus:outline-none focus:border-verde transition-colors"
                      />
                    </div>
                  </div>

                  {/* Productos */}
                  <div>
                    <label className="block font-heading text-xs font-medium uppercase tracking-wide text-gris mb-2">
                      Productos de interés
                    </label>
                    <input
                      type="text"
                      name="productos"
                      value={form.productos}
                      onChange={handleChange}
                      placeholder="Ej: manzanas, tomates, papa, lechuga..."
                      className="w-full bg-white border border-negro/15 px-4 py-3.5 font-heading text-sm text-negro placeholder:text-gris/50 focus:outline-none focus:border-verde transition-colors"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block font-heading text-xs font-medium uppercase tracking-wide text-gris mb-2">
                      Mensaje / Cantidades estimadas
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Contanos sobre tu negocio y qué volumen necesitás..."
                      className="w-full bg-white border border-negro/15 px-4 py-3.5 font-heading text-sm text-negro placeholder:text-gris/50 focus:outline-none focus:border-verde transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-4 bg-rojo text-white font-heading font-semibold text-sm uppercase tracking-wide hover:bg-rojo-dark transition-colors disabled:opacity-60"
                  >
                    {loading ? "Enviando..." : "Solicitar cotización"}
                  </button>
                </form>
              )}
            </div>

            {/* Right side info */}
            <div className="space-y-8">
              {/* WhatsApp direct */}
              <div className="bg-verde p-8">
                <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-crema/50 mb-4">
                  Respuesta inmediata
                </p>
                <p className="font-display text-2xl italic text-white mb-6">
                  O escribinos directamente por WhatsApp.
                </p>
                <a
                  href={`https://wa.me/54911131973000?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white font-heading font-semibold text-sm uppercase tracking-wide hover:bg-[#20b558] transition-colors"
                >
                  <span>💬</span> Abrir WhatsApp
                </a>
              </div>

              {/* Info */}
              <div className="space-y-5">
                <div>
                  <p className="font-heading text-xs font-medium uppercase tracking-wide text-gris mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:admin@frutihorticolared.com"
                    className="font-heading text-sm text-negro hover:text-verde transition-colors"
                  >
                    admin@frutihorticolared.com
                  </a>
                </div>
                <div>
                  <p className="font-heading text-xs font-medium uppercase tracking-wide text-gris mb-1">
                    Ubicación
                  </p>
                  <p className="font-heading text-sm text-negro">
                    Mercado Central de Buenos Aires
                    <br />
                    Av. Ruta Provincial N° 1000
                    <br />
                    La Matanza, Buenos Aires
                  </p>
                </div>
                <div>
                  <p className="font-heading text-xs font-medium uppercase tracking-wide text-gris mb-1">
                    Horario de atención
                  </p>
                  <p className="font-heading text-sm text-negro">
                    Lunes a viernes: 6:00 — 16:00 hs
                    <br />
                    Sábados: 6:00 — 12:00 hs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
