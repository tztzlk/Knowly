import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

const variants = {
  primary:
    "bg-primary-600 text-white shadow-subtle hover:bg-primary-700 hover:shadow-cardHover focus-visible:outline-primary-500 active:scale-[0.98]",
  secondary:
    "bg-primary-50 text-primary-700 hover:bg-primary-100 focus-visible:outline-primary-500 active:scale-[0.98]",
  ghost:
    "bg-transparent text-slate-600 hover:bg-neutral-muted hover:text-slate-900 focus-visible:outline-slate-400",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
