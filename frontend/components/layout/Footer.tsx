import Link from "next/link";

import Container from "@/components/layout/Container";
import Logo from "@/components/shared/Logo";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-950 text-white">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo variant="light" />
          <nav className="flex flex-wrap gap-6 text-sm text-slate-300">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Knowly. All rights reserved.</span>
          <span>Built for modern schools and ambitious learners.</span>
        </div>
      </Container>
    </footer>
  );
}
