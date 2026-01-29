import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const problems = [
  {
    title: "Unclear career pathways",
    copy: "Students struggle to connect coursework with real career options and skills.",
  },
  {
    title: "Limited real-world practice",
    copy: "Traditional curricula rarely provide hands-on, job-relevant learning.",
  },
  {
    title: "Fragmented guidance",
    copy: "Advisors and parents lack actionable data to support student decisions.",
  },
];

export default function Problem() {
  return (
    <Section
      eyebrow="The gap"
      title="Education rarely translates into career confidence"
      description="Schools need a structured, engaging way to help students explore careers, build job-ready skills, and prove outcomes."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {problems.map((problem) => (
          <Card key={problem.title}>
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">{problem.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{problem.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
