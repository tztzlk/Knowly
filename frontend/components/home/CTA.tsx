import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-section md:py-sectionLg">
      <Container>
        <div className="rounded-cardLg bg-primary-600 px-6 py-10 text-white shadow-cardHover md:px-10 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
                Bring career readiness to every learner
              </h2>
              <p className="text-base text-primary-100 md:text-lg">
                Join the schools and students shaping the future of education.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                href="/quiz"
                variant="secondary"
                className="bg-white text-primary-700 shadow-subtle hover:bg-primary-50 hover:text-primary-800"
              >
                Take the Career Quiz
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                className="text-primary-100 hover:bg-white/10 hover:text-white"
              >
                Book a demo
              </Button>
              <Button
                href="/students"
                variant="ghost"
                className="text-primary-100 hover:bg-white/10 hover:text-white"
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
