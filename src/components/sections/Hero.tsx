"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { ArrowRight, MapPin, Clock } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { brand } from "@/lib/brand";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setVisible(true);
    });
  }, []);

  return (
    <section
      className={clsx("hero-section", className)}
      aria-labelledby="hero-title"
    >
      <div className="hero-bg">
        <Image
          src="/images/hero-pizza.jpg"
          alt="Fresh artisan Margherita pizza with blistered crust, San Marzano tomatoes, fior di latte, and fresh basil straight from wood-fired oven"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-overlay" />
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-4 py-20">
        <div
          className={clsx(
            "w-full max-w-4xl text-center lg:text-left",
            visible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="eyebrow mb-6 animate-fade-in-up delay-1 text-foreground/90">
            WOOD-FIRED PIZZERIA
          </p>
          <h1
            id="hero-title"
            className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.05] text-foreground animate-fade-in-up delay-2 text-shadow"
          >
            Straight from the Oven.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-3">
            Hand-stretched dough, carefully chosen ingredients, and pizza baked to order.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start animate-fade-in-up delay-4">
            <Button
              variant="primary"
              size="lg"
              className="group"
              onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Table
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View the Menu
            </Button>
          </div>
        </div>

        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full max-w-4xl animate-fade-in-up delay-5">
          <div className="flex items-center gap-3 text-muted text-sm">
            <MapPin className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
            <span>{brand.address.street}, NYC</span>
          </div>
          <div className="flex items-center gap-3 text-muted text-sm">
            <Clock className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
            <span>Tue–Thu 5–10 PM, Fri 5–11 PM</span>
          </div>
          <div className="flex items-center gap-3 text-muted text-sm">
            <MapPin className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
            <span>Sat 12–11 PM, Sun 12–9 PM</span>
          </div>
          <div className="flex items-center gap-3 text-muted text-sm">
            <Clock className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
            <span>Mon Closed</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float animate-fade-in delay-6" aria-hidden="true">
          <ArrowRight className="h-8 w-8 text-muted/40 rotate-90" />
        </div>
      </div>
    </section>
  );
}