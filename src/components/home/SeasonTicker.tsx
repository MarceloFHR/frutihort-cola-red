import { seasonItems } from "@/data/products";

export default function SeasonTicker() {
  const doubled = [...seasonItems, ...seasonItems];

  return (
    <div className="bg-negro overflow-hidden py-5 border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-0 px-0"
          >
            <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 px-5">
              {item.emoji} {item.name}
            </span>
            <span className="font-heading text-[11px] font-normal text-rojo/80 tracking-widest px-2">
              {item.season}
            </span>
            <span className="text-white/10 text-xs px-4">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
