"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "40+", label: "Años en el Mercado Central", suffix: "" },
  { value: "200", label: "Toneladas distribuidas por mes", suffix: "T" },
  { value: "80+", label: "Variedades disponibles", suffix: "" },
  { value: "800+", label: "Clientes activos", suffix: "" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-verde py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16 lg:mb-20"
        >
          <span className="inline-block w-8 h-px bg-rojo" />
          <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-crema/60">
            Nuestra escala
          </p>
        </motion.div>

        {/* Stats grid — asymmetric, not cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 lg:px-10 py-4 first:pl-0"
            >
              <p className="font-display text-6xl lg:text-8xl text-white italic font-bold leading-none mb-3 tracking-tight">
                {stat.value}
              </p>
              <p className="font-heading text-xs font-medium uppercase tracking-wide text-crema/50 leading-relaxed max-w-[140px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
