import PortfolioImg1 from "@/src/assets/portfolio/portfolio-1.jpg";
import PortfolioImg2 from "@/src/assets/portfolio/portfolio-2.jpg";
import PortfolioImg3 from "@/src/assets/portfolio/portfolio-3.jpg";
import PortfolioImg4 from "@/src/assets/portfolio/portfolio-4.jpg";
import PortfolioImg5 from "@/src/assets/portfolio/portfolio-5.jpg";
import PortfolioImg6 from "@/src/assets/portfolio/portfolio-6.jpg";
import Image from "next/image";

const IMAGES = [
  { photo: PortfolioImg1 },
  { photo: PortfolioImg2 },
  { photo: PortfolioImg3 },
  { photo: PortfolioImg4 },
  { photo: PortfolioImg5 },
  { photo: PortfolioImg6 },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="overflow-hidden relative group">
              <Image
                src={img.photo}
                alt="portfolio"
                width={1000}
                height={1000}
                className="h-[400px] 2xl:h-[420px] xl:h-[350px] lg:h-[290px] md:h-[330px] w-full object-cover rounded-sm group-hover:scale-105 transition-all duration-300 ease-in-out coursor-pointer"
              />
              <div className="z-0 absolute inset-0 bg-black rounded-sm bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p className="text-xl font-semibold text-white mb-3">
                  Our Photography
                </p>
                <p className="text-white">Design</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
