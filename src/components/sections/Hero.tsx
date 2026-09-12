"use client";

import type { CSSProperties } from "react";
import { clsx } from "clsx";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Parallax, Magnetic } from "@/components/motion/Motion";
import { brand } from "@/lib/brand";
import { heroImage } from "@/data/images";

interface HeroProps {
  className?: string;
}

const headline = [
  { text: "Straight", accent: false },
  { text: "from the", accent: false },
  { text: "oven.", accent: true },
];

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as CSSProperties;

// The entrance is plain CSS so it plays from first paint instead of waiting for hydration.
export function Hero({ className }: HeroProps) {
  return (
    <section
      className={clsx("relative min-h-[100dvh] pt-24 lg:pt-28 flex flex-col overflow-hidden", className)}
      aria-labelledby="hero-title"
    >
      <div className="ember-ambient" aria-hidden="true" />

      <div className="container flex-1 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center relative">
        <div className="lg:order-1">
          <span className="eyebrow hero-anim hero-fade">Wood-Fired Pizzeria — Chelsea</span>

          <h1 id="hero-title" className="display-1 mt-6 text-foreground">
            {headline.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.06em]">
                <span
                  className={clsx("block hero-anim hero-line", line.accent && "text-accent")}
                  style={delay(0.1 + i * 0.09)}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-8 text-lg text-bone-muted max-w-md leading-relaxed hero-anim hero-rise"
            style={delay(0.42)}
          >
            {brand.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5 hero-anim hero-fade" style={delay(0.52)}>
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
          </div>
        </div>

        <div className="lg:order-2 relative lg:translate-y-4 hero-anim hero-image" style={delay(0.15)}>
          <Parallax className="frame frame-grain relative aspect-[4/5] lg:aspect-[3/4]" strength={28}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Parallax>
        </div>
      </div>

      <div className="pb-16 lg:pb-24" />
    </section>
  );
}
