/**
 * Central image manifest.
 *
 * The files in /public/images are stock photos whose filenames do not describe
 * their contents (e.g. oven.jpg is a bowl of shrimp gumbo). Every slot below
 * points at a file that genuinely depicts what the surrounding copy claims, and
 * each `alt` describes the actual photograph.
 *
 * Sections with no honest asset (the oven, raw dough) are composed
 * typographically instead of carrying a misleading photo. See IMAGE-NOTES.md.
 */

export interface ImageAsset {
  src: string;
  alt: string;
}

/** Leopard-spotted Neapolitan margherita on marble — the strongest asset. */
export const heroImage: ImageAsset = {
  src: "/images/truffle-mushroom.jpg",
  alt: "Neapolitan margherita with a leopard-spotted crust, San Marzano sauce, fior di latte and fresh basil, on a marble counter",
};

/** Two finished margheritas in moody light. */
export const craftImage: ImageAsset = {
  src: "/images/dough.jpg",
  alt: "Two freshly baked margherita pizzas with puffed, charred cornicione",
};

/** Signature pie: stracciatella and greens. */
export const signatureImage: ImageAsset = {
  src: "/images/prosciutto-stracciatella.jpg",
  alt: "Wood-fired pizza finished with torn stracciatella, arugula and basil oil on a wooden board",
};

/**
 * Ingredients. The tomatoes and the oil have genuine ingredient photography;
 * the cheese and chili entries use the closest pie shots in the library.
 */
export const ingredients: Array<{ name: string; text: string; image: ImageAsset }> = [
  {
    name: "San Marzano tomatoes",
    text: "Grown in the volcanic soil near Naples. Sweet, low-acid, crushed by hand.",
    image: {
      src: "/images/san-marzano.jpg",
      alt: "Ripe tomatoes on the vine, beaded with water, on a dark surface",
    },
  },
  {
    name: "Basil & olive oil",
    text: "Basil torn by hand at the end. Extra-virgin oil from a single grove, poured sparingly.",
    image: {
      src: "/images/basil-oil.jpg",
      alt: "Glass cruet of green extra-virgin olive oil beside fresh olives and an olive branch",
    },
  },
  {
    name: "Fior di latte",
    text: "Fresh cow's milk mozzarella, packed the same week. It melts without greasing out and keeps a clean dairy sweetness.",
    image: {
      src: "/images/mortadella-pistachio.jpg",
      alt: "Pizza blanketed in melted cheese, sliced on a wooden board beside vine tomatoes and rosemary",
    },
  },
  {
    name: "Calabrian chili",
    text: "For the pies that want heat. A little oil, a little crunch — enough to lift the tomato without burying it.",
    image: {
      src: "/images/calabrian-chili.jpg",
      alt: "Pizza with a warm red sauce, pulled chicken, red onion and fresh coriander on a dark wooden board",
    },
  },
];

/** Dark-toned pie on a board — carries the oven section's dark panel. */
export const ovenImage: ImageAsset = {
  src: "/images/spicy-honey.jpg",
  alt: "Pizza with a deep red sauce, red onion and coriander, on a dark wooden board",
};

/** Small thumbnails beside the signature pie. */
export const menuThumbs: ImageAsset[] = [
  { src: "/images/hero-pizza.jpg", alt: "Pizza with pulled chicken, red onion and coriander on a dark wooden board" },
  { src: "/images/pizzaiolo.jpg", alt: "Four-cheese pizza sliced on a wooden board" },
  { src: "/images/truffle-mushroom.jpg", alt: "Neapolitan margherita with a blistered crust on marble" },
  { src: "/images/dough.jpg", alt: "Margherita pizza with a puffed, charred edge" },
];

export const roomImages: ImageAsset[] = [
  {
    src: "/images/room1.jpg",
    alt: "Dining room with timber tables, banquette seating and warm pendant lighting",
  },
  {
    src: "/images/room3.jpg",
    alt: "Plated course and wine glasses on a candlelit table during evening service",
  },
];
