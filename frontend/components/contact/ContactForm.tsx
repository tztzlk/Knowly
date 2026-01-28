import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <Section
      eyebrow="Contact"
      title="Start a conversation with our team"
      description="Tell us about your school, district, or partnership goals."
    >
      <form className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Alex Johnson"
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="alex@school.edu"
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="organization" className="text-sm font-medium text-slate-700">
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            placeholder="Riverview School District"
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Share your goals, timeline, or questions."
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="md:col-span-2">
          <Button>Submit request</Button>
        </div>
      </form>
    </Section>
  );
}
