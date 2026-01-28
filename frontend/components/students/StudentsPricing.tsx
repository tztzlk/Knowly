import Section from "@/components/ui/Section";

export default function StudentsPricing() {
  return (
    <Section
      eyebrow="Pricing"
      title="Start free, upgrade when you are ready"
      description="A freemium model designed to meet students where they are."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Free plan</h3>
          <p className="mt-3 text-sm text-slate-600">
            Career assessments, starter projects, and community support.
          </p>
          <p className="mt-6 text-2xl font-semibold text-slate-900">$0</p>
        </div>
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Pro plan</h3>
          <p className="mt-3 text-sm text-slate-600">
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
