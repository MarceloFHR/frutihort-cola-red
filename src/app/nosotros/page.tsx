import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | FRUTIHORTÍCOLA RED",
  description:
    "Conocé la historia y el equipo detrás de Frutihortícola RED, distribuidores mayoristas desde el Mercado Central de Buenos Aires.",
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-tierra py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <span className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-white/50 flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-white/50" />
              Nuestra historia
            </span>
            <h1 className="font-display text-5xl lg:text-7xl text-white italic leading-tight">
              Más de 15 años
              <br />
              en el corazón
              <br />
              del mercado.
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-crema py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
              <div className="hidden lg:flex flex-col gap-3 pt-2">
                <span className="inline-block w-12 h-px bg-rojo" />
                <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-gris">
                  Quiénes somos
                </p>
              </div>

              <div className="space-y-16">
                {/* Main story */}
                <div>
                  <p className="font-display text-3xl lg:text-4xl text-negro italic leading-[1.3] mb-8">
                    Empezamos con un puesto en el galpón 12 del Mercado Central.
                    Hoy distribuimos a más de 800 clientes en todo el país.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-crema-dark pt-8">
                    <p className="font-body text-base text-gris leading-relaxed">
                      Fundada en 2009 por la familia Rodríguez, Frutihortícola RED
                      nació de la vocación de llevar producto fresco directamente
                      desde el productor hasta el negocio, sin intermediarios innecesarios.
                    </p>
                    <p className="font-body text-base text-gris leading-relaxed">
                      Con el tiempo, construimos relaciones sólidas con más de 200
                      productores en todo el país y desarrollamos una red logística
                      que cubre las 23 provincias argentinas.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className="border-t border-crema-dark pt-16">
                  <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-gris mb-10">
                    Lo que nos define
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Frescura no negociable",
                        body: "Nuestro producto pasa un máximo de 24-48 horas entre cosecha y entrega. No aceptamos menos.",
                      },
                      {
                        title: "Precio justo para escala real",
                        body: "Trabajamos con volúmenes mayoristas reales. Nuestros precios reflejan eso, sin intermediarios.",
                      },
                      {
                        title: "Transparencia total",
                        body: "Siempre sabés qué hay, cuánto cuesta y cuándo llega. Sin sorpresas, sin ambigüedades.",
                      },
                    ].map((v) => (
                      <div
                        key={v.title}
                        className="grid grid-cols-[20px_1fr] gap-6 items-start"
                      >
                        <span className="w-1 h-full min-h-[40px] bg-rojo mt-1 flex-none" />
                        <div>
                          <h3 className="font-display text-xl italic text-negro mb-1">
                            {v.title}
                          </h3>
                          <p className="font-body text-base text-gris leading-relaxed">
                            {v.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
