import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-slate-900";

  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${textColor}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-semibold text-white">
        K
      </span>
      <span className="text-lg font-semibold tracking-tight">Knowly</span>
    </Link>
  );
}
