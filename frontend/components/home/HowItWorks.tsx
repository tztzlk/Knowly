import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const steps = [
  {
    title: "Discover",
    copy: "Students explore careers through interactive assessments and real role previews.",
  },
  {
    title: "Build",
    copy: "Project-based lessons build skills mapped to industry competencies.",
  },
  {
    title: "Prove",
    copy: "Shareable portfolios and mastery metrics make outcomes tangible.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      eyebrow="How it works"
      title="A structured journey from curiosity to capability"
      description="Knowly guides students step-by-step with AI support and educator oversight."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
              Step {index + 1}
            </span>
            <h3 className="mt-3 text-base font-semibold text-slate-900 md:text-lg">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
