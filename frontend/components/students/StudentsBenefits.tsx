import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const benefits = [
  {
    title: "Clear career direction",
    copy: "Explore roles that match your interests, strengths, and goals.",
  },
  {
    title: "Hands-on practice",
    copy: "Build real-world projects that translate into job-ready skills.",
  },
  {
    title: "Shareable proof",
    copy: "Show your progress with portfolios you can use for internships.",
  },
];

export default function StudentsBenefits() {
  return (
    <Section
      eyebrow="For students"
      title="Career readiness built around you"
      description="Knowly empowers learners to build confidence, skills, and momentum."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <h3 className="text-lg font-semibold text-slate-900">
              {benefit.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{benefit.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
