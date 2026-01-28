import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-indigo-600 px-8 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Bring career readiness to every learner
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                Join the schools and students shaping the future of education.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="secondary">
                Book a demo
              </Button>
              <Button
                href="/students"
                variant="ghost"
                className="text-white hover:text-white"
              >
                Explore student plan
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
