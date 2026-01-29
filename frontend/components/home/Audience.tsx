import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const audiences = [
  {
    title: "Schools & districts",
    copy: "Deliver career readiness programs that scale without overloading staff.",
  },
  {
    title: "Students & families",
    copy: "Gain clarity, confidence, and job-ready skills through guided practice.",
  },
  {
    title: "Community partners",
    copy: "Showcase local industries and connect learners to real opportunities.",
  },
];

export default function Audience() {
  return (
    <Section
      eyebrow="Built for everyone"
      title="Designed for school systems and motivated learners"
      description="Knowly adapts to the needs of administrators, educators, and students alike."
      className="bg-neutral-muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {audiences.map((audience) => (
          <Card key={audience.title}>
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              {audience.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{audience.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
