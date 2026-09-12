"use client";

import { InstagramLogo, TwitterLogo, FacebookLogo, ArrowUp } from "@phosphor-icons/react";
import { brand } from "@/lib/brand";

const footerLinks = [
  { label: "Our Pizza", href: "#our-story" },
  { label: "The Oven", href: "#oven" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
  { label: "Reservations", href: "#reservations" },
];

const socialLinks = [
  { icon: InstagramLogo, href: brand.social.instagram, label: "Instagram" },
  { icon: TwitterLogo, href: brand.social.twitter, label: "Twitter" },
  { icon: FacebookLogo, href: brand.social.facebook, label: "Facebook" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border overflow-hidden" role="contentinfo">
      <div className="container pt-20 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          <div className="lg:col-span-4">
            <p className="text-muted max-w-xs leading-relaxed">{brand.description}</p>
            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 border border-border text-muted hover:text-accent hover:border-accent transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-4 lg:col-start-6" aria-label="Footer">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-muted-2 mb-5">Explore</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-bone-muted hover:text-accent transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2 lg:col-start-11 lg:text-right">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-muted-2 mb-5">Find Us</h2>
            <address className="not-italic text-sm text-bone-muted leading-relaxed">
              {brand.address.street}
              <br />
              New York, NY 10011
              <br />
              <a href={`tel:${brand.phone}`} className="hover:text-accent transition-colors">{brand.phone}</a>
            </address>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-8 border-t border-border">
          <p className="text-muted-2 text-xs">© {currentYear} {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-muted-2">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="marquee border-t border-border py-6 select-none" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <span key={dup} className="inline-flex items-center gap-12 pr-12">
              {["Slow-risen dough", "San Marzano", "Live oak fire", "Hand stretched", "Chelsea, NYC"].map((word) => (
                <span key={word} className="display-2 text-transparent [-webkit-text-stroke:1px_var(--border-strong)]">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
