"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Consultá tu pedido",
    body: "Contactanos por WhatsApp o completá el formulario. Nuestro equipo responde en menos de 2 horas hábiles.",
  },
  {
    n: "02",
    title: "Recibís tu cotización",
    body: "Te enviamos precios mayoristas actualizados con disponibilidad real. Siempre con información de temporada.",
  },
  {
    n: "03",
    title: "Confirmás y coordinamos",
    body: "Definimos cantidades, fechas y logística. Trabajamos con transportistas en todo el país.",
  },
  {
    n: "04",
    title: "Entrega directa",
    body: "Producto fresco, directo desde el Mercado Central hasta tu local o centro de distribución.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-crema-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="inline-block w-8 h-px bg-rojo" />
          <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-gris">
            Cómo trabajamos
          </p>
        </motion.div>

        {/* Steps — list, not cards */}
        <div className="divide-y divide-negro/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="grid grid-cols-[60px_1fr] lg:grid-cols-[80px_1fr_1fr] items-start gap-6 lg:gap-12 py-8 lg:py-10 group"
            >
              {/* Number */}
              <span className="font-display text-5xl text-negro/15 font-bold italic leading-none group-hover:text-rojo/20 transition-colors">
                {step.n}
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl lg:text-3xl text-negro italic self-center">
                {step.title}
              </h3>

              {/* Body */}
              <p className="font-body text-base text-gris leading-relaxed col-start-2 lg:col-start-3">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
