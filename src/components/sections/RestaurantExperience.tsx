"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const roomImages = [
  "/images/room1.jpg",
  "/images/room2.jpg",
  "/images/room3.jpg",
];

export function RestaurantExperience() {
  const [ref, visible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      className="section bg-surface relative overflow-hidden"
      aria-labelledby="restaurant-experience-title"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className={clsx("reveal stagger-1 order-2 lg:order-1", visible ? "visible" : "")}>
            <div className="section-header">
              <span className="eyebrow">THE ROOM</span>
              <h2 id="restaurant-experience-title">A place to spend the evening.</h2>
              <p>
                Cream walls, warm light, and the constant low hum of the oven. We built the
                room to feel like a neighborhood you want to stay in — not a place you pass through.
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-muted">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50 flex-shrink-0" aria-hidden="true" />
                Communal marble tables and quiet corners for two
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50 flex-shrink-0" aria-hidden="true" />
                Open kitchen centered on the wood-fired hearth
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50 flex-shrink-0" aria-hidden="true" />
                Natural wine list and Italian craft beer by the glass
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50 flex-shrink-0" aria-hidden="true" />
                Aperitivo hour Tuesday–Friday, 5–6 PM
              </li>
            </ul>
          </div>

          <div className={clsx("grid grid-cols-2 gap-4 reveal stagger-2 order-1 lg:order-2", visible ? "visible" : "")}>
            <div className="aspect-[3/4] rounded-xl overflow-hidden group">
              <Image
                src={roomImages[0]}
                alt="Warm dining room with wooden tables, ambient lighting, and open kitchen"
                width="1200"
                height="1600"
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
                priority
              />
            </div>
            <div className="grid gap-4">
              <div className="aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={roomImages[1]}
                  alt="Plated Burrata Piccante pizza on marble table with wine glasses and candlelight"
                  width="800"
                  height="800"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={roomImages[2]}
                  alt="Guests dining at communal table in warm restaurant interior"
                  width="800"
                  height="800"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}