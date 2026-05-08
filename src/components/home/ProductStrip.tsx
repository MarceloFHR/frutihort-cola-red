"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section ref={ref} className="bg-crema py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-gris flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-rojo" />
              Catálogo destacado
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-negro italic">
              Lo que tenemos
              <br />
              para <em className="not-italic text-verde">tu negocio.</em>
            </h2>
          </div>
          <Link
            href="/productos"
            className="hidden sm:inline-flex items-center gap-2 font-heading text-xs font-semibold text-negro border-b border-negro pb-1 hover:text-verde hover:border-verde transition-colors uppercase tracking-wide"
          >
            Ver todo →
          </Link>
        </motion.div>
      </div>

      {/* Product grid — 3 rows with varied widths, more dynamic */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {products.map((product, i) => {
            const isWide = i === 0 || i === 6 || i === 9;
            const isTall = i === 2 || i === 8;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative overflow-hidden cursor-pointer group ${
                  isWide ? "col-span-2" : "col-span-1"
                } ${isTall ? "row-span-2" : "row-span-1"} ${
                  isTall ? "aspect-[3/5]" : isWide ? "aspect-[2/1]" : "aspect-square"
                }`}
              >
                {/* Product image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <AnimatePresence>
                  {hovered === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-negro/80 flex flex-col items-center justify-center p-4 text-center"
                    >
                      <p
                        className="font-heading font-black text-sm uppercase tracking-wide text-white mb-1"
                      >
                        {product.name}
                      </p>
                      <p className="font-heading text-[10px] font-medium text-white/60 uppercase tracking-widest mb-3">
                        {product.origin}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-px bg-rojo" />
                        <span className="font-heading text-[10px] text-rojo uppercase tracking-widest font-semibold">
                          {product.season}
                        </span>
                        <span className="inline-block w-2 h-px bg-rojo" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Always-visible name at bottom (non-hovered) */}
                {hovered !== product.id && (
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="font-heading font-semibold text-[11px] uppercase tracking-wide leading-none text-white">
                      {product.name}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-between"
        >
          <p className="font-heading text-xs text-gris uppercase tracking-wide">
            {products.length} productos destacados · pasá el cursor para ver temporada
          </p>
          <Link
            href="/productos"
            className="font-heading text-xs font-semibold text-negro border-b border-negro pb-0.5 hover:text-verde hover:border-verde transition-colors uppercase tracking-wide sm:hidden"
          >
            Ver todo →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
