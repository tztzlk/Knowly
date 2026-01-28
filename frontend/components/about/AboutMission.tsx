import Section from "@/components/ui/Section";

export default function AboutMission() {
  return (
    <Section
      eyebrow="Mission"
      title="Make career readiness accessible for every student"
      description="We believe every learner deserves clarity, confidence, and the skills to thrive in real careers."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-base text-slate-600">
          Knowly bridges the gap between education and employment by delivering
          practical, inclusive learning experiences supported by AI.
        </p>
      </div>
    </Section>
  );
}
