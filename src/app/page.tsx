// Komponenty
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SoloMatters from "@/components/SoloMatters";
import FreeGuide from "@/components/FreeGuide";
import SneakPeek from "@/components/SneakPeek";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navigation />
        <Hero />
        <SoloMatters />
        <FreeGuide />
        <SneakPeek />
        <Cta />
      <Footer />
    </>
  );
}
