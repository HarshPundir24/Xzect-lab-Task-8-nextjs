
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import ClientSection from "@/components/ClientSection";
import CounterUp from "@/components/CounterUp";
import ActionSection from "@/components/ActionSection";
import TeamSection from "@/components/TeamSection";
import BrandSection from "@/components/BrandSection";
import BlogPostSection from "@/components/BlogPostSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSlider />
      <FeaturesSection/>
      <AboutSection/>
      <ServiceSection/>
      <ClientSection/>
      <CounterUp/>
      <ActionSection/>
      <TeamSection/>
      <BrandSection/>
      <BlogPostSection/>
    </main>
  );
}
