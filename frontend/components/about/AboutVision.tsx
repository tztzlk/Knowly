import Section from "@/components/ui/Section";

export default function AboutVision() {
  return (
    <Section
      eyebrow="Vision"
      title="A future where learning equals opportunity"
      description="We envision a world where students graduate with real skills, not just credits."
      className="bg-slate-50"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-base text-slate-600">
          Our platform aligns education with industry needs, helping schools
          deliver measurable career outcomes at scale.
        </p>
      </div>
    </Section>
  );
}
