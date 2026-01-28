import Section from "@/components/ui/Section";

export default function SchoolsPricing() {
  return (
    <Section
      eyebrow="Pricing"
      title="Simple per-student pricing that scales"
      description="Flexible tiers that align with district budgets and implementation timelines."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Core plan</h3>
          <p className="mt-3 text-sm text-slate-600">
            Career exploration, AI guidance, and progress dashboards.
          </p>
          <p className="mt-6 text-2xl font-semibold text-slate-900">
            $12 <span className="text-base font-medium text-slate-500">/ student / month</span>
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">District plan</h3>
          <p className="mt-3 text-sm text-slate-600">
            Includes onboarding, analytics exports, and strategic partner support.
          </p>
          <p className="mt-6 text-2xl font-semibold text-slate-900">
            Custom <span className="text-base font-medium text-slate-500">/ annual</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
