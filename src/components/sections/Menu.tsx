"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { CaretRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { menuCategories } from "@/data/menu";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("classiche");
  const [ref] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  const category = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section
      ref={ref}
      id="menu"
      className="section"
      aria-labelledby="menu-title"
    >
      <div className="container">
        <div className="section-header max-w-2xl mb-12 lg:mb-16 reveal">
          <span className="eyebrow">THE MENU</span>
          <h2 id="menu-title">Crafted for the oven</h2>
          <p>
            Every pie starts with 48-hour dough and ends in a 900°F wood flame. What you see
            here is what we&apos;re firing today — simple, honest, and hot.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 lg:mb-14 justify-center lg:justify-start reveal stagger-1" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`${cat.id}-panel`}
              id={`${cat.id}-tab`}
              onClick={() => setActiveCategory(cat.id)}
              className={clsx(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ease-out",
                activeCategory === cat.id
                  ? "bg-accent text-bone shadow-[0_4px_20px_-4px_rgba(184,71,47,0.4)]"
                  : "bg-surface text-foreground border border-border hover:border-accent hover:text-accent"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="reveal stagger-2" role="tabpanel" id={`${activeCategory}-panel`} aria-labelledby={`${activeCategory}-tab`}>
          <dl className="space-y-0 max-w-3xl">
            {category.items.map((item, index) => (
              <div key={item.name} className="menu-item reveal stagger-1" style={{ transitionDelay: `${(index + 1) * 50}ms` }}>
                <div>
                  <dt className="menu-item-name">{item.name}</dt>
                  <dd className="menu-item-description">{item.description}</dd>
                </div>
                <dd className="menu-item-price flex items-center">{item.price}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 lg:mt-16 text-center reveal stagger-3">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Table
            <CaretRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}