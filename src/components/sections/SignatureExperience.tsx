import Image from "next/image";
import { Reveal, RevealItem, WordReveal, Parallax } from "@/components/motion/Motion";
import { ingredients, ovenImage } from "@/data/images";

export function SignatureExperience() {
  return (
    <>
      {/* THE INGREDIENTS */}
      <section id="ingredients" className="section bg-background-alt" aria-labelledby="ingredients-title">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-xl">
              <Reveal>
                <span className="eyebrow">The Ingredients</span>
              </Reveal>
              <WordReveal
                id="ingredients-title"
                as="h2"
                className="display-2 mt-5"
                text="We buy fewer things and pay more for them."
                delay={0.05}
              />
            </div>
            <Reveal delay={0.2}>
              <p className="text-muted max-w-sm">A margherita here is four ingredients.</p>
            </Reveal>
          </div>
        </div>

        <Reveal className="filmstrip pl-[max(1.25rem,calc((100vw-1440px)/2+4rem))] pr-6" stagger={0.08}>
          {ingredients.map((ing) => (
            <RevealItem key={ing.name} className="filmstrip-item">
              <div className="frame aspect-[3/4] mb-4">
                <Image src={ing.image.src} alt={ing.image.alt} width={640} height={853} sizes="320px" loading="lazy" />
              </div>
              <h3 className="font-display text-lg">{ing.name}</h3>
              <p className="text-muted text-sm mt-1.5 leading-relaxed">{ing.text}</p>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      {/* THE OVEN */}
      <section id="oven" className="section bg-foreground text-bone overflow-hidden" aria-labelledby="oven-title">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">The Oven</span>
              </Reveal>
              <WordReveal
                id="oven-title"
                as="h2"
                className="display-2 mt-5 text-bone text-balance"
                text="A pie is in the fire for about ninety seconds."
                delay={0.05}
              />
              <Reveal delay={0.15}>
                <p className="mt-8 text-lg leading-relaxed max-w-md text-bone/70">
                  Oak burns hot enough to set the crust before the cheese breaks. The fire is lit
                  before lunch and stays lit until the last table leaves.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <Parallax className="frame aspect-[4/3]" strength={30}>
                  <Image
                    src={ovenImage.src}
                    alt={ovenImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    loading="lazy"
                  />
                </Parallax>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
