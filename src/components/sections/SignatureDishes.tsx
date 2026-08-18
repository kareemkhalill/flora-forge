"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { brand } from "@/lib/brand";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const signaturePizza = {
  name: "Burrata Piccante",
  category: "SIGNATURE PIZZA",
  description:
    "Tomato, fior di latte, spicy salami, burrata, basil and chili oil.",
  price: "$26",
  image: "/images/burrata-piccante.jpg",
};

const supporting = [
  {
    name: "Mortadella & Pistachio",
    description: "Fior di latte, mortadella, crushed pistachio, lemon, basil.",
    price: "$25",
    image: "/images/mortadella-pistachio.jpg",
  },
  {
    name: "Truffle Mushroom",
    description: "Wild mushroom, truffle cream, fontina, thyme, truffle oil.",
    price: "$24",
    image: "/images/truffle-mushroom.jpg",
  },
  {
    name: "Spicy Honey",
    description: "Fior di latte, 'nduja, red onion, hot honey, chili flake.",
    price: "$23",
    image: "/images/spicy-honey.jpg",
  },
  {
    name: "Prosciutto & Stracciatella",
    description: "Stracciatella, prosciutto di Parma, arugula, shaved parmesan.",
    price: "$25",
    image: "/images/prosciutto-stracciatella.jpg",
  },
];

export function SignatureDishes() {
  const [ref, visible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      className="section relative"
      aria-labelledby="dishes-title"
    >
      <div className="container">
        <div className={clsx("section-header max-w-2xl mb-12 lg:mb-16 reveal", visible ? "visible" : "")}>
          <span className="eyebrow">SIGNATURE PIZZA</span>
          <h2 id="dishes-title">The one we&apos;re known for</h2>
          <p>
            We built the menu around the dishes we actually crave. This is the pie that
            regulars order before they&apos;ve sat down.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <article
            className={clsx(
              "relative aspect-[4/5] rounded-xl overflow-hidden group",
              "reveal stagger-1",
              visible ? "visible" : ""
            )}
          >
            <Image
              src={signaturePizza.image}
              alt={`${signaturePizza.name} at ${brand.name}`}
              width="1200"
              height="1500"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              loading="eager"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-20">
              <span className="text-xs uppercase tracking-widest text-accent font-medium">
                {signaturePizza.category}
              </span>
              <h3 className="font-display text-3xl lg:text-4xl font-medium mt-2 mb-3 text-foreground">
                {signaturePizza.name}
              </h3>
              <p className="text-muted text-base lg:text-lg leading-relaxed mb-6 max-w-md">
                {signaturePizza.description}
              </p>
              <span className="font-display text-2xl text-accent font-medium">
                {signaturePizza.price}
              </span>
            </div>
          </article>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {supporting.map((dish, index) => (
              <article
                key={dish.name}
                className={clsx(
                  "card relative overflow-hidden aspect-[3/4] group",
                  `reveal stagger-${index + 2}`,
                  visible ? "visible" : ""
                )}
              >
                <Image
                  src={dish.image}
                  alt={`${dish.name} at ${brand.name}`}
                  width="600"
                  height="800"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 z-20">
                  <h4 className="font-display text-lg font-medium mb-2 text-foreground">
                    {dish.name}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed mb-3 line-clamp-3">
                    {dish.description}
                  </p>
                  <span className="font-display text-lg text-accent font-medium">
                    {dish.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}