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
import { useScrollToTop } from "@/src/store/scroll-to-top";

export default function Home() {
  const { isVisible, homeRef, scrollToTop } = useScrollToTop();

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
          className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 p-2.5 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition duration-300 z-[9999]"
        >
          <ChevronTopIcon />
        </button>
      )}
    </main>
  );
}
