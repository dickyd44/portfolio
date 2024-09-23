import AboutSection from "@/src/components/organisms/about";
import HomeSection from "@/src/components/organisms/home";

export default function Home() {
  return (
    <main className="w-full">
      <HomeSection />
      <AboutSection />
    </main>
  );
}
