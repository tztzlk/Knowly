import Section from "@/components/ui/Section";

export default function AISection() {
  return (
    <Section
      eyebrow="AI guidance"
      title="Personalized support for every learner"
      description="Knowly adapts to each student with personalized prompts, real-time feedback, and targeted skill reinforcement."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Smart recommendations",
            copy: "AI suggests projects and pathways based on progress and interests.",
          },
          {
            title: "Actionable feedback",
            copy: "Students receive guidance that builds confidence and clarity.",
          },
          {
            title: "Safe & explainable",
            copy: "Educators stay in control with transparent logic and oversight.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
