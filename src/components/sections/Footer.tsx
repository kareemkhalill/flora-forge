"use client";

import { InstagramLogo, TwitterLogo, FacebookLogo, CaretCircleUp, ForkKnife } from "@phosphor-icons/react";
import { brand } from "@/lib/brand";

const footerNav = {
  Menu: [
    { label: "Pizze Classiche", href: "#menu" },
    { label: "Signature Pizze", href: "#menu" },
    { label: "From the Side", href: "#menu" },
    { label: "Full Menu", href: "#menu" },
  ],
  Story: [
    { label: "Our Pizza", href: "#our-story" },
    { label: "The Dough", href: "#dough" },
    { label: "The Oven", href: "#oven" },
  ],
  Visit: [
    { label: "Find Us", href: "#visit" },
    { label: "Hours", href: "#visit" },
    { label: "Reservations", href: "#reservations" },
    { label: "Private Dining", href: "#visit" },
  ],
};

const socialLinks = [
  { icon: InstagramLogo, href: brand.social.instagram, label: "Instagram" },
  { icon: TwitterLogo, href: brand.social.twitter, label: "Twitter" },
  { icon: FacebookLogo, href: brand.social.facebook, label: "Facebook" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-olive text-bone"
      role="contentinfo"
    >
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 pt-16 lg:pt-20 pb-12 lg:pb-16">
          <div className="lg:col-span-1 max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <ForkKnife className="h-7 w-7 text-bone" aria-hidden="true" />
              <span className="font-display text-xl font-medium text-bone">{brand.name}</span>
            </div>
            <p className="text-bone/80 text-sm leading-relaxed mb-8">
              {brand.description}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-bone/10 border border-bone/20 text-bone hover:bg-accent hover:border-accent transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerNav).map(([title, items]) => (
            <nav key={title} aria-label={title} className="lg:col-span-1">
              <h4 className="font-display text-sm font-medium text-bone mb-4 tracking-wider uppercase">{title}</h4>
              <ul className="space-y-3" role="list">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-bone/75 text-sm hover:text-bone transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="editorial-divider my-8 lg:my-12 opacity-30" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-8 lg:pb-12">
          <p className="text-bone/60 text-sm">
            © {currentYear} {brand.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-bone/60">
            <a href="#" className="hover:text-bone transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bone transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-bone transition-colors">Accessibility</a>
          </div>

          <button
            className="p-2 rounded-full bg-bone/10 border border-bone/20 text-bone hover:bg-accent hover:border-accent transition-all duration-200 lg:hidden"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <CaretCircleUp className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <a
        href="#top"
        className="fixed bottom-6 right-6 lg:hidden p-3 rounded-full bg-olive/90 backdrop-blur-sm border border-bone/20 shadow-[0_10px_30px_-10px_rgba(44,33,27,0.3)] z-50"
        aria-label="Scroll to top"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      >
        <CaretCircleUp className="h-6 w-6 text-bone" aria-hidden="true" />
      </a>
    </footer>
  );
}