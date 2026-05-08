"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Productos", href: "/productos" },
  { label: "Distribución", href: "/distribucion" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/97 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/logo-web.png"
            alt="Frutihortícola RED"
            width={180}
            height={44}
            className={`h-9 w-auto object-contain transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-heading text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-negro hover:text-verde" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contacto"
            className={`px-6 py-2.5 font-heading font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
              scrolled
                ? "bg-rojo text-white hover:bg-rojo-dark"
                : "bg-white/10 border border-white/30 text-white hover:bg-white hover:text-negro"
            }`}
          >
            Solicitar Cotización
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-10 flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""} ${scrolled && !menuOpen ? "bg-negro" : "bg-white"}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""} ${scrolled && !menuOpen ? "bg-negro" : "bg-white"}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""} ${scrolled && !menuOpen ? "bg-negro" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 bg-verde z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Image
          src="/logo-web.png"
          alt="Frutihortícola RED"
          width={180}
          height={44}
          className="h-9 w-auto object-contain brightness-0 invert mb-4"
        />
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-heading font-black text-3xl text-white hover:text-crema transition-colors uppercase tracking-wide"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contacto"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-4 bg-rojo text-white font-heading font-bold text-sm uppercase tracking-[0.2em]"
        >
          Solicitar Cotización
        </Link>
      </div>
    </header>
  );
}
