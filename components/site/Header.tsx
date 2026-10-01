"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/site/Logo";
import { CitySelector } from "@/components/site/CitySelector";
import { CityAwareCta } from "@/components/site/CityAwareCta";
import { navLinks } from "@/data/nav";

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
        <Link href="/#top" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-text hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <CitySelector />
          <CityAwareCta location="header" size="md" />
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <CitySelector />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal xl:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-border bg-white xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-text hover:bg-teal-light hover:text-teal-dark"
              >
                {link.label}
              </Link>
            ))}
            <CityAwareCta
              location="mobile_menu"
              className="mt-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
