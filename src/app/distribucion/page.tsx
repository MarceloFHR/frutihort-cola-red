import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distribución | FRUTIHORTÍCOLA RED",
  description:
    "Distribución mayorista de frutas y verduras en Buenos Aires y el Gran Buenos Aires desde el Mercado Central.",
};

const zones = [
  {
    name: "Capital Federal",
    detail: "Entrega en 24hs. Flota propia con cadena de frío.",
    time: "24 hs",
  },
  {
    name: "GBA Norte",
    detail: "San Isidro, Vicente López, Tigre, San Fernando y zonas aledañas.",
    time: "24 hs",
  },
  {
    name: "GBA Sur",
    detail: "Lanús, Lomas de Zamora, Quilmes, Berazategui y alrededores.",
    time: "24 hs",
  },
  {
    name: "GBA Oeste",
    detail: "Morón, Merlo, Moreno, La Matanza y zonas lindantes.",
    time: "24 hs",
  },
  {
    name: "Provincia de Buenos Aires",
    detail: "La Plata, Mar del Plata, Bahía Blanca y principales ciudades del interior bonaerense.",
    time: "24–48 hs",
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
              Buenos Aires,
              <br />
              cubierto.
            </h1>
            <p className="font-body text-base text-crema/60 mt-6 max-w-lg leading-relaxed">
              Operamos desde el Mercado Central con flota propia y cadena de frío
              para todo el Gran Buenos Aires y la Provincia.
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
                  Capital y provincia de Buenos Aires. Una sola llamada.
                </p>
                <div className="divide-y divide-negro/10">
                  {zones.map((z) => (
                    <div
                      key={z.name}
                      className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-6 group"
                    >
                      <div>
                        <h3 className="font-heading font-semibold text-base text-negro mb-1 group-hover:text-verde transition-colors">
                          {z.name}
                        </h3>
                        <p className="font-body text-sm text-gris leading-relaxed">
                          {z.detail}
                        </p>
                      </div>
                      <div className="flex items-center sm:justify-end">
                        <span className="inline-block px-3 py-1 rounded-full bg-verde/10 font-heading text-xs font-medium text-verde-mid uppercase tracking-wide">
                          {z.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-negro/10">
                  {[
                    { title: "Flota propia", body: "Vehículos refrigerados con temperatura controlada de punta a punta." },
                    { title: "Entrega programada", body: "Coordinamos el día y horario que mejor se adapta a tu operación." },
                    { title: "Stock real", body: "Confirmamos disponibilidad antes de cada pedido. Sin sorpresas." },
                  ].map((f) => (
                    <div key={f.title}>
                      <span className="inline-block w-6 h-px bg-rojo mb-4" />
                      <h3 className="font-heading font-semibold text-sm text-negro uppercase tracking-wide mb-2">
                        {f.title}
                      </h3>
                      <p className="font-body text-sm text-gris leading-relaxed">
                        {f.body}
                      </p>
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
              ¿Querés recibir en tu negocio?
            </p>
            <Link
              href="/contacto"
              className="flex-none px-8 py-4 rounded-lg bg-rojo text-white font-heading font-semibold text-sm uppercase tracking-wide hover:bg-rojo-dark transition-colors"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
