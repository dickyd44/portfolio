"use client";
import { motion } from "framer-motion";
import { appearsLeft } from "@/src/animation";
import { useHomeStore } from "@/src/store/home";
import Link from "next/link";

export default function HomeSection() {
  const {
    currentTextIndex,
    currentLetterIndex,
    texts,
    setIsHovered,
    hoverIndex,
  } = useHomeStore();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={appearsLeft}
      viewport={{ amount: 0 }}
      id="home"
      className="container flex items-center min-h-screen"
    >
      <div className="flex flex-col justify-center space-y-4">
        <h4 className="text-xl md:text-2xl font-medium">Hello there...</h4>

        <motion.h2 className="text-6xl md:text-7xl font-bold cursor-default">
          {"Dicky Darmawan".split("").map((letter, idx) => (
            <motion.span
              key={idx}
              style={{ display: "inline-block" }}
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
              animate={{ rotate: hoverIndex === idx ? 360 : 0 }}
              transition={{ duration: 0.1 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>

        <h3 className="text-xl md:text-2xl font-medium cursor-default">
          I Am a Passionate{" "}
          {texts[currentTextIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={index < currentLetterIndex ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0 }}
              className="underline"
            >
              {letter}
            </motion.span>
          ))}
        </h3>

        <p className="text-base text-zinc-500">
          The dynamics of how users interact with interactive elements within a{" "}
          <br />
          user interface layout based on container proportion.
        </p>
        <div className="flex gap-5">
          <Link
            href="#portfolio"
            className="bg-teal-600 hover:bg-teal-800 w-32 h-12 flex items-center justify-center"
          >
            <span className="uppercase text-white">my work</span>
          </Link>
          <Link
            href="#contact"
            className="border-2 border-teal-600 hover:bg-teal-600 text-teal-600 hover:text-white w-32 h-12 flex items-center justify-center"
          >
            <span className="uppercase">hire me</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
