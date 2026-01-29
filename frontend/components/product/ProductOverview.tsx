import Section from "@/components/ui/Section";

export default function ProductOverview() {
  return (
    <Section
      eyebrow="Product"
      title="A unified platform for career exploration and skills growth"
      description="Knowly blends AI guidance, practice-based learning, and real-time insights to turn learning into outcomes."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-card border border-neutral-border bg-white p-6 shadow-card transition-all duration-200 hover:shadow-cardHover">
          <h3 className="text-base font-semibold text-slate-900 md:text-lg">
            Career exploration
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Students explore careers through role previews, interest mapping, and
            personalized pathways.
          </p>
        </div>
        <div className="rounded-card border border-neutral-border bg-white p-6 shadow-card transition-all duration-200 hover:shadow-cardHover">
          <h3 className="text-base font-semibold text-slate-900 md:text-lg">
            Practice-based learning
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Real-world projects build durable skills while portfolios showcase
            growth.
          </p>
        </div>
      </div>
    </Section>
  );
}
