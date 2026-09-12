"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { menuCategories } from "@/data/menu";
import { Reveal, WordReveal } from "@/components/motion/Motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("classiche");
  const reduced = useReducedMotion();

  const category = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="section bg-background-alt" aria-labelledby="menu-title">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">The Menu</span>
            </Reveal>
            <WordReveal id="menu-title" as="h2" className="display-2 mt-5" text="Nine pies and a few things to share" delay={0.05} />
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted text-lg leading-relaxed max-w-sm">
                The menu stays short so the kitchen can keep up with the oven. This is what
                we&apos;re firing today.
              </p>
            </Reveal>

            <div
              className="flex flex-col items-start gap-1 mt-10 border-t border-border pt-2"
              role="tablist"
              aria-label="Menu categories"
            >
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  aria-controls={`${cat.id}-panel`}
                  id={`${cat.id}-tab`}
                  onClick={() => setActiveCategory(cat.id)}
                  className="tab-underline"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1" />

          <div
            className="lg:col-span-7"
            role="tabpanel"
            id={`${activeCategory}-panel`}
            aria-labelledby={`${activeCategory}-tab`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -6, transition: { duration: reduced ? 0.01 : 0.16, ease: EASE } }}
                transition={{ duration: reduced ? 0.01 : 0.35, ease: EASE }}
              >
                <p className="text-muted mb-8">{category.description}</p>
                <dl>
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      className="menu-item"
                      initial={{ opacity: 0, y: reduced ? 0 : 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduced ? 0.01 : 0.5, ease: EASE, delay: reduced ? 0 : i * 0.05 }}
                    >
                      <div>
                        <dt className="menu-item-name">{item.name}</dt>
                        <dd className="menu-item-description">{item.description}</dd>
                      </div>
                      <dd className="menu-item-price flex items-center">{item.price}</dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10">
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Table
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
