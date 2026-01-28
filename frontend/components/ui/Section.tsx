import { ReactNode } from "react";

import Container from "@/components/layout/Container";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section className={`py-16 ${className ?? ""}`}>
      <Container className="flex flex-col gap-10">
        <div className="max-w-2xl space-y-4">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="text-base text-slate-600 md:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
