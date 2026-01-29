import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const advantages = [
  {
    title: "Outcome-first design",
    copy: "Every pathway connects to measurable career skills and competencies.",
  },
  {
    title: "Human + AI balance",
    copy: "AI accelerates learning while educators stay in control.",
  },
  {
    title: "Scalable implementation",
    copy: "Deploy quickly across schools with minimal operational overhead.",
  },
];

export default function AboutAdvantages() {
  return (
    <Section
      eyebrow="Why Knowly"
      title="Competitive advantages built for scale"
      description="We combine pedagogical rigor with a modern product experience."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {advantages.map((advantage) => (
          <Card key={advantage.title}>
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              {advantage.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{advantage.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
