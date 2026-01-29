import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="py-section md:py-sectionLg">
      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex w-fit items-center rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
            AI-powered career readiness
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Learn Skills That Lead to Real Careers
          </h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg lg:text-xl">
            Knowly is an AI-powered education platform helping students explore
            careers and gain practical, job-ready skills.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact">Get Early Access</Button>
            <Button variant="secondary" href="/schools">
              For Schools
            </Button>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Guided career discovery",
              copy: "Personalized pathways that align student strengths with in-demand roles.",
            },
            {
              title: "Practice-based learning",
              copy: "Real projects and simulations that mirror real-world work.",
            },
            {
              title: "Evidence for outcomes",
              copy: "Track skill mastery and readiness with shareable progress reports.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-neutral-border bg-white p-6 shadow-card transition-all duration-200 hover:shadow-cardHover"
            >
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
