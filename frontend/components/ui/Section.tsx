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
    <section className={`py-section md:py-sectionLg ${className ?? ""}`}>
      <Container className="flex flex-col gap-10">
        <div className="max-w-2xl space-y-4">
          {eyebrow ? (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
