export const brand = {
  name: "Flora & Forge",
  tagline: "Straight from the Oven.",
  shortTagline: "Wood-fired pizzeria",
  description: "48-hour fermented dough, San Marzano tomatoes, 900°F wood-fired oven. Hand-stretched pizza baked to order in Chelsea.",
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