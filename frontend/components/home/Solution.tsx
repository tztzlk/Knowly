import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const solutions = [
  {
    title: "AI-guided pathways",
    copy: "Adaptive learning plans align interests with real industry roles.",
  },
  {
    title: "Career-ready projects",
    copy: "Students build portfolios with authentic tasks from modern teams.",
  },
  {
    title: "School-ready insights",
    copy: "Dashboards show progress, engagement, and competency growth.",
  },
];

export default function Solution() {
  return (
    <Section
      eyebrow="The solution"
      title="Knowly connects learning to real career readiness"
      description="A single platform that unites discovery, skill-building, and proof of outcomes for students, schools, and families."
      className="bg-neutral-muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {solutions.map((item) => (
          <Card key={item.title}>
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
