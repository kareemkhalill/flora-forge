import Image from "next/image";
import { Reveal, RevealItem, WordReveal, Parallax } from "@/components/motion/Motion";
import { signatureImage, menuThumbs } from "@/data/images";

const signaturePizza = {
  name: "Burrata Piccante",
  category: "Signature Pizza",
  description: "Tomato, fior di latte, spicy salami, burrata, basil and chili oil.",
  price: "$26",
};

const supporting = [
  { name: "Mortadella & Pistachio", description: "Fior di latte, mortadella, crushed pistachio, lemon, basil.", price: "$25" },
  { name: "Truffle Mushroom", description: "Wild mushroom, truffle cream, fontina, thyme, truffle oil.", price: "$24" },
  { name: "Spicy Honey", description: "Fior di latte, 'nduja, red onion, hot honey, chili flake.", price: "$23" },
  { name: "Prosciutto & Stracciatella", description: "Stracciatella, prosciutto di Parma, arugula, shaved parmesan.", price: "$25" },
];

export function SignatureDishes() {
  return (
    <section className="section" aria-labelledby="dishes-title">
      <div className="container">
        <div className="max-w-xl mb-12 lg:mb-16">
          <Reveal>
            <span className="eyebrow">Signature Pizza</span>
          </Reveal>
          <WordReveal id="dishes-title" as="h2" className="display-2 mt-5" text="The one people order before they sit down" delay={0.05} />
          <Reveal delay={0.15}>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              If you are here for the first time, start with the Burrata Piccante. The burrata goes
              on after the pie leaves the oven, so it stays cold against the hot crust.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          <Reveal delay={0.05}>
            <article>
              <Parallax className="frame aspect-[4/5]" strength={26}>
                <Image
                  src={signatureImage.src}
                  alt={signatureImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </Parallax>
              <div className="pt-6 border-t border-border mt-6 flex items-start justify-between gap-6">
                <div>
                  <span className="eyebrow text-[10px]">{signaturePizza.category}</span>
                  <h3 className="display-3 mt-3 mb-2">{signaturePizza.name}</h3>
                  <p className="text-muted leading-relaxed max-w-sm">{signaturePizza.description}</p>
                </div>
                <span className="font-mono text-lg text-amber flex-shrink-0">{signaturePizza.price}</span>
              </div>
            </article>
          </Reveal>

          <Reveal className="flex flex-col" stagger={0.08} delay={0.12}>
            {supporting.map((dish, i) => (
              <RevealItem key={dish.name}>
                <article className="flex gap-5 py-5 border-b border-border last:border-b-0 group">
                  <div className="frame aspect-square w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0">
                    <Image
                      src={menuThumbs[i].src}
                      alt={menuThumbs[i].alt}
                      width={224}
                      height={224}
                      sizes="112px"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display text-lg leading-tight">{dish.name}</h4>
                      <span className="font-mono text-sm text-amber flex-shrink-0">{dish.price}</span>
                    </div>
                    <p className="text-muted text-sm mt-1.5 leading-relaxed">{dish.description}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
