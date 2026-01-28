import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function ContactPartnershipsCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-8 py-12 md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Interested in partnerships?
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                We collaborate with districts, nonprofits, and industry leaders.
              </p>
            </div>
            <Button href="/contact">Explore partnerships</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
