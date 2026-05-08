"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import Link from "next/link";

type Filter = "todos" | "fruta" | "verdura" | "temporada";

export default function ProductosPage() {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = products.filter((p) => {
    if (filter === "todos") return true;
    if (filter === "temporada") return p.season === "temporada";
    return p.category === filter;
  });

  const filters: { value: Filter; label: string }[] = [
    { value: "todos", label: "Todo el catálogo" },
    { value: "fruta", label: "Frutas" },
    { value: "verdura", label: "Verduras" },
    { value: "temporada", label: "De temporada" },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Page header */}
        <div className="bg-verde py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <span className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-crema/50 flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-rojo" />
              Catálogo
            </span>
            <h1 className="font-display text-5xl lg:text-7xl text-white italic leading-tight">
              Nuestros
              <br />
              productos.
            </h1>
            <p className="font-body text-base text-crema/60 mt-6 max-w-lg leading-relaxed">
              Stock actualizado. Precio mayorista. Entrega en todo el país.
              Consultá disponibilidad y cotizá sin compromiso.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-crema-dark border-b border-negro/10 sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex gap-0 overflow-x-auto">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`flex-none px-6 py-4 font-heading text-xs font-medium uppercase tracking-wide border-b-2 transition-all ${
                    filter === f.value
                      ? "border-rojo text-negro"
                      : "border-transparent text-gris hover:text-negro"
                  }`}
                >
                  {f.label}
                  <span className="ml-2 opacity-50">
                    {f.value === "todos"
                      ? products.length
                      : f.value === "temporada"
                      ? products.filter((p) => p.season === "temporada").length
                      : products.filter((p) => p.category === f.value).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products — asymmetric masonry-like layout */}
        <div className="bg-crema py-16 lg:py-20 min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className={`relative overflow-hidden group cursor-pointer ${
                      i % 5 === 0 ? "aspect-square" : "aspect-[4/5]"
                    }`}
                  >
                    {/* Product image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="font-heading font-semibold text-sm uppercase tracking-wide leading-none text-white">
                        {product.name}
                      </p>
                      <p className="font-heading text-xs text-white/60 mt-1">
                        {product.origin}
                      </p>
                    </div>

                    {/* Season badge */}
                    <div className="absolute top-3 left-3 bg-negro/70 px-2 py-0.5">
                      <span className="font-heading text-[10px] font-medium uppercase tracking-wide text-white/80">
                        {product.seasonShort}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-crema-dark py-16 border-t border-negro/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl italic text-negro mb-2">
                ¿No encontrás lo que buscás?
              </h2>
              <p className="font-body text-gris text-base">
                Manejamos más de 80 variedades. Consultanos directamente.
              </p>
            </div>
            <Link
              href="/contacto"
              className="flex-none px-8 py-4 bg-rojo text-white font-heading font-semibold text-sm uppercase tracking-wide hover:bg-rojo-dark transition-colors"
            >
              Consultar disponibilidad
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
