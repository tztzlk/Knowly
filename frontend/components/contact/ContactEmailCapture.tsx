import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ContactEmailCapture() {
  return (
    <Section
      eyebrow="Stay updated"
      title="Get product updates and launch news"
      description="Join our list for release notes, pilot opportunities, and new features."
      className="bg-slate-50"
    >
      <form className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
        <input
          type="email"
          name="newsletter"
          placeholder="you@school.edu"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        <Button>Subscribe</Button>
      </form>
    </Section>
  );
}
