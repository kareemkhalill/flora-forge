import { clsx } from "clsx";
import Image from "next/image";
import { Reveal, WordReveal, Parallax } from "@/components/motion/Motion";
import { craftImage } from "@/data/images";

interface BrandStoryProps {
  className?: string;
}

export function BrandStory({ className }: BrandStoryProps) {
  return (
    <section id="our-story" className={clsx("section", className)} aria-labelledby="our-story-title">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Our Pizza</span>
            </Reveal>
            <WordReveal
              id="our-story-title"
              as="h2"
              className="display-2 mt-5 text-balance"
              text="We mix the dough two days before you eat it."
              delay={0.05}
            />
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted text-lg leading-relaxed max-w-md">
                A fast rise makes bread that tastes like yeast; a slow one makes bread that tastes
                like wheat. Everything after that is a short list of ingredients and a very hot
                fire.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-6 relative">
            <Reveal delay={0.1}>
              <Parallax className="frame aspect-[4/5]" strength={34}>
                <Image
                  src={craftImage.src}
                  alt={craftImage.alt}
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
  );
}
