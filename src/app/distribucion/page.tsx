import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distribución Nacional | FRUTIHORTÍCOLA RED",
  description:
    "Distribución mayorista de frutas y verduras a todo el país desde el Mercado Central de Buenos Aires. Cadena de frío completa.",
};

const regions = [
  {
    name: "Buenos Aires y GBA",
    detail: "Entrega en 24hs. Flota propia con cadena de frío.",
    time: "24 hs",
  },
  {
    name: "Córdoba y Santa Fe",
    detail: "Rutas frecuentes. Salidas martes y viernes.",
    time: "48 hs",
  },
  {
    name: "Entre Ríos y Corrientes",
    detail: "Coordinación directa con transportista regional.",
    time: "48-72 hs",
  },
  {
    name: "Cuyo (Mendoza, San Juan, San Luis)",
    detail: "Salidas semanales. Temperatura controlada.",
    time: "72 hs",
  },
  {
    name: "NOA (Salta, Tucumán, Jujuy, Catamarca, La Rioja)",
    detail: "Salidas regulares. Coordinación con depósito local.",
    time: "72-96 hs",
  },
  {
    name: "NEA (Misiones, Formosa, Chaco)",
    detail: "Servicio disponible. Consultar frecuencia.",
    time: "72-96 hs",
  },
  {
    name: "Patagonia (Neuquén, Río Negro, Chubut, Santa Cruz, TdF)",
    detail: "Servicio quincenal. Para grandes volúmenes.",
    time: "5-7 días",
  },
];

export default function DistribucionPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-verde-mid py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <span className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-crema/50 flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-rojo" />
              Logística
            </span>
            <h1 className="font-display text-5xl lg:text-7xl text-white italic leading-tight">
              Llegamos
              <br />
              a todo el país.
            </h1>
            <p className="font-body text-base text-crema/60 mt-6 max-w-lg leading-relaxed">
              Cadena de frío completa. Transportistas verificados. Seguimiento
              de tu pedido en tiempo real.
            </p>
          </div>
        </div>

        {/* Coverage list */}
        <div className="bg-crema py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
              <div className="hidden lg:flex flex-col gap-3 pt-2">
                <span className="inline-block w-12 h-px bg-rojo" />
                <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-gris">
                  Cobertura
                </p>
              </div>

              <div>
                <p className="font-display text-3xl lg:text-4xl text-negro italic leading-[1.3] mb-12">
                  23 provincias. Una sola llamada.
                </p>
                <div className="divide-y divide-negro/10">
                  {regions.map((r) => (
                    <div
                      key={r.name}
                      className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-6 group"
                    >
                      <div>
                        <h3 className="font-heading font-semibold text-base text-negro mb-1 group-hover:text-verde transition-colors">
                          {r.name}
                        </h3>
                        <p className="font-body text-sm text-gris leading-relaxed">
                          {r.detail}
                        </p>
                      </div>
                      <div className="flex items-center sm:justify-end">
                        <span className="inline-block px-3 py-1 bg-verde/10 font-heading text-xs font-medium text-verde-mid uppercase tracking-wide">
                          {r.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-negro py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="font-display text-3xl italic text-white">
              ¿Tu zona no aparece? Consultanos.
            </p>
            <Link
              href="/contacto"
              className="flex-none px-8 py-4 bg-rojo text-white font-heading font-semibold text-sm uppercase tracking-wide hover:bg-rojo-dark transition-colors"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
