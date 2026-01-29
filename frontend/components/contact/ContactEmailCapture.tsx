import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ContactEmailCapture() {
  return (
    <Section
      eyebrow="Stay updated"
      title="Get product updates and launch news"
      description="Join our list for release notes, pilot opportunities, and new features."
      className="bg-neutral-muted"
    >
      <form className="flex flex-col gap-4 rounded-card border border-neutral-border bg-white p-6 shadow-card md:flex-row md:items-center">
        <input
          type="email"
          name="newsletter"
          placeholder="you@school.edu"
          className="w-full rounded-input border border-neutral-border bg-white px-4 py-2.5 text-sm text-slate-800 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
        <Button>Subscribe</Button>
      </form>
    </Section>
  );
}
