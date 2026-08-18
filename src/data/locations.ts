export interface Location {
  id: string;
  name: string;
  slug: string;
  neighborhood: string;
  address: string;
  phone: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  coordinates: { lat: number; lng: number };
  image: string;
  description: string;
  features: string[];
  privateDining: boolean;
  capacity: number;
  reservationUrl: string;
  menuUrl: string;
}

export const locations: Location[] = [
  {
    id: "chelsea",
    name: "Flora & Forge",
    slug: "chelsea",
    neighborhood: "Chelsea",
    address: "128 West 18th Street, New York, NY 10011",
    phone: "(212) 555-0147",
    hours: {
      monday: "Closed",
      tuesday: "5:00 PM – 10:00 PM",
      wednesday: "5:00 PM – 10:00 PM",
      thursday: "5:00 PM – 10:00 PM",
      friday: "5:00 PM – 11:00 PM",
      saturday: "12:00 PM – 11:00 PM",
      sunday: "12:00 PM – 9:00 PM",
    },
    coordinates: { lat: 40.7412, lng: -74.0017 },
    image: "/images/calabrian-chili.jpg",
    description: "Our wood-fired pizzeria in a restored 1920s Chelsea warehouse. Soaring brick ceilings, original pine beams, and an open kitchen centered around the hearth.",
    features: ["Wood-fired hearth", "Private dining room", "Natural wine bar", "Walk-in counter"],
    privateDining: true,
    capacity: 80,
    reservationUrl: "/reservations",
    menuUrl: "/menu",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getAllLocations(): Location[] {
  return locations;
}