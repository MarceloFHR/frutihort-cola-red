"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-crema py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Big quotation mark */}
            <p className="font-display text-[120px] leading-none text-negro/10 italic select-none -mb-8">
              &ldquo;
            </p>
            <blockquote className="font-display text-3xl lg:text-4xl text-negro italic leading-[1.3] mb-8">
              Desde que trabajamos con Frutihortícola RED, nunca más nos faltó
              género. La relación precio-calidad es imbatible para el volumen
              que manejamos.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-verde flex items-center justify-center">
                <span className="font-display text-white italic text-lg font-bold">M</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-negro">
                  Martín Ríos
                </p>
                <p className="font-heading text-xs text-gris uppercase tracking-wide">
                  Gerente de compras · Supermercados Del Pueblo
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side: distribution highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-verde p-8 lg:p-10"
          >
            <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-crema/60 mb-6">
              Distribución nacional
            </p>
            <p className="font-display text-2xl italic text-white mb-8 leading-tight">
              Cobertura en todo el territorio argentino.
            </p>
            <div className="space-y-3">
              {[
                "Buenos Aires y GBA",
                "Córdoba y Santa Fe",
                "Cuyo: Mendoza, San Juan, San Luis",
                "NOA y NEA",
                "Patagonia",
              ].map((region) => (
                <div key={region} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-rojo flex-none" />
                  <span className="font-heading text-sm text-crema/80">{region}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
