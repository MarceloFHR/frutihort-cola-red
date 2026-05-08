export type Product = {
  id: string;
  name: string;
  category: "fruta" | "verdura";
  season: string;
  seasonShort: string;
  color: string;
  accent: string;
  emoji: string;
  origin: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "durazno", name: "Durazno", category: "fruta", season: "Dic — Mar", seasonShort: "Dic — Mar",
    color: "#E07A3A", accent: "#fff", emoji: "🍑", origin: "San Juan",
    image: "https://images.unsplash.com/photo-1568584711611-4dfa4cd196f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pimiento", name: "Pimiento", category: "verdura", season: "Oct — Mar", seasonShort: "Oct — Mar",
    color: "#D62828", accent: "#fff", emoji: "🫑", origin: "La Rioja",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "limon", name: "Limón", category: "fruta", season: "Todo el año", seasonShort: "Todo el año",
    color: "#E8C84B", accent: "#1B4332", emoji: "🍋", origin: "Tucumán",
    image: "https://images.unsplash.com/photo-1624308277768-1876b24351de?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "anco", name: "Anco", category: "verdura", season: "Mar — Jul", seasonShort: "Mar — Jul",
    color: "#D4702A", accent: "#fff", emoji: "🎃", origin: "Mendoza",
    image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "naranja", name: "Naranja", category: "fruta", season: "Abr — Sep", seasonShort: "Abr — Sep",
    color: "#E87D2A", accent: "#fff", emoji: "🍊", origin: "Corrientes",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "arveja", name: "Arveja", category: "verdura", season: "Jul — Oct", seasonShort: "Jul — Oct",
    color: "#4A8C5C", accent: "#fff", emoji: "🟢", origin: "Córdoba",
    image: "https://images.unsplash.com/photo-1632640110804-58827a6b37fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "melon", name: "Melón", category: "fruta", season: "Nov — Feb", seasonShort: "Nov — Feb",
    color: "#B8C97A", accent: "#1B4332", emoji: "🍈", origin: "San Juan",
    image: "https://images.unsplash.com/photo-1646992121887-b86f863dfb5e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "palta", name: "Palta", category: "fruta", season: "Abr — Sep", seasonShort: "Abr — Sep",
    color: "#2D5A27", accent: "#fff", emoji: "🥑", origin: "Salta",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "uva", name: "Uva", category: "fruta", season: "Feb — May", seasonShort: "Feb — May",
    color: "#6B2FA0", accent: "#fff", emoji: "🍇", origin: "Mendoza",
    image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tomate", name: "Tomate", category: "verdura", season: "Todo el año", seasonShort: "Todo el año",
    color: "#C1121F", accent: "#fff", emoji: "🍅", origin: "Salta",
    image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "anana", name: "Ananá", category: "fruta", season: "Todo el año", seasonShort: "Todo el año",
    color: "#D4A017", accent: "#1B4332", emoji: "🍍", origin: "Formosa",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zapallito", name: "Zapallito", category: "verdura", season: "Oct — Abr", seasonShort: "Oct — Abr",
    color: "#5A9E44", accent: "#fff", emoji: "🥒", origin: "Buenos Aires",
    image: "https://images.unsplash.com/photo-1563252722-6434563a985d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "manzana", name: "Manzana", category: "fruta", season: "Feb — May", seasonShort: "Feb — May",
    color: "#8B1A1A", accent: "#fff", emoji: "🍎", origin: "Río Negro",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
  },
];

export const seasonItems = products.map((p) => ({
  emoji: p.emoji,
  name: p.name,
  season: p.seasonShort,
}));
