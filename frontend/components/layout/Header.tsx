import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Logo from "@/components/shared/Logo";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
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
