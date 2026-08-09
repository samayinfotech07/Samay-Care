"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/site/Logo";
import { navLinks } from "@/data/nav";
import { track } from "@/lib/analytics";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow ${
        isScrolled ? "shadow-[0_1px_0_rgba(16,43,58,0.08)]" : ""
      }`}
    >
      <Container className="flex items-center justify-between py-3.5">
        <a href="#top" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="#prelaunch-form"
            size="md"
            onClick={() => track("hero_notify_click", { location: "header" })}
          >
            Notify Me
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-text hover:bg-teal-light hover:text-teal-dark"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#prelaunch-form"
              className="mt-2 w-full"
              onClick={() => {
                setIsMenuOpen(false);
                track("hero_notify_click", { location: "mobile_menu" });
              }}
            >
              Notify Me
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
