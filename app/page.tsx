"use client";
import AboutSection from "@/src/components/organisms/about";
import HomeSection from "@/src/components/organisms/home";
import MySkillsSection from "@/src/components/organisms//about/my-skills";
import ServiceSection from "@/src/components/organisms/service";
import PortfolioSection from "@/src/components/organisms/portfolio";
import TestimonialSection from "@/src/components/organisms/portfolio/testimonial";
import ExperienceSection from "@/src/components/organisms/experience";
import ContactSection from "@/src/components/organisms/contact";
import { ChevronTopIcon } from "@/src/assets/icon/icon-main";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to show/hide the button based on scroll position
  const handleScroll = () => {
    setIsVisible(window.scrollY > 20);
  };

  // Function to scroll to the top
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, topFunction]);

  return (
    <main className="w-full">
      <HomeSection />
      <AboutSection />
      <MySkillsSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
      <ExperienceSection />
      <ContactSection />

      {isVisible && (
        <button
          onClick={topFunction}
          className="fixed bottom-8 right-8 p-2.5 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition duration-300 z-[9999]"
        >
          <ChevronTopIcon />
        </button>
      )}
    </main>
  );
}
