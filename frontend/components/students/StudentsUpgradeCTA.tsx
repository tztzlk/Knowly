import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function StudentsUpgradeCTA() {
  return (
    <section className="py-section md:py-sectionLg">
      <Container>
        <div className="rounded-cardLg border border-neutral-border bg-white px-6 py-10 shadow-card md:px-10 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Ready to level up your skills?
              </h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Upgrade for full access to AI coaching, pathways, and portfolio tools.
              </p>
            </div>
            <Button href="/contact">Upgrade to Pro</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
