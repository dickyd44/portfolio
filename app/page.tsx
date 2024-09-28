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
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;
      const homeSectionBottom =
        homeSection.offsetTop + homeSection.offsetHeight;

      setShowChevron(window.scrollY > homeSectionBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative w-full">
      <HomeSection />
      <AboutSection />
      <MySkillsSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
      <ExperienceSection />
      <ContactSection />

      {showChevron && (
        <Link
          href="/"
          className="fixed bottom-8 right-8 p-2.5 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition duration-300 z-50"
        >
          <ChevronTopIcon />
        </Link>
      )}
    </main>
  );
}
