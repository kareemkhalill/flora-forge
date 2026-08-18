"use client";

import { clsx } from "clsx";
import { Camera, ArrowSquareOut } from "@phosphor-icons/react";
import Image from "next/image";
import { brand } from "@/lib/brand";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const galleryImages = [
  {
    id: "hero-pizza",
    src: "/images/hero-pizza.jpg",
    alt: "Fresh Margherita pizza with blistered crust, San Marzano tomatoes, and basil",
    width: 1200,
    height: 1600,
  },
  {
    id: "pizzaiolo-dough",
    src: "/images/pizzaiolo.jpg",
    alt: "Pizzaiolo stretching 48-hour dough by hand, flour dust in air",
    width: 800,
    height: 1000,
  },
  {
    id: "oven",
    src: "/images/oven.jpg",
    alt: "Wood-fired pizza oven with flames and a pizza on the peel",
    width: 800,
    height: 1000,
  },
  {
    id: "dough",
    src: "/images/dough.jpg",
    alt: "Close-up of raw pizza dough dusted with flour on a wooden board",
    width: 800,
    height: 1200,
  },
  {
    id: "burrata-piccante",
    src: "/images/burrata-piccante.jpg",
    alt: "Burrata Piccante pizza with salami, burrata, and chili oil",
    width: 1200,
    height: 800,
  },
  {
    id: "san-marzano",
    src: "/images/san-marzano.jpg",
    alt: "San Marzano tomatoes and fresh ingredients for pizza",
    width: 800,
    height: 800,
  },
  {
    id: "dining-room",
    src: "/images/room1.jpg",
    alt: "Warm dining room interior with wooden tables and ambient light",
    width: 800,
    height: 1000,
  },
  {
    id: "fior-di-latte",
    src: "/images/fior-di-latte.jpg",
    alt: "Fresh fior di latte mozzarella used on the pizzas",
    width: 800,
    height: 800,
  },
];

export function Gallery() {
  const [ref, visible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      id="gallery"
      className="section relative"
      aria-labelledby="gallery-title"
    >
      <div className="container">
        <div className={clsx("section-header max-w-2xl mb-12 lg:mb-16 reveal", visible ? "visible" : "")}>
          <span className="eyebrow">GALLERY</span>
          <h2 id="gallery-title">Moments around the fire</h2>
          <p>
            A glimpse into the rhythm of our kitchen, the warmth of the dining room, and the
            pizzas that bring people back.
          </p>
        </div>

        <div
          className={clsx(
            "grid grid-cols-2 gap-3 lg:grid-cols-4 gap-4 lg:grid-flow-dense",
            "gallery-masonry"
          )}
          role="list"
        >
          {galleryImages.map((image, index) => {
            // Determine aspect ratio and span based on image dimensions
            const isPortrait = image.height > image.width;
            const isWideLandscape = image.width > image.height * 1.5;
            const aspectRatio = isPortrait
              ? "aspect-[4/5]"    // portrait
              : isWideLandscape
                ? "aspect-[3/2]"  // wide landscape
                : "aspect-[4/3]"; // standard landscape
            const span = isPortrait || isWideLandscape
              ? "lg:col-span-2"
              : "lg:col-span-1";
            return (
              <figure
                key={image.id}
                className={clsx(
                  "relative overflow-hidden group cursor-zoom-in",
                  aspectRatio,
                  span,
                  `reveal stagger-${(index % 6) + 1}`,
                  visible ? "visible" : ""
                )}
                role="listitem"
              >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading={index < 4 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                <button
                  className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-accent hover:text-bone transition-colors"
                  aria-label={`View ${image.alt} fullscreen`}
                >
                  <ArrowSquareOut className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <figcaption className="absolute bottom-4 left-4 text-foreground/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                <Camera className="h-3 w-3 inline-block mr-1 -mt-0.5" aria-hidden="true" />
                {brand.name}
              </figcaption>
            </figure>
          );
        })}
        </div>

        <div className={clsx("mt-12 lg:mt-16 text-center reveal stagger-7", visible ? "visible" : "")} style={{ transitionDelay: "300ms" }}>
          <p className="text-muted mb-4">Want to see more?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors group"
          >
            Follow us on Instagram
            <Camera className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}