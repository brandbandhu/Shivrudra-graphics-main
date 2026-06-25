import {
  BadgeCheck,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Award,
  Truck,
  Users,
  CheckCircle2,
  Printer,
  Factory,
  Building2,
  Lightbulb,
  Signpost,
  Package,
  Gift,
  Car,
  ShieldAlert,
  Monitor,
  Layers,
} from "lucide-react";
import {
  SERVICES,
  CATEGORIES,
  INDUSTRIES,
  PROCESS_STEPS,
  WHY_CHOOSE,
  TIMELINE,
  CONTACT,
  SITE_TAGLINE,
} from "@/data/site";
import { Link } from "@/components/AppLink";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer,
  Factory,
  Building2,
  Lightbulb,
  Signpost,
  Package,
  Gift,
  Car,
  ShieldAlert,
  Monitor,
  Layers,
  Sparkles,
};

export function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#fff4d5]">
        <div className="relative min-h-[620px] md:min-h-[560px] xl:min-h-[640px]">
          <img
            src="/images/shivrudra-printing-banner.png"
            alt="Shivrudra Graphics printing, signage and branding studio"
            className="absolute inset-0 h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff4d5]/20 to-[#fff4d5]/92" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff4d5]/70 via-transparent to-[#fff4d5]/70 md:hidden" />

          <div className="relative flex min-h-[620px] w-full items-center justify-end px-4 py-14 sm:px-8 md:min-h-[560px] md:px-7 md:py-16 lg:px-8 xl:min-h-[640px] xl:px-10 2xl:px-12">
            <div className="w-full max-w-[560px] animate-fade-up rounded-2xl bg-[#fff4d5]/82 p-5 shadow-soft backdrop-blur-sm sm:p-7 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0 xl:max-w-[600px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/75 border border-brand-yellow px-3 py-1.5 text-xs font-bold text-brand-dark mb-5 shadow-soft">
                <BadgeCheck className="h-4 w-4 text-brand-red" />
                ISO 9001:2015 Certified Company
              </div>
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-brand-dark">
                Shivrudra <span className="text-gradient-brand">Graphics</span>
                <span className="block text-brand-dark">Pvt Ltd</span>
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-lg md:text-xl font-bold">
                <span className="text-brand-red">Designing</span>
                <span className="text-brand-dark/40">|</span>
                <span className="text-brand-red">Printing</span>
                <span className="text-brand-dark/40">|</span>
                <span className="text-brand-red">Branding</span>
              </div>
              <p className="mt-4 text-brand-dark/75 text-base md:text-lg max-w-xl">
                {SITE_TAGLINE} in Pune.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full gradient-brand text-white px-6 py-3.5 font-semibold shadow-brand hover:scale-105 transition"
                >
                  Explore Services <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 font-semibold shadow-soft hover:scale-105 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Marquee */}
        <div className="border-y border-border bg-brand-dark text-white py-3 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                {[
                  "Commercial Printing",
                  "LED Sign Boards",
                  "Vehicle Branding",
                  "Corporate Gifts",
                  "Industrial Name Plates",
                  "Safety Signages",
                  "Offset Printing",
                  "UV Printing",
                  "Vinyl Branding",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4 text-brand-yellow" /> {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Browse Categories"
            title="What we craft"
            desc="Explore our complete range of printing, signage and branding categories."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((c, i) => {
              const Icon = CATEGORY_ICONS[c.icon] ?? Sparkles;
              return (
                <Link
                  key={c.slug}
                  to="/categories"
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 hover:border-brand-red hover:-translate-y-1 transition shadow-soft"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="absolute inset-0 gradient-brand opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-light group-hover:bg-white/20 transition">
                      <Icon className="h-6 w-6 text-brand-red group-hover:text-white transition" />
                    </div>
                    <div className="mt-4 font-display font-bold text-brand-dark group-hover:text-white transition">
                      {c.name}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground group-hover:text-white/80 transition">
                      Explore →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-brand-light">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold tracking-widest text-brand-red uppercase">
              About Shivrudra
            </div>
            <h2 className="mt-2 font-display font-black text-3xl md:text-4xl">
              A printing & signage partner you can trust
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Shivrudra Graphics Pvt Ltd was originally founded in 2014 at Kesnand & Kolwadi and is
              now situated in Pune, Maharashtra. The company specializes in {SITE_TAGLINE},
              Designing, Printing, Branding and In-Shop Branding Solutions.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We provide complete signage solutions from concept and design to manufacturing and
              installation — with optimum quality, competitive pricing and total customer
              satisfaction.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow/40 border border-brand-yellow px-4 py-2 text-sm font-bold">
              <BadgeCheck className="h-4 w-4 text-brand-red" /> ISO 9001:2015 Certified Company
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { n: "Aadesh C. Nimbalkar", r: "Director" },
                { n: "Akshay N. Kalbhor", r: "Director" },
              ].map((d) => (
                <div key={d.n} className="p-4 rounded-xl bg-white border border-border">
                  <div className="text-xs text-brand-red font-bold">{d.r}</div>
                  <div className="font-display font-bold mt-1">{d.n}</div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-red"
            >
              Read more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { i: Users, t: "Skilled Team", d: "Experienced professionals" },
              { i: Award, t: "Premium Quality", d: "Best in class output" },
              { i: Truck, t: "On-Time Delivery", d: "Reliable timelines" },
              { i: Sparkles, t: "Creative Edge", d: "Unique design approach" },
            ].map((b) => (
              <div
                key={b.t}
                className="p-6 rounded-2xl bg-white border border-border shadow-soft hover:border-brand-red transition"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-accent">
                  <b.i className="h-5 w-5 text-brand-dark" />
                </div>
                <div className="mt-4 font-display font-bold">{b.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeader eyebrow="Our Principles" title="Vision, Mission & Values" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Vision",
                d: "To provide all types of graphics solutions to increase the growth of clients and build inclusive partnerships based on trust and mutual respect.",
              },
              {
                t: "Mission",
                d: "To become the most valued business partner for clients and help them grow their business.",
              },
              {
                t: "Values",
                d: "Integrity, Innovation, Teamwork, Environment-Friendly Approach, Respect for People.",
              },
            ].map((v, i) => (
              <div
                key={v.t}
                className={`relative overflow-hidden rounded-2xl p-8 ${i === 1 ? "gradient-brand text-white" : "bg-white border border-border"} shadow-soft`}
              >
                <div
                  className={`text-xs font-bold tracking-widest uppercase ${i === 1 ? "text-brand-yellow" : "text-brand-red"}`}
                >
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display font-black text-2xl">{v.t}</h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${i === 1 ? "text-white/90" : "text-muted-foreground"}`}
                >
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 bg-brand-red/20 blur-3xl rounded-full" />
        <div className="container-page relative">
          <SectionHeader
            eyebrow="Our Journey"
            title="From a passion project to a Pvt Ltd company"
            light
          />
          <div className="mt-14 grid md:grid-cols-4 gap-6 relative">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className="relative">
                <div className="text-brand-yellow font-display font-black text-4xl">{t.year}</div>
                <div className="my-3 h-1 w-12 bg-brand-red rounded-full" />
                <div className="font-display font-bold text-lg">{t.title}</div>
                <p className="mt-2 text-sm text-white/70">{t.desc}</p>
                {i < TIMELINE.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-full -translate-x-1/2 h-px w-full border-t-2 border-dashed border-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeader eyebrow="Why Shivrudra" title="12 reasons clients pick us, every time" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_CHOOSE.map((w, i) => (
              <div
                key={w}
                className="flex items-start gap-3 p-5 rounded-xl bg-white border border-border hover:border-brand-red hover:shadow-soft transition"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full gradient-brand text-white text-sm font-bold">
                  {i + 1}
                </div>
                <div className="font-semibold text-sm">{w}</div>
                <CheckCircle2 className="ml-auto h-5 w-5 text-brand-red shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-brand-light">
        <div className="container-page">
          <SectionHeader
            eyebrow="Work Process"
            title="A streamlined 10-step journey"
            desc="From the first call to final installation, here's how we deliver."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((s, i) => (
              <div
                key={s}
                className="relative p-5 rounded-xl bg-white border border-border text-center hover:-translate-y-1 transition"
              >
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full gradient-accent text-brand-dark font-display font-black">
                  {i + 1}
                </div>
                <div className="mt-3 font-semibold text-sm">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-end printing & signage"
            desc="Premium services across designing, printing, branding and signage."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 9).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 hover:border-brand-red transition shadow-soft"
              >
                <div className="absolute top-0 right-0 h-24 w-24 gradient-brand opacity-5 rounded-bl-full group-hover:opacity-20 transition" />
                <div className="font-display font-bold text-lg group-hover:text-brand-red transition">
                  {s.name}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.subs.slice(0, 3).map((sub) => (
                    <span
                      key={sub}
                      className="text-[11px] font-medium bg-brand-light px-2 py-0.5 rounded-full"
                    >
                      {sub}
                    </span>
                  ))}
                  {s.subs.length > 3 && (
                    <span className="text-[11px] font-medium text-brand-red">
                      +{s.subs.length - 3} more
                    </span>
                  )}
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red">
                  View Details{" "}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full gradient-brand text-white px-6 py-3 font-semibold shadow-brand"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-brand-light">
        <div className="container-page">
          <SectionHeader eyebrow="Industries We Serve" title="Trusted across every sector" />
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {INDUSTRIES.map((i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium hover:bg-brand-red hover:text-white hover:border-brand-red transition cursor-default"
              >
                {i}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/industries"
              className="font-semibold text-brand-red inline-flex items-center gap-2"
            >
              See full list <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl gradient-brand text-white p-10 md:p-16 text-center shadow-brand">
            <div
              className="absolute top-0 left-0 h-full w-full opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold mb-5">
                <BadgeCheck className="h-4 w-4 text-brand-yellow" /> ISO 9001:2015 Certified
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl max-w-3xl mx-auto">
                Have a printing or signage project in mind?
              </h2>
              <p className="mt-4 text-white/90 max-w-xl mx-auto">
                Talk to our team — we'll respond within hours with a tailored quote.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand-red px-6 py-3.5 font-bold shadow-soft hover:scale-105 transition"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-dark px-6 py-3.5 font-bold shadow-soft hover:scale-105 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
  light,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div
        className={`text-xs font-bold tracking-widest uppercase ${light ? "text-brand-yellow" : "text-brand-red"}`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-2 font-display font-black text-3xl md:text-4xl ${light ? "text-white" : "text-brand-dark"}`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-3 ${light ? "text-white/70" : "text-muted-foreground"}`}>{desc}</p>
      )}
    </div>
  );
}
