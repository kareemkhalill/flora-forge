"use client";

import { clsx } from "clsx";
import { MapPin, Phone, Envelope, ArrowRight, CaretRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { locations } from "@/data/locations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function Location() {
  const [ref, visible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const location = locations[0];

  return (
    <section
      ref={ref}
      id="visit"
      className="section relative"
      aria-labelledby="location-title"
    >
      <div className="container">
        <div className="section-header max-w-2xl mb-12 lg:mb-16 reveal">
          <span className="eyebrow">VISIT US</span>
          <h2 id="location-title">One oven, one neighborhood.</h2>
          <p>
            Find us in Chelsea. The dough, the tomatoes, and the hospitality stay the same.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className={clsx("reveal stagger-1", visible ? "visible" : "")}>
            <div className="space-y-6">
              <dl className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-sm font-medium text-foreground">Address</dt>
                    <dd className="text-muted mt-1">128 West 18th Street</dd>
                    <dd className="text-muted">New York, NY 10011</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-sm font-medium text-foreground">Phone</dt>
                    <dd className="text-muted mt-1"><a href={`tel:${location.phone}`} className="hover:text-accent transition-colors">{location.phone}</a></dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Envelope className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-sm font-medium text-foreground">Email</dt>
                    <dd className="text-muted mt-1"><a href="mailto:hello@floraandforge.com" className="hover:text-accent transition-colors">hello@floraandforge.com</a></dd>
                  </div>
                </div>
              </dl>

              <div className="pt-6 border-t border-border">
                <h4 className="font-display text-lg font-medium mb-4">Hours</h4>
                <dl className="space-y-3">
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted whitespace-nowrap">Monday</dt>
                    <dd className="text-foreground font-medium text-right">Closed</dd>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted whitespace-nowrap">Tuesday – Thursday</dt>
                    <dd className="text-foreground font-medium text-right">5:00 PM – 10:00 PM</dd>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted whitespace-nowrap">Friday</dt>
                    <dd className="text-foreground font-medium text-right">5:00 PM – 11:00 PM</dd>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted whitespace-nowrap">Saturday</dt>
                    <dd className="text-foreground font-medium text-right">12:00 PM – 11:00 PM</dd>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted whitespace-nowrap">Sunday</dt>
                    <dd className="text-foreground font-medium text-right">12:00 PM – 9:00 PM</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-8 p-6 lg:p-8 bg-surface rounded-xl">
              <h4 className="font-display text-lg font-medium mb-4">Private dining</h4>
              <p className="text-muted mb-6">
                Our private room seats up to 20 guests. Custom pie menus, family-style antipasti,
                and a tap list curated for your crew.
              </p>
              <Button
                variant="ghost"
                size="md"
                className="group"
                onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
              >
                Inquire About Private Party
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className={clsx("reveal stagger-2", visible ? "visible" : "")}>
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <Image
                src={location.image}
                alt={location.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(location.address)}`, "_blank")}
                >
                  <CaretRight className="h-4 w-4" aria-hidden="true" />
                  Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}