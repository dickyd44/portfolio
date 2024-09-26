import PortfolioImg1 from "@/src/assets/portfolio/portfolio-1.jpeg";
import PortfolioImg2 from "@/src/assets/portfolio/portfolio-2.jpg";
import PortfolioImg3 from "@/src/assets/portfolio/portfolio-3.jpg";
import PortfolioImg4 from "@/src/assets/portfolio/portfolio-4.jpg";
import PortfolioImg5 from "@/src/assets/portfolio/portfolio-5.jpg";
import PortfolioImg6 from "@/src/assets/portfolio/portfolio-6.jpg";
import Image from "next/image";
import Link from "next/link";

const IMAGES = [
  {
    photo: PortfolioImg1,
    project: "Bali Smart Investment",
    description:
      "Making website properties villa, apartment, cabin and another properties.",
    link: "https://balismartinvestment.com/",
  },
  {
    photo: PortfolioImg2,
    project: "Bali Smart Investment",
    description:
      "Making website properties villa, apartment, cabin and another properties.",
    link: "#",
  },
  {
    photo: PortfolioImg3,
    project: "Bali Smart Investment",
    description:
      "Making website properties villa, apartment, cabin and another properties.",
    link: "#",
  },
  {
    photo: PortfolioImg4,
    project: "Bali Smart Investment",
    description:
      "Making website properties villa, apartment, cabin and another properties.",
    link: "#",
  },
  {
    photo: PortfolioImg5,
    project: "Bali Smart Investment",
    description:
      "Making website properties villa, apartment, cabin and another properties.",
    link: "#",
  },
  {
    photo: PortfolioImg6,
    project: "Bali Smart Investment",
    description:
      "Making website properties villa, apartment, cabin and another properties.",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen flex items-center">
      <div className="container py-20">
        <h1 className="text-4xl uppercase font-semibold">latest works</h1>
        <div className="my-3 border-[1px] border-teal-600 w-16" />
        <p className="uppercase text-xl font-light text-zinc-500">
          Front-End Developer based in Indonesia
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="overflow-hidden relative group">
              <Link href={img.link} target="_blank">
                <Image
                  src={img.photo}
                  alt="portfolio"
                  width={1000}
                  height={1000}
                  className="h-[390px] 2xl:h-[380px] xl:h-[330px] lg:h-[280px] md:h-[350px] w-full object-cover rounded-sm group-hover:scale-105 transition-all duration-300 ease-in-out coursor-pointer"
                />
                <div className="z-0 absolute inset-0 bg-black rounded-sm bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <p className="capitalize text-xl font-semibold text-white mb-3">
                    {img.project}
                  </p>
                  <p className="text-white text-center">{img.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
