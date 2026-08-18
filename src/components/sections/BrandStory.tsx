"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface BrandStoryProps {
  className?: string;
}

export function BrandStory({ className }: BrandStoryProps) {
  const [ref, visible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      id="our-story"
      className={clsx("section relative", className)}
      aria-labelledby="our-story-title"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className={clsx("reveal", visible ? "visible" : "")}>
            <div className="section-header">
              <span className="eyebrow">OUR PIZZA</span>
              <h2 id="our-story-title">Good pizza starts long before it reaches the oven.</h2>
              <p>
                Our dough is prepared ahead of time and allowed to develop slowly. We keep the
                ingredients simple, the process deliberate, and the oven hot. Nothing hides
                behind a sauce. You taste the flour, the tomato, the char.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <div className={clsx("reveal stagger-1", visible ? "visible" : "")} style={{ transitionDelay: "100ms" }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center">
                    <span className="font-display text-xl text-accent">01</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium">Long fermentation</h3>
                    <p className="text-muted mt-1">
                      The dough rests for 48 hours before it sees heat. Cold, slow, and patient —
                      that wait is what gives the crust its open crumb and quiet tang.
                    </p>
                  </div>
                </div>
              </div>
              <div className={clsx("reveal stagger-1", visible ? "visible" : "")} style={{ transitionDelay: "200ms" }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center">
                    <span className="font-display text-xl text-accent">02</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium">Few ingredients, chosen well</h3>
                    <p className="text-muted mt-1">
                      San Marzano tomatoes, fior di latte, basil from the market, and olive oil
                      we actually like to drink. That&apos;s most of the menu. We don&apos;t dress it up.
                    </p>
                  </div>
                </div>
              </div>
              <div className={clsx("reveal stagger-1", visible ? "visible" : "")} style={{ transitionDelay: "300ms" }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center">
                    <span className="font-display text-xl text-accent">03</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium">Baked to order</h3>
                    <p className="text-muted mt-1">
                      Every pie is stretched by hand the moment you order it and fired in under
                      two minutes. What lands on your table was never under a heat lamp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx("relative reveal stagger-2", visible ? "visible" : "")}>
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/pizzaiolo.jpg"
                alt="Pizzaiolo stretching fresh dough by hand on a floured wooden surface"
                width="800"
                height="1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 bg-card border border-border p-6 lg:p-8 rounded-xl shadow-[0_30px_60px_-20px_rgba(44,33,27,0.25)] max-w-xs animate-float">
              <p className="font-display text-2xl font-medium text-accent">48</p>
              <p className="text-muted text-sm mt-1">Hours of dough fermentation</p>
              <div className="editorial-divider my-4" />
              <p className="text-sm text-muted leading-relaxed">
                We learn the flour a little better each season. The humidity in July, the cold
                in January — the dough tells us when it&apos;s ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}