"use client";

import { clsx } from "clsx";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Parallax, Magnetic } from "@/components/motion/Motion";
import { brand } from "@/lib/brand";
import { heroImage } from "@/data/images";

interface HeroProps {
  className?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const headline = [
  { text: "Straight", accent: false },
  { text: "from the", accent: false },
  { text: "oven.", accent: true },
];

export function Hero({ className }: HeroProps) {
  const reduced = useReducedMotion();

  return (
    <section
      className={clsx("relative min-h-[100dvh] pt-24 lg:pt-28 flex flex-col overflow-hidden", className)}
      aria-labelledby="hero-title"
    >
      <div className="ember-ambient" aria-hidden="true" />

      <div className="container flex-1 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center relative">
        <div className="lg:order-1">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.7, ease: EASE }}
          >
            Wood-Fired Pizzeria — Chelsea
          </motion.span>

          <h1 id="hero-title" className="display-1 mt-6 text-foreground">
            {headline.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className={clsx("block", line.accent && "text-accent")}
                  initial={{ y: reduced ? 0 : "108%", opacity: reduced ? 0 : 1 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: reduced ? 0.01 : 0.95, ease: EASE, delay: 0.1 + i * 0.09 }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 text-lg text-bone-muted max-w-md leading-relaxed"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.7, ease: EASE, delay: 0.42 }}
          >
            {brand.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.7, ease: EASE, delay: 0.52 }}
          >
            <Magnetic>
              <Button
                variant="primary"
                size="xl"
                className="group"
                onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Table
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </Magnetic>
            <Button
              variant="ghost"
              size="xl"
              className="group"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View the Menu
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="lg:order-2 relative lg:translate-y-4"
          initial={{ opacity: 0, clipPath: reduced ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: reduced ? 0.01 : 1.1, ease: EASE, delay: 0.15 }}
        >
          <Parallax className="frame frame-grain relative aspect-[4/5] lg:aspect-[3/4]" strength={28}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Parallax>
        </motion.div>
      </div>

      <div className="pb-16 lg:pb-24" />
    </section>
  );
}
