import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import AboutSectionTwo from "./components/AboutSectionTwo";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection sectionId="about-section-1" />
      <AboutSectionTwo sectionId="about-section-2" />
    </>
  );
}
