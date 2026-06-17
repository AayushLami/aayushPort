"use client";

const marqueeItems = [
  "SEO Optimized",
  "Fast Delivery",
  "Google Ready",
  "Mobile First",
  "Direct Communication",
  "No Middlemen",
  "Nationwide",
  "Conversion Focused",
];

export function Marquee() {
  // We double the items list to allow seamless loop scrolling
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full overflow-hidden bg-[#f5f5f5] py-4 border-y border-[#e5e5e5] select-none">
      <div className="max-w-[1100px] mx-auto overflow-hidden relative">
        <div className="flex w-max items-center gap-8 animate-[marquee_30s_linear_infinite]">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#6b7280]">
                {item}
              </span>
              <span className="text-[#c0c0c0] font-bold text-xs select-none">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
