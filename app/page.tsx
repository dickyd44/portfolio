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
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);

  // Function to show/hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main ref={homeRef} className="w-full">
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
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2.5 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition duration-300 z-[9999]"
        >
          <ChevronTopIcon />
        </button>
      )}
    </main>
  );
}
