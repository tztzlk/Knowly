import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function StudentsNextPage() {
  return (
    <div className="min-h-[60vh] py-section md:py-sectionLg">
      <Container className="max-w-xl text-center">
        <div className="rounded-card border border-neutral-border bg-white p-8 shadow-card">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
            Profile saved
          </h1>
          <p className="mt-2 text-slate-600">
            Thanks for sharing. We&apos;ll use this to personalize your experience in the next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/students">Back to Students</Button>
            <Button href="/" variant="secondary">
              Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
