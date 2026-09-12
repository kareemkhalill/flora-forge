import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Display (Zodiak) and body (General Sans) are loaded from Fontshare in <head>.

export const metadata: Metadata = {
  title: "Flora & Forge | Wood-Fired Pizza in Chelsea",
  description: "A Neapolitan pizzeria on West 18th Street. Dough mixed two days ahead, a short topping list, and every pie fired to order in a wood oven. Book a table.",
  metadataBase: new URL("https://floraforge.com"),
  openGraph: {
    title: "Flora & Forge | Wood-Fired Pizza in Chelsea",
    description: "A Neapolitan pizzeria on West 18th Street. Dough mixed two days ahead, a short topping list, and every pie fired to order in a wood oven.",
    type: "website",
    locale: "en_US",
    siteName: "Flora & Forge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora & Forge | Wood-Fired Pizza in Chelsea",
    description: "A Neapolitan pizzeria on West 18th Street. Dough mixed two days ahead, a short topping list, and every pie fired to order in a wood oven.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Flora & Forge",
  description: "A Neapolitan pizzeria on West 18th Street. Dough mixed two days ahead, a short topping list, and every pie fired to order in a wood oven.",
  url: "https://floraforge.com",
  telephone: "+1-212-555-0147",
  address: {
    "@type": "PostalAddress",
    streetAddress: "128 West 18th Street",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10011",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7412,
    longitude: -74.0017,
  },
  hasMenu: "https://floraforge.com/menu",
  priceRange: "$$",
  servesCuisine: "Pizza, Italian",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "17:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=zodiak@400,500&f[]=satoshi@400,500,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}