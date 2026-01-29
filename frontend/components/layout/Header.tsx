import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Logo from "@/components/shared/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-borderLight bg-white/90 shadow-subtle backdrop-blur-md">
      <Container className="flex items-center justify-between py-4 md:py-5">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1.5 text-slate-600 transition-colors duration-200 hover:bg-neutral-muted hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" href="/contact" className="hidden md:inline-flex">
            Talk to us
          </Button>
          <Button href="/product">Get early access</Button>
        </div>
      </Container>
    </header>
  );
}
