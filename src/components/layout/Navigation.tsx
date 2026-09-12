"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { List, X } from "@phosphor-icons/react";
import { navItems } from "@/data/navigation";
import { brand } from "@/lib/brand";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: mark the section currently occupying the upper half of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile panel: lock scroll, close on Escape, return focus to the toggle.
  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-18 lg:h-24">
      {/* Backdrop lives on its own layer: backdrop-filter on the header itself
          would make it a containing block and trap the fixed mobile panel. */}
      <div
        aria-hidden="true"
        className={clsx(
          "absolute inset-0 -z-10 transition-colors duration-300 ease-out",
          isScrolled && !isMobileOpen
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      />
      <div className="container h-full flex items-center justify-between">
        <Link href="#top" className="relative z-50 font-display text-xl lg:text-2xl tracking-tight" aria-label={`${brand.name} — back to top`}>
          Flora <span className="text-accent">&amp;</span> Forge
        </Link>

        <nav
          id="primary-navigation"
          ref={panelRef}
          className={clsx(
            "fixed inset-0 z-40 flex-col items-start justify-center gap-2 px-6 pt-20 bg-background overflow-y-auto",
            "lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-10 lg:px-0 lg:pt-0 lg:bg-transparent lg:overflow-visible",
            isMobileOpen ? "flex" : "hidden"
          )}
          aria-label="Main"
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10 w-full lg:w-auto">
            {navItems.map((item) => (
              <li key={item.href} className="w-full lg:w-auto">
                <Link
                  href={item.href}
                  className="nav-link block py-2 lg:py-0 font-display text-[2rem] leading-tight lg:font-body lg:text-sm lg:font-medium"
                  aria-current={activeId === item.href ? "true" : undefined}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="hidden lg:block">
              <Link href="#reservations" className="btn btn-primary text-sm px-5 py-2.5">
                Book a Table
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:hidden relative z-50">
          <Link href="#reservations" className="btn btn-primary text-sm px-4 py-2" onClick={() => setIsMobileOpen(false)}>
            Book
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="p-2 -mr-2 text-foreground"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-expanded={isMobileOpen}
            aria-controls="primary-navigation"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <List className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
