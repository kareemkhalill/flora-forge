import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { SignatureExperience } from "@/components/sections/SignatureExperience";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { Menu } from "@/components/sections/Menu";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <header id="top">
        <Hero />
      </header>
      <main id="main">
        <BrandStory />
        <SignatureExperience />
        <SignatureDishes />
        <Menu />
        <Location />
        <ReservationForm />
      </main>
      <Footer />
    </>
  );
}