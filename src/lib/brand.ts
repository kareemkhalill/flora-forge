export const brand = {
  name: "Flora & Forge",
  tagline: "Straight from the Oven.",
  shortTagline: "Wood-fired pizzeria",
  description: "A Neapolitan pizzeria on West 18th Street. We mix the dough two days ahead, keep the topping list short, and fire every pie to order in a wood oven you can see from your table.",
  url: "https://floraforge.com",
  phone: "(212) 555-0147",
  email: "hello@floraandforge.com",
  address: {
    street: "128 West 18th Street",
    city: "New York",
    state: "NY",
    zip: "10011",
    full: "128 West 18th Street, New York, NY 10011",
  },
  coordinates: { lat: 40.7412, lng: -74.0017 },
  hours: {
    monday: "Closed",
    tuesday: "5:00 PM – 10:00 PM",
    wednesday: "5:00 PM – 10:00 PM",
    thursday: "5:00 PM – 10:00 PM",
    friday: "5:00 PM – 11:00 PM",
    saturday: "12:00 PM – 11:00 PM",
    sunday: "12:00 PM – 9:00 PM",
  },
  social: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  priceRange: "$$",
  cuisine: "Pizza, Italian",
} as const;

export type Brand = typeof brand;