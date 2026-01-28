import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const flowSteps = [
  {
    title: "Onboard students",
    copy: "Quick diagnostics personalize the starting point for every learner.",
  },
  {
    title: "Launch pathways",
    copy: "Curated modules build skills tied to real industry roles.",
  },
  {
    title: "Track outcomes",
    copy: "Insights show mastery, engagement, and readiness milestones.",
  },
];

export default function UserFlow() {
  return (
    <Section
      eyebrow="User flow"
      title="From enrollment to outcomes in three steps"
      description="A streamlined experience that keeps students, teachers, and admins aligned."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {flowSteps.map((step, index) => (
          <Card key={step.title}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Phase {index + 1}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{step.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
