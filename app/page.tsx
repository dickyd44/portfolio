import AboutSection from "@/src/components/organisms/about";
import HomeSection from "@/src/components/organisms/home";
import MySkillsSection from "@/src/components/organisms/my-skills";
import ServiceSection from "@/src/components/organisms/service";

export default function Home() {
  return (
    <main className="w-full">
      <HomeSection />
      <AboutSection />
      <MySkillsSection />
      <ServiceSection />
    </main>
  );
}
