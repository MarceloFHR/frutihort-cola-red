"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-verde">
      {/* Geometric mesh background — inspired by the logo apple */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2218] via-verde to-[#2D6A4F]" />
        {/* Subtle radial glow top-right */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-rojo/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-verde-mid/20 blur-3xl" />
        {/* Large ghost text — brand watermark */}
        <div className="absolute bottom-8 right-0 pointer-events-none select-none overflow-hidden">
          <p className="font-heading font-black text-[160px] lg:text-[220px] text-white/[0.04] leading-none tracking-tighter whitespace-nowrap pr-8">
            RED
          </p>
        </div>
        {/* Diagonal separator line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-end pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            {/* Tag line */}
            <motion.p
              variants={item}
              className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-rojo mb-8 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-rojo" />
              Mercado Central · Buenos Aires
            </motion.p>

            {/* Headline — Playfair Display large */}
            <motion.h1
              variants={item}
              className="font-display text-6xl md:text-8xl lg:text-[96px] text-white leading-[0.88] tracking-tight mb-8"
            >
              Del campo
              <br />
              <em className="italic text-crema">a tu negocio.</em>
              <br />
              <span className="font-heading font-black text-rojo text-5xl md:text-7xl lg:text-8xl tracking-tight not-italic">
                Directo.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="font-body text-lg text-white/65 max-w-xl leading-relaxed mb-12"
            >
              Abastecemos supermercados, mayoristas y restaurantes de todo el
              país con frutas y verduras frescas, directas del Mercado Central.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-rojo text-white font-heading font-semibold text-sm uppercase tracking-[0.15em] hover:bg-rojo-dark transition-colors"
              >
                Contactanos
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/25 text-white font-heading font-medium text-sm uppercase tracking-[0.15em] hover:border-white/60 hover:bg-white/8 transition-all"
              >
                Ver catálogo
                <span className="ml-3 text-rojo">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom numbers strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: "40+", label: "Años de experiencia" },
              { value: "200T", label: "Por mes distribuidas" },
              { value: "800+", label: "Clientes activos" },
            ].map((s) => (
              <div key={s.value} className="py-6 px-6 first:pl-0">
                <p className="font-heading font-black text-2xl text-white mb-0.5">
                  {s.value}
                </p>
                <p className="font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
