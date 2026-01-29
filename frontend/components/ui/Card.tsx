import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-card border border-neutral-border bg-white p-6 shadow-card transition-all duration-200 hover:border-neutral-border/80 hover:shadow-cardHover ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
