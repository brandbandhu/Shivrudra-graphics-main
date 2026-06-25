import { ArrowRight, MessageCircle, PackageCheck, ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CONTACT } from "@/data/site";
import { findProductBySlug } from "@/lib/products";
import { Link } from "@/components/AppLink";

const VARIANTS = [
  {
    label: "Standard",
    detail: "Balanced quality for everyday requirements",
    colors: "from-white via-[#f7f7f7] to-[#ffe9e9]",
  },
  {
    label: "Premium",
    detail: "Higher finish for brand-facing use",
    colors: "from-[#fff7d1] via-white to-[#ffe2df]",
  },
  {
    label: "Custom Size",
    detail: "Made to match your exact space or artwork",
    colors: "from-white via-[#eef4ff] to-[#ffe8e2]",
  },
  {
    label: "Bulk Order",
    detail: "Planned production for larger quantities",
    colors: "from-[#fff3cf] via-white to-[#e9f7ee]",
  },
];

export function ProductNotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-black">Product not found</h1>
      <Link to="/services" className="mt-4 inline-block font-bold text-brand-red">
        Back to services
      </Link>
    </div>
  );
}

export function ProductDetailPage({ productSlug }: { productSlug: string }) {
  const product = findProductBySlug(productSlug);
  if (!product) return <ProductNotFound />;

  return (
    <div>
      <PageHero
        title={product.name}
        subtitle="Choose a product type to discuss on WhatsApp."
        breadcrumb={[
          { label: "Services", to: "/services" },
          { label: product.serviceName, to: `/services/${product.serviceSlug}` },
          { label: product.name },
        ]}
      />

      <section className="container-page py-14 md:py-18">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <h2 className="font-display text-4xl font-black leading-tight text-brand-dark md:text-6xl">
            Choose a product type to discuss on WhatsApp.
          </h2>
          <Link
            to="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-border bg-white px-5 py-3 font-bold text-brand-dark shadow-soft transition hover:border-brand-red hover:text-brand-red"
          >
            Order Details <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VARIANTS.map((variant) => {
            const title = `${variant.label} ${product.name}`;
            const message = `Hi, I want to enquire about ${title}.`;

            return (
              <article key={variant.label} className="group">
                <div
                  className={`relative aspect-[1.08] overflow-hidden rounded-lg border border-border bg-gradient-to-br ${variant.colors} shadow-soft`}
                >
                  <div className="absolute left-6 top-6 h-14 w-14 rounded-full bg-brand-yellow/70 blur-2xl" />
                  <div className="absolute bottom-0 right-0 h-28 w-28 rounded-tl-full bg-brand-red/10" />
                  <div className="absolute inset-6 flex flex-col items-center justify-center rounded-lg border border-white/80 bg-white/55 p-5 text-center">
                    <div className="grid h-20 w-20 place-items-center rounded-2xl gradient-brand text-white shadow-brand transition group-hover:scale-105">
                      <PackageCheck className="h-9 w-9" />
                    </div>
                    <div className="mt-4 font-display text-xl font-black text-brand-dark">
                      {variant.label}
                    </div>
                    <p className="mt-2 text-xs font-medium text-muted-foreground">
                      {variant.detail}
                    </p>
                  </div>
                  <div className="absolute left-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white text-brand-red shadow-soft">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-black leading-tight text-brand-dark">
                    {title}
                  </h3>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`}
                    className="mt-1 inline-flex items-center gap-1.5 font-bold text-brand-red transition hover:text-brand-maroon"
                  >
                    Enquire <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
