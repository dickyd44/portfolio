import AboutSection from "@/src/components/organisms/about";
import HomeSection from "@/src/components/organisms/home";
import MySkillsSection from "@/src/components/organisms//about/my-skills";
import ServiceSection from "@/src/components/organisms/service";
import PortfolioSection from "@/src/components/organisms/portfolio";
import TestimonialSection from "@/src/components/organisms/portfolio/testimonial";
import ExperienceSection from "@/src/components/organisms/experience";
import ContactSection from "@/src/components/organisms/contact";

export default function Home() {
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
    </main>
  );
}
