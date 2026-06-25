import { useState, useMemo } from "react";
import { PageHero } from "@/components/PageHero";
import { GALLERY_CATEGORIES } from "@/data/site";

// Curated, license-friendly placeholders (Unsplash CDN)
const ITEMS: { cat: string; title: string; img: string }[] = [
  {
    cat: "Printing",
    title: "Offset Printing Press",
    img: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80",
  },
  {
    cat: "Printing",
    title: "Digital Print Run",
    img: "https://images.unsplash.com/photo-1601225612051-d44d9c2c1b3a?w=800&q=80",
  },
  {
    cat: "Signage",
    title: "Pylon Signage",
    img: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&q=80",
  },
  {
    cat: "Signage",
    title: "Acrylic Letter Sign",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
  {
    cat: "LED Boards",
    title: "3D LED Signage",
    img: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=800&q=80",
  },
  {
    cat: "LED Boards",
    title: "Neon Storefront",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
  {
    cat: "Corporate Gifts",
    title: "Branded Hampers",
    img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80",
  },
  {
    cat: "Corporate Gifts",
    title: "Premium Diaries",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  },
  {
    cat: "Vehicle Branding",
    title: "Car Wrap",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  },
  {
    cat: "Vehicle Branding",
    title: "Bus Branding",
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
  },
  {
    cat: "Industrial Labels",
    title: "SS Name Plate",
    img: "https://images.unsplash.com/photo-1581091215367-9b6c00b3039a?w=800&q=80",
  },
  {
    cat: "Industrial Labels",
    title: "Control Panel Stickers",
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80",
  },
  {
    cat: "Safety Boards",
    title: "Fire Safety Signage",
    img: "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=800&q=80",
  },
  {
    cat: "Safety Boards",
    title: "Warning Signs",
    img: "https://images.unsplash.com/photo-1542000551750-ddc44ab06afb?w=800&q=80",
  },
  {
    cat: "Packaging",
    title: "Custom Boxes",
    img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80",
  },
  {
    cat: "Packaging",
    title: "Product Labels",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
  {
    cat: "Office Branding",
    title: "Reception Wall",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    cat: "Shop Branding",
    title: "Retail Storefront",
    img: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=800&q=80",
  },
];

export function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active)),
    [active],
  );

  return (
    <div>
      <PageHero
        title="Our Work"
        subtitle="A glimpse into the printing, signage and branding projects we've delivered."
        breadcrumb={[{ label: "Gallery" }]}
      />
      <section className="py-10 container-page">
        <div className="flex flex-wrap gap-2 justify-center">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${active === c ? "gradient-brand text-white border-transparent shadow-brand" : "bg-white border-border hover:border-brand-red hover:text-brand-red"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((it, i) => (
            <div
              key={`${it.title}-${i}`}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-brand-light"
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition">
                <div className="text-[10px] uppercase tracking-widest text-brand-yellow font-bold">
                  {it.cat}
                </div>
                <div className="font-display font-bold">{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
