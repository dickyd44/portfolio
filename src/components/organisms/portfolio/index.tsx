"use client";
import PortfolioImg1 from "@/src/assets/portfolio/portfolio-1.jpeg";
import PortfolioImg2 from "@/src/assets/portfolio/portfolio-2.jpeg";
import PortfolioImg3 from "@/src/assets/portfolio/portfolio-3.jpeg";
import PortfolioImg4 from "@/src/assets/portfolio/portfolio-4.jpeg";
import PortfolioImg5 from "@/src/assets/portfolio/portfolio-5.jpeg";
import PortfolioImg6 from "@/src/assets/portfolio/portfolio-6.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { appearsLeft, appearsRight } from "@/src/animation";

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
    project: "UFC - Clone",
    description:
      "A UFC website clone would feature a visually striking homepage, dominated by high-energy imagery of fighters in action, creating an immersive experience for visitors. The landing page could highlight upcoming UFC events with a countdown timer, providing quick access to event details, fighter matchups, and ticket purchasing options.",
    link: "https://ufc-website.vercel.app/",
  },
  {
    photo: PortfolioImg3,
    project: "Vue Portal Jobs",
    description: "Making website dashboard management jobs.",
    link: "#",
  },
  {
    photo: PortfolioImg4,
    project: "Shopify - Clone",
    description:
      "A Shopify website clone would focus on providing a seamless and scalable e-commerce platform for businesses of all sizes. The homepage would feature a clean, modern design with easy navigation, highlighting various product categories and personalized recommendations. The top navigation bar would offer links to manage storefronts, track orders, and access marketing tools.",
    link: "https://shopify-landing-pages.vercel.app/",
  },
  {
    photo: PortfolioImg5,
    project: "Brainwave",
    description:
      "Brainwave website or app clone would center around optimizing mental performance and wellness through brainwave entrainment technology. The landing page would have a calming, minimalist design, featuring visuals like soundwaves or neural patterns to evoke a sense of mindfulness. It would highlight various soundscapes, binaural beats, and guided meditation sessions that are categorized based on different needs—focus, relaxation, sleep, or creativity.",
    link: "https://brainwave-phi-one.vercel.app/",
  },
  {
    photo: PortfolioImg6,
    project: "Not Found",
    description: "There is not yet.",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen flex items-center">
      <div className="container py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsLeft}
          viewport={{ amount: 0 }}
        >
          <h1 className="text-4xl uppercase font-semibold">latest works</h1>
          <div className="my-3 border-[1px] border-teal-600 w-16" />
          <p className="uppercase text-xl font-light text-zinc-500">
            Front-End Developer based in Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {IMAGES.map((img, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={idx % 2 === 0 ? appearsLeft : appearsRight}
              viewport={{ amount: 0 }}
              key={idx}
              className="overflow-hidden relative group"
            >
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
                  <p className="text-white text-center mx-5">
                    {img.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
