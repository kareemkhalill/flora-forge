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
      <div className="hero-vignette" />
      <div className="container relative z-10 flex flex-col min-h-[100dvh] px-4 py-16 lg:py-24">
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          <div
            className={clsx(
              "w-full text-center lg:text-left",
              visible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/10 mb-6 animate-fade-in-up delay-1">
              <span className="text-[10px] uppercase tracking-widest font-medium text-foreground">Wood-fired</span>
              <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-widest font-medium text-foreground">Pizzeria</span>
            </div>
            <h1
              id="hero-title"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-tighter leading-[1.02] text-foreground animate-fade-in-up delay-2 text-shadow"
            >
              Straight from
              <br />
              <span className="text-accent">the Oven.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-foreground/85 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-3 leading-relaxed">
              Hand-stretched dough, carefully chosen ingredients, and pizza baked to order.
            </p>
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start animate-fade-in-up delay-4">
              <Button
                variant="primary"
                size="xl"
                className="group min-w-[200px] px-8 py-4"
                onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Table
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="min-w-[200px] px-8 py-4 border-foreground/30 text-foreground hover:bg-foreground/5"
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              >
                View the Menu
              </Button>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 w-full animate-fade-in-up delay-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full max-w-4xl mx-auto">
              <InfoCard icon={<MapPin className="h-5 w-5" aria-hidden="true" />}>
                <span className="text-xs uppercase tracking-wider text-foreground/50">Address</span>
                <p className="text-sm font-medium text-foreground mt-0.5">{brand.address.street}</p>
                <p className="text-xs text-foreground/60">New York, NY 10011</p>
              </InfoCard>
              <InfoCard icon={<Clock className="h-5 w-5" aria-hidden="true" />}>
                <span className="text-xs uppercase tracking-wider text-foreground/50">Tue – Thu</span>
                <p className="text-sm font-medium text-foreground mt-0.5">5:00 PM – 10:00 PM</p>
                <p className="text-xs text-foreground/60">Fri 5:00 PM – 11:00 PM</p>
              </InfoCard>
              <InfoCard icon={<Clock className="h-5 w-5" aria-hidden="true" />}>
                <span className="text-xs uppercase tracking-wider text-foreground/50">Weekend</span>
                <p className="text-sm font-medium text-foreground mt-0.5">Sat 12:00 PM – 11:00 PM</p>
                <p className="text-xs text-foreground/60">Sun 12:00 PM – 9:00 PM</p>
              </InfoCard>
              <InfoCard icon={<MapPin className="h-5 w-5" aria-hidden="true" />}>
                <span className="text-xs uppercase tracking-wider text-foreground/50">Monday</span>
                <p className="text-sm font-medium text-foreground mt-0.5">Closed</p>
                <p className="text-xs text-foreground/60">Private events by request</p>
              </InfoCard>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float animate-fade-in delay-6" aria-hidden="true">
          <div className="flex flex-col items-center gap-2">
            <ArrowRight className="h-7 w-7 text-foreground/40 rotate-90" />
            <span className="text-[10px] uppercase tracking-widest text-foreground/30">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative p-4 lg:p-5 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-xl flex items-start gap-3 group hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300">
        {icon}
      </div>
      <div>{children}</div>
    </div>
  );
}