"use client";
import AboutSection from "@/src/components/organisms/about";
import HomeSection from "@/src/components/organisms/home";
import MySkillsSection from "@/src/components/organisms//about/my-skills";
import ServiceSection from "@/src/components/organisms/service";
import PortfolioSection from "@/src/components/organisms/portfolio";
import TestimonialSection from "@/src/components/organisms/portfolio/testimonial";
import ExperienceSection from "@/src/components/organisms/experience";
import ContactSection from "@/src/components/organisms/contact";
import LoadingScreen from "@/src/components/atoms/loading-screen";
import { useScrollToTop } from "@/src/store/scroll-to-top";
import { ButtonScrollToTop } from "@/src/components/atoms/button-scroll-to-top";
import { useLoadingScreen } from "@/src/store/loading-screen";

export default function Home() {
  const { isVisible, homeRef, scrollToTop } = useScrollToTop();
  const { isLoading } = useLoadingScreen();

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main ref={homeRef} className="w-full">
          <HomeSection />
          <AboutSection />
          <MySkillsSection />
          <ServiceSection />
          <PortfolioSection />
          <TestimonialSection />
          <ExperienceSection />
          <ContactSection />

          <ButtonScrollToTop isVisible={isVisible} scrollToTop={scrollToTop} />
        </main>
      )}
    </div>
  );
}
