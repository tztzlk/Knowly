import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function StudentsUpgradeCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white px-8 py-12 md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Ready to level up your skills?
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
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
