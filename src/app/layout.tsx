import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "FRUTIHORTÍCOLA RED | Distribución Mayorista de Frutas y Verduras",
  description:
    "Distribuidores mayoristas de frutas y verduras frescas desde el Mercado Central de Buenos Aires. Abastecemos supermercados, mayoristas y restaurantes en todo el país.",
  keywords:
    "distribuidor frutas verduras buenos aires, mayorista frutas argentina, proveedor verduras restaurantes, mercado central distribucion",
  openGraph: {
    title: "FRUTIHORTÍCOLA RED | Distribución Mayorista",
    description:
      "Del Mercado Central de Buenos Aires a tu negocio. Frutas y verduras frescas para supermercados, mayoristas y restaurantes.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} ${lora.variable}`}
    >
      <body className="bg-crema text-negro antialiased">{children}</body>
    </html>
  );
}
