import Link from "next/link";

import Container from "@/components/layout/Container";
import Logo from "@/components/shared/Logo";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-border bg-slate-900 text-white">
      <Container className="flex flex-col gap-10 py-14 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo variant="light" />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-1 py-0.5 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-slate-700/50 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Knowly. All rights reserved.</span>
          <span>Built for modern schools and ambitious learners.</span>
        </div>
      </Container>
    </footer>
  );
}
