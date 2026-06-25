import { PageHero } from "@/components/PageHero";
import { INDUSTRIES } from "@/data/site";
import { Briefcase } from "lucide-react";

export function IndustriesPage() {
  return (
    <div>
      <PageHero
        title="Industries We Serve"
        subtitle="Branding, printing and signage solutions trusted across every sector."
        breadcrumb={[{ label: "Industries" }]}
      />
      <section className="py-16 container-page">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((i, idx) => (
            <div
              key={i}
              className="group p-5 rounded-2xl bg-white border border-border shadow-soft hover:border-brand-red hover:-translate-y-1 transition text-center"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl gradient-accent group-hover:gradient-brand transition">
                <Briefcase className="h-5 w-5 text-brand-dark group-hover:text-white transition" />
              </div>
              <div className="mt-4 font-display font-bold text-sm">{i}</div>
              <div className="text-xs text-muted-foreground mt-1">
                #{String(idx + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
