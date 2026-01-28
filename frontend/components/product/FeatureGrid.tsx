import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const features = [
  {
    title: "AI-guided coaching",
    copy: "Adaptive prompts and feedback help students progress with confidence.",
  },
  {
    title: "Localization-ready",
    copy: "Regional labor data and multilingual support keep content relevant.",
  },
  {
    title: "Educator controls",
    copy: "Assign pathways, monitor engagement, and intervene with ease.",
  },
  {
    title: "Evidence dashboards",
    copy: "Showcase skill mastery with measurable, exportable reports.",
  },
];

export default function FeatureGrid() {
  return (
    <Section
      eyebrow="Capabilities"
      title="Built for modern EdTech teams"
      description="Everything you need to deliver career readiness at scale."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <h3 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{feature.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
