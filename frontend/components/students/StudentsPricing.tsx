import Section from "@/components/ui/Section";

export default function StudentsPricing() {
  return (
    <Section
      eyebrow="Pricing"
      title="Start free, upgrade when you are ready"
      description="A freemium model designed to meet students where they are."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-card border border-neutral-border bg-white p-6 shadow-card transition-all duration-200 hover:shadow-cardHover">
          <h3 className="text-base font-semibold text-slate-900 md:text-lg">Free plan</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Career assessments, starter projects, and community support.
          </p>
          <p className="mt-6 text-2xl font-semibold text-slate-900">$0</p>
        </div>
        <div className="rounded-card border border-primary-200 bg-primary-50 p-6 shadow-card transition-all duration-200 hover:shadow-cardHover">
          <h3 className="text-base font-semibold text-slate-900 md:text-lg">Pro plan</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Full pathways, AI coaching, and portfolio publishing.
          </p>
          <p className="mt-6 text-2xl font-semibold text-slate-900">
            $9 <span className="text-base font-medium text-slate-500">/ month</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
