"use client";

import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Logo from "@/components/shared/Logo";

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

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
          <Link
            href="/students/profile"
            className="inline-flex items-center gap-2 rounded-md px-2.5 py-2 text-slate-600 transition-colors duration-200 hover:bg-neutral-muted hover:text-slate-900 active:bg-neutral-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            aria-label="Profile"
          >
            <ProfileIcon className="h-5 w-5 shrink-0" />
            <span className="hidden text-sm font-medium sm:inline">Profile</span>
          </Link>
          <Button variant="ghost" href="/contact" className="hidden md:inline-flex">
            Talk to us
          </Button>
          <Button href="/contact">Get Early Access</Button>
        </div>
      </Container>
    </header>
  );
}
