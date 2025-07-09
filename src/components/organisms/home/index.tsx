"use client";
import { motion } from "framer-motion";
import { appearsLeft } from "@/src/animation";
import { useHomeStore } from "@/src/store/home";
import Link from "next/link";
import Particles from "@/src/animation/ui/particles";
import { Button } from "@/components/ui/button";

export default function HomeSection() {
  const {
    currentTextIndex,
    currentLetterIndex,
    texts,
    setIsHoveredDicky,
    hoverIndexDicky,
    hoverIndexDarmawan,
    setIsHoveredDarmawan,
  } = useHomeStore();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={appearsLeft}
      viewport={{ amount: 0, once: true }}
      id="home"
      className="container relative flex items-center min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="flex flex-col justify-center space-y-4">
        <h4 className="text-xl md:text-2xl font-medium">Hello there...</h4>

        <motion.h2 className="text-6xl md:text-7xl font-bold cursor-default">
          {"Dicky".split("").map((letter, idx) => (
            <motion.span
              key={`dicky-${idx}`}
              className="inline-block"
              onMouseEnter={() => setIsHoveredDicky(idx)}
              onMouseLeave={() => setIsHoveredDicky(null)}
              animate={{ rotate: hoverIndexDicky === idx ? 360 : 0 }}
              transition={{ duration: 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
          {/* Membuat line break di bawah teks 'Dicky' untuk ukuran layar kecil */}
          &nbsp;
          <br className="block sm:hidden" />
          {"Darmawan".split("").map((letter, idx) => (
            <motion.span
              key={`darmawan-${idx}`}
              className="inline-block"
              onMouseEnter={() => setIsHoveredDarmawan(idx)}
              onMouseLeave={() => setIsHoveredDarmawan(null)}
              animate={{ rotate: hoverIndexDarmawan === idx ? 360 : 0 }}
              transition={{ duration: 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <h3 className="text-xl md:text-2xl font-medium cursor-default">
          I Am a Passionate {""} <br className="block sm:hidden" />
          {texts[currentTextIndex].split("").map((letter, index) => (
            <span key={index} className="relative inline-block">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={index < currentLetterIndex ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0 }}
                className="border-b border-black dark:border-white pb-0.5"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
              {index === currentLetterIndex - 1 && (
                <span className="ml-0.5 border-r-2 border-black dark:border-white" />
              )}
            </span>
          ))}
        </h3>

        <p className="text-base text-zinc-500 dark:text-zinc-400">
          The dynamics of how users interact with interactive elements within a{" "}
          <br />
          user interface layout based on container proportion.
        </p>
        <div className="flex gap-5">
          <Button
            variant="galaxy"
            size="custom"
            asChild
          >
            <Link
            href="#portfolio"
          >
              MY WORK
            </Link>
          </Button>
          <Button
            variant="galaxyOutline"
            size="custom"
            asChild
          >
            <Link
            href="#contact"
          >
              HIRE ME
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#87CEEB", "#ADD8E6", "#B0E0E6"]}
          particleCount={950}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </motion.section>
  );
}
