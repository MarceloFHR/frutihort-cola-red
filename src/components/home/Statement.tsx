"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Statement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-crema py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Asymmetric layout: label left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24 items-start">
          {/* Left: rotating label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-3 pt-3"
          >
            <span className="inline-block w-12 h-px bg-rojo" />
            <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-gris">
              Quiénes somos
            </p>
          </motion.div>

          {/* Right: editorial text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-negro leading-[1.2] mb-10"
            >
              Cada mañana, antes del amanecer,{" "}
              <em className="italic text-verde">nuestros compradores ya están</em>{" "}
              en el Mercado Central eligiendo lo mejor para tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-crema-dark pt-10"
            >
              <div>
                <p className="font-body text-base text-gris leading-relaxed">
                  Somos distribuidores mayoristas con más de 15 años operando
                  en el corazón del Mercado Central de Buenos Aires. Conocemos
                  cada productor, cada temporada, cada variedad.
                </p>
              </div>
              <div>
                <p className="font-body text-base text-gris leading-relaxed">
                  Nuestro compromiso es simple: producto fresco, precio justo,
                  entrega en tiempo. Sin excusas. Llegamos a todas las
                  provincias con cadena de frío completa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
