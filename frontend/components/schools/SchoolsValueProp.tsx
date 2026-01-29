import Section from "@/components/ui/Section";

export default function SchoolsValueProp() {
  return (
    <Section
      eyebrow="For schools"
      title="Deliver career readiness without adding staff burden"
      description="Knowly gives districts a scalable pathway to launch career exploration and skills practice across every grade level."
    >
      <div className="rounded-card border border-neutral-border bg-white p-6 shadow-card">
        <h3 className="text-base font-semibold text-slate-900 md:text-lg">
          A modern partner for CTE and counseling teams
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Centralized analytics, curriculum-aligned content, and AI support make
          it easy to deliver consistent outcomes at scale.
        </p>
      </div>
    </Section>
  );
}
