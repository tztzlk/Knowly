import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function SchoolsDemoCTA() {
  return (
    <section className="py-section md:py-sectionLg">
      <Container>
        <div className="rounded-cardLg border border-primary-100 bg-primary-50 px-6 py-10 md:px-10 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Ready to pilot Knowly?
              </h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Launch a district-wide demo tailored to your student population.
              </p>
            </div>
            <Button href="/contact">Schedule a demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
