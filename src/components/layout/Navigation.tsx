"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Hamburger, X, ForkKnife } from "@phosphor-icons/react";
import { navItems } from "@/data/navigation";
import { brand } from "@/lib/brand";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mounted = typeof window !== "undefined";

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 lg:h-20" aria-label="Main navigation">
        <div className="container h-full flex items-center justify-between" />
      </header>
    );
  }

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 transition-all duration-300 ease-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="container h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 z-10"
          aria-label={`${brand.name} - Home`}
        >
          <ForkKnife className="h-6 w-6 text-accent" aria-hidden="true" />
          <span className="font-display text-xl lg:text-2xl font-medium tracking-tight text-foreground">
            {brand.name}
          </span>
        </Link>

        <nav
          className={clsx(
            "fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/98 backdrop-blur-lg",
            "lg:static lg:flex-row lg:items-center lg:justify-end lg:bg-transparent lg:gap-10 lg:py-0",
            isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
          )}
          role="navigation"
          aria-label="Main menu"
        >
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link text-lg lg:text-base"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="lg:hidden">
              <div className="editorial-divider w-full my-4" />
            </li>
            <li>
              <Link
                href="#reservations"
                className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 ease-out rounded-full will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-[0.97] bg-accent text-bone shadow-[0_4px_20px_-6px_rgba(184,71,47,0.4)] hover:bg-accent-hover hover:shadow-[0_8px_30px_-8px_rgba(184,71,47,0.5)] text-sm lg:text-base px-6 py-3"
                onClick={() => setIsMobileOpen(false)}
              >
                Book a Table
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="#reservations"
            className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 ease-out rounded-full will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-[0.97] bg-accent text-bone shadow-[0_4px_20px_-6px_rgba(184,71,47,0.4)] hover:bg-accent-hover hover:shadow-[0_8px_30px_-8px_rgba(184,71,47,0.5)] text-sm px-4 py-2"
          >
            Book
          </Link>
          <button
            className="p-2 -mr-1 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Hamburger className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}