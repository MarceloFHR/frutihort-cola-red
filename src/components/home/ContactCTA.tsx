"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const waMessage = encodeURIComponent(
    "Hola, me contacto desde la web. Me gustaría recibir información sobre precios y distribución."
  );
  const waLink = `https://wa.me/54911131973000?text=${waMessage}`;

  return (
    <section ref={ref} className="bg-negro py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-rojo flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-rojo" />
              Trabajemos juntos
            </span>
            <h2 className="font-display text-4xl lg:text-6xl text-white italic leading-[1.1] mb-6">
              ¿Listo para garantizar
              el abastecimiento
              de tu negocio?
            </h2>
            <p className="font-body text-base text-white/60 leading-relaxed max-w-md">
              Cotizá sin compromiso. Respondemos en menos de 2 horas
              hábiles con disponibilidad real y precios mayoristas.
            </p>
          </motion.div>

          {/* Right — two action options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* WhatsApp — primary */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-8 py-6 rounded-xl bg-[#25D366] hover:bg-[#20b558] transition-colors group"
            >
              <div>
                <p className="font-heading font-bold text-white text-lg">
                  Escribinos por WhatsApp
                </p>
                <p className="font-heading text-white/80 text-sm mt-0.5">
                  Respuesta inmediata
                </p>
              </div>
              <span className="text-3xl group-hover:scale-110 transition-transform">
                💬
              </span>
            </a>

            {/* Form — secondary */}
            <Link
              href="/contacto"
              className="flex items-center justify-between px-8 py-6 rounded-xl border border-white/20 hover:border-white hover:bg-white/5 transition-all group"
            >
              <div>
                <p className="font-heading font-semibold text-white text-lg">
                  Completar formulario
                </p>
                <p className="font-heading text-white/50 text-sm mt-0.5">
                  Cotización detallada
                </p>
              </div>
              <span className="text-white/50 group-hover:text-white transition-colors text-xl">
                →
              </span>
            </Link>

            {/* Email */}
            <a
              href="mailto:admin@frutihorticolared.com"
              className="font-heading text-sm text-white/40 hover:text-white/70 transition-colors text-center py-2"
            >
              admin@frutihorticolared.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
