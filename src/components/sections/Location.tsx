import { clsx } from "clsx";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { brand } from "@/lib/brand";
import { Reveal, WordReveal, Parallax, Magnetic } from "@/components/motion/Motion";
import { roomImages } from "@/data/images";

const hours = [
  ["Monday", "Closed"],
  ["Tuesday – Thursday", "5:00 PM – 10:00 PM"],
  ["Friday", "5:00 PM – 11:00 PM"],
  ["Saturday", "12:00 PM – 11:00 PM"],
  ["Sunday", "12:00 PM – 9:00 PM"],
];

export function Location() {
  return (
    <section id="visit" className="section" aria-labelledby="location-title">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Visit</span>
            </Reveal>
            <WordReveal
              id="location-title"
              as="h2"
              className="display-2 mt-5 text-balance"
              text="One room on West 18th Street."
              delay={0.05}
            />
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted text-lg leading-relaxed max-w-md">
                Eighty seats in a restored 1920s warehouse, between Sixth and Seventh. The hearth is
                in full view of the room, and the back room seats twenty if you want it to yourself.
              </p>
            </Reveal>

            <dl className="mt-10 grid sm:grid-cols-2 gap-y-6 gap-x-8 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-2">Address</dt>
                <dd className="text-foreground mt-1.5">{brand.address.street}</dd>
                <dd className="text-muted text-sm">New York, NY 10011</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-2">Contact</dt>
                <dd className="mt-1.5">
                  <a href={`tel:${brand.phone}`} className="text-foreground hover:text-accent transition-colors">
                    {brand.phone}
                  </a>
                </dd>
                <dd>
                  <a href="mailto:hello@floraandforge.com" className="text-muted text-sm hover:text-accent transition-colors">
                    hello@floraandforge.com
                  </a>
                </dd>
              </div>
            </dl>

            <dl className="mt-8 border-t border-border pt-8">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-4 py-2.5 border-b border-border last:border-b-0 text-sm">
                  <dt className="text-muted">{day}</dt>
                  <dd className={clsx("font-mono text-right", time === "Closed" ? "text-muted-2" : "text-foreground")}>
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-5 gap-4 self-start">
            <Reveal className="col-span-5 sm:col-span-3" delay={0.08}>
              <div className="relative">
                <Parallax className="frame aspect-[3/4]" strength={28}>
                  <Image
                    src={roomImages[0].src}
                    alt={roomImages[0].alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 30vw"
                    loading="lazy"
                  />
                </Parallax>
                <div className="absolute bottom-4 right-4">
                  <Magnetic>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(brand.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm px-5 py-2.5"
                    >
                      Directions
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </Reveal>

            <Reveal className="col-span-5 sm:col-span-2 sm:mt-16" delay={0.16}>
              <Parallax className="frame aspect-[3/4]" strength={20}>
                <Image
                  src={roomImages[1].src}
                  alt={roomImages[1].alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 20vw"
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
