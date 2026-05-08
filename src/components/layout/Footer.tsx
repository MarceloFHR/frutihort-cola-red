import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Distribución", href: "/distribucion" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-verde">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 lg:gap-20 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white px-4 py-3 mb-6">
              <Image
                src="/logo-footer.png"
                alt="Frutihortícola RED"
                width={200}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-crema/60 leading-relaxed max-w-xs">
              Distribución mayorista de frutas y verduras frescas desde el
              Mercado Central de Buenos Aires a todo el país.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-crema/40 mb-5">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading text-sm text-crema/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-crema/40 mb-5">
              Contacto
            </p>
            <div className="space-y-2.5">
              <a
                href="https://wa.me/54911131973000"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-heading text-sm text-crema/70 hover:text-white transition-colors"
              >
                WhatsApp: +54 9 11 3197-3000
              </a>
              <a
                href="mailto:admin@frutihorticolared.com"
                className="block font-heading text-sm text-crema/70 hover:text-white transition-colors"
              >
                admin@frutihorticolared.com
              </a>
              <p className="font-heading text-sm text-crema/50">
                Mercado Central
                <br />
                Av. Ruta Provincial Nº 1000
                <br />
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="font-heading text-xs text-crema/40">
            © {new Date().getFullYear()} Frutihortícola RED. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xs text-crema/40 hover:text-white transition-colors uppercase tracking-wide"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xs text-crema/40 hover:text-white transition-colors uppercase tracking-wide"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
