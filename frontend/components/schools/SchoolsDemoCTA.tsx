import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function SchoolsDemoCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-8 py-12 md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Ready to pilot Knowly?
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
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
