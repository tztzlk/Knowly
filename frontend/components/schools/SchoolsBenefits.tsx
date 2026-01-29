import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const benefits = [
  {
    title: "Equitable access",
    copy: "Career readiness programs reach every student, not just the motivated few.",
  },
  {
    title: "Improved outcomes",
    copy: "Measure skill growth and pathway completion with real-time insights.",
  },
  {
    title: "Easy adoption",
    copy: "Launch quickly with educator dashboards and turnkey content.",
  },
];

export default function SchoolsBenefits() {
  return (
    <Section
      eyebrow="Benefits"
      title="Built for district-wide impact"
      description="Give educators the tools they need while keeping leadership informed."
      className="bg-neutral-muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              {benefit.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{benefit.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
