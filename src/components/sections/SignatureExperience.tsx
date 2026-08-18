"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface SignatureExperienceProps {
  className?: string;
}

const doughSteps = [
  {
    step: "01",
    title: "Mix & rest",
    text: "Flour, water, salt, and a small amount of starter. We mix gently, then let the dough rest so the flour can fully hydrate.",
  },
  {
    step: "02",
    title: "Cold ferment",
    text: "The dough goes into the fridge for 48 hours. The cold slows the yeast and lets flavor build the way a fast rise never could.",
  },
  {
    step: "03",
    title: "Hand stretch",
    text: "No roller. We stretch each ball by hand the moment it&apos;s ordered, keeping the airy rim intact and the center thin.",
  },
];

const ingredientList = [
  {
    name: "San Marzano tomatoes",
    text: "Grown in the volcanic soil near Naples. Sweet, low-acid, and crushed by hand — never cooked into a paste.",
    image: "/images/san-marzano.jpg",
  },
  {
    name: "Fior di latte",
    text: "Fresh cow&apos;s milk mozzarella, packed the same week. It melts without greasing out and keeps a clean dairy sweetness.",
    image: "/images/fior-di-latte.jpg",
  },
  {
    name: "Basil & olive oil",
    text: "Basil torn by hand at the end. Extra-virgin olive oil from a single grove, poured sparingly across the finished pie.",
    image: "/images/basil-oil.jpg",
  },
  {
    name: "Calabrian chili",
    text: "For the pies that want heat. A little oil, a little crunch, enough to lift the tomato without burying it.",
    image: "/images/calabrian-chili.jpg",
  },
];

export function SignatureExperience({ className }: SignatureExperienceProps) {
  const [doughRef, doughVisible] = useIntersectionObserver({ threshold: 0.15, rootMargin: "0px 0px -100px 0px" });
  const [ingredientsRef, ingredientsVisible] = useIntersectionObserver({ threshold: 0.15, rootMargin: "0px 0px -100px 0px" });
  const [ovenRef, ovenVisible] = useIntersectionObserver({ threshold: 0.15, rootMargin: "0px 0px -100px 0px" });

  return (
    <>
      {/* THE DOUGH */}
      <section
        ref={doughRef}
        id="dough"
        className={clsx("section bg-surface relative", className)}
        aria-labelledby="dough-title"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={clsx("relative reveal", doughVisible ? "visible" : "")}>
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="/images/dough.jpg"
                  alt="Close-up of raw pizza dough dusted with flour on a wooden board"
                  width="800"
                  height="1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={clsx("reveal stagger-2", doughVisible ? "visible" : "")}>
              <div className="section-header">
                <span className="eyebrow">THE DOUGH</span>
                <h2 id="dough-title">48 hours make a difference.</h2>
                <p>
                  Our dough rests slowly before it ever sees the oven. That time gives the crust
                  its light texture and deep flavor — you can&apos;t rush it, and we don&apos;t try.
                </p>
              </div>

              <div className="mt-12 space-y-8">
                {doughSteps.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center">
                      <span className="font-display text-xl text-accent">{s.step}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">{s.title}</h3>
                      <p className="text-muted mt-1">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE INGREDIENTS */}
      <section
        ref={ingredientsRef}
        id="ingredients"
        className={clsx("section relative", className)}
        aria-labelledby="ingredients-title"
      >
        <div className="container">
          <div className={clsx("section-header max-w-2xl mb-16 lg:mb-20 reveal", ingredientsVisible ? "visible" : "")}>
            <span className="eyebrow">THE INGREDIENTS</span>
            <h2 id="ingredients-title">Keep it simple. Choose it well.</h2>
            <p>
              A short list, sourced with care. Nothing on the pizza is there to fill space —
              every ingredient earns its place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingredientList.map((ing, index) => (
              <article
                key={ing.name}
                className={clsx(
                  "group",
                  `reveal stagger-${index + 1}`,
                  ingredientsVisible ? "visible" : ""
                )}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={ing.image}
                    alt={ing.name}
                    width="800"
                    height="600"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-lg font-medium">{ing.name}</h3>
                <p className="text-muted text-sm mt-1 leading-relaxed">{ing.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE OVEN */}
      <section
        ref={ovenRef}
        id="oven"
        className={clsx("section bg-surface relative overflow-hidden", className)}
        aria-labelledby="oven-title"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={clsx("reveal stagger-2 order-2 lg:order-1", ovenVisible ? "visible" : "")}>
              <div className="section-header">
                <span className="eyebrow">THE OVEN</span>
                <h2 id="oven-title">The last step happens fast.</h2>
                <p>
                  High heat. A few minutes. A blistered edge and a crust that&apos;s crisp outside,
                  light inside. The oven does in ninety seconds what a home kitchen never could.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-display text-3xl text-accent">900°F</p>
                  <p className="text-muted text-sm mt-1">Oven temperature</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-accent">90s</p>
                  <p className="text-muted text-sm mt-1">Bake time</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-accent">Oak</p>
                  <p className="text-muted text-sm mt-1">Live wood fire</p>
                </div>
              </div>
            </div>

            <div className={clsx("relative reveal order-1 lg:order-2", ovenVisible ? "visible" : "")}>
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="/images/oven.jpg"
                  alt="Wood-fired oven in the open kitchen at Flora & Forge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}