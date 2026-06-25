import { PageHero } from "@/components/PageHero";

const CLIENTS = [
  "Tata",
  "Bajaj",
  "Mahindra",
  "Bharat Forge",
  "Force Motors",
  "Kirloskar",
  "Persistent",
  "Cipla",
  "Bisleri",
  "Cummins",
  "Volkswagen",
  "JCB",
  "Godrej",
  "Atlas Copco",
  "SKF",
  "Praj",
  "Thermax",
  "Forbes Marshall",
  "Finolex",
  "Endurance",
  "KSB",
  "Mercedes",
  "Renault",
  "Suzlon",
];

const TESTIMONIALS = [
  {
    n: "Rajesh K.",
    c: "Procurement Head, Manufacturing",
    t: "Shivrudra's industrial name plates have been spot-on for the last 3 years. Quality and timing both reliable.",
  },
  {
    n: "Priya S.",
    c: "Marketing Lead, Retail Chain",
    t: "Their LED signage transformed our store fronts. Installation team was super professional.",
  },
  {
    n: "Amit P.",
    c: "Director, Pharma Company",
    t: "From packaging labels to safety signage, one-stop solution. Highly recommend.",
  },
];

export function ClientsPage() {
  return (
    <div>
      <PageHero
        title="Our Clients"
        subtitle="500+ brands across industries trust Shivrudra for their printing and signage needs."
        breadcrumb={[{ label: "Clients" }]}
      />
      <section className="py-16 container-page">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {CLIENTS.map((c) => (
            <div
              key={c}
              className="aspect-[3/2] grid place-items-center rounded-xl bg-white border border-border hover:border-brand-red transition shadow-soft p-4 text-center"
            >
              <div className="font-display font-black text-brand-dark/70 hover:text-brand-red transition">
                {c}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-brand-light">
        <div className="container-page">
          <h2 className="font-display font-black text-3xl text-center">What clients say</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.n} className="p-6 rounded-2xl bg-white border border-border shadow-soft">
                <div className="text-brand-yellow text-2xl">★★★★★</div>
                <p className="mt-3 text-sm leading-relaxed">"{t.t}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-display font-bold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
