import Image from "next/image";
import Hero from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import Services from "@/components/Service";
import Process from '@/components/Process'
import Cta from "@/components/Cta";

export default function Home() {
  return (
<>
    <Hero />
    <Marquee />
    <Services />
    <Process />
    <Cta />
</>
  );
}
