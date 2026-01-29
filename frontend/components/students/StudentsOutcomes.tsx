import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const outcomes = [
  {
    title: "Career clarity",
    copy: "Understand which roles and industries fit your future plans.",
  },
  {
    title: "Skill mastery",
    copy: "Practice real tasks that build confidence and competence.",
  },
  {
    title: "Portfolio-ready work",
    copy: "Produce artifacts that demonstrate your growth to mentors and employers.",
  },
];

export default function StudentsOutcomes() {
  return (
    <Section
      eyebrow="Outcomes"
      title="Build proof you are ready for what comes next"
      description="Knowly makes your progress visible and meaningful."
      className="bg-neutral-muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {outcomes.map((outcome) => (
          <Card key={outcome.title}>
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              {outcome.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{outcome.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
