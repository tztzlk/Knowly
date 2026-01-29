import Section from "@/components/ui/Section";

export default function AboutVision() {
  return (
    <Section
      eyebrow="Vision"
      title="A future where learning equals opportunity"
      description="We envision a world where students graduate with real skills, not just credits."
      className="bg-neutral-muted"
    >
      <div className="rounded-card border border-neutral-border bg-white p-6 shadow-card">
        <p className="text-base leading-relaxed text-slate-600">
          Our platform aligns education with industry needs, helping schools
          deliver measurable career outcomes at scale.
        </p>
      </div>
    </Section>
  );
}
