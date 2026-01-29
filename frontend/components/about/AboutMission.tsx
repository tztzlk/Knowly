import Section from "@/components/ui/Section";

export default function AboutMission() {
  return (
    <Section
      eyebrow="Mission"
      title="Make career readiness accessible for every student"
      description="We believe every learner deserves clarity, confidence, and the skills to thrive in real careers."
    >
      <div className="rounded-card border border-neutral-border bg-white p-6 shadow-card">
        <p className="text-base leading-relaxed text-slate-600">
          Knowly bridges the gap between education and employment by delivering
          practical, inclusive learning experiences supported by AI.
        </p>
      </div>
    </Section>
  );
}
