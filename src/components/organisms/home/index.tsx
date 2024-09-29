"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { appearsLeft } from "@/src/animation";
import Link from "next/link";

const texts = ["Front-End Developer", "Full-Stack Developer"];

export default function HomeSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeOutDuration = isReversing ? 100 : 100;

    const letterTimeOut = setTimeout(() => {
      if (!isReversing) {
        if (currentLetterIndex < currentText.length) {
          setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        } else {
          setTimeout(() => {
            setIsReversing(true);
          }, 1500);
        }
      } else {
        if (currentLetterIndex > 0) {
          setCurrentLetterIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsReversing(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, timeOutDuration);

    return () => clearTimeout(letterTimeOut);
  }, [currentLetterIndex, currentTextIndex, isReversing]);

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
        <h2 className="text-6xl md:text-7xl font-bold">Dicky Darmawan</h2>
        <h3 className="text-xl md:text-2xl font-medium">
          I Am a Passionate{" "}
          {texts[currentTextIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={index < currentLetterIndex ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.1 }}
              className="underline"
            >
              {letter}
            </motion.span>
          ))}
        </h3>
        <p className="text-base text-zinc-500">
          The dynamics of how users interact with interactive elements within a{" "}
          <br />
          user interface flow chart based on container proportion.
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
