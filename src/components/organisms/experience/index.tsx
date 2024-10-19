"use client";
import { motion } from "framer-motion";
import {
  appearsLeft,
  appearsRight,
  appearsBottom,
  appearsTop,
} from "@/src/animation";
import Image from "next/image";
import { EXPERIENCE } from "@/src/constants/experience";
import { useState } from "react";
import { RoleText } from "../../atoms/role-text";
import { ButtonSeeMore } from "../../atoms/button-see-more";

export default function ExperienceSection() {
  const [showMore, setShowMore] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(
    Array(EXPERIENCE.length).fill(false)
  );

  const toggleExpanded = (idx: number) => {
    setExpandedIndex((prev) => {
      const newExpanded = [...prev];
      newExpanded[idx] = !newExpanded[idx];
      return newExpanded;
    });
  };

  const displayExperience = showMore ? EXPERIENCE : EXPERIENCE.slice(0, 3);

  return (
    <section id="experience" className="flex items-center py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsTop}
          viewport={{ amount: 0 }}
        >
          <h1 className="text-4xl uppercase font-semibold">experience</h1>
          <div className="my-3 border-[1px] border-teal-600 w-16" />
          <RoleText text="front-end developer" className="mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {displayExperience.map((experience, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={
                idx % 3 === 0
                  ? appearsLeft
                  : idx % 3 === 1
                  ? appearsBottom
                  : appearsRight
              }
              key={idx}
              className="relative h-full pb-16 border border-slate-300 rounded-sm shadow"
            >
              <div className="relative w-full overflow-hidden group">
                <Image
                  src={experience.photo}
                  alt="news-10"
                  width={1000}
                  height={1000}
                  className="object-cover object-top h-[20rem] md:h-[16rem] lg:h-[20rem] xl:h-[16rem] 2xl:h-[20rem] group-hover:scale-105 transition-all duration-300 ease-in-out coursor-pointer"
                />
                <div className="h-full absolute inset-0 bg-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center justify-around h-full">
                    <p className="text-xl capitalize font-semibold text-white mb-10">
                      {experience.company}
                    </p>
                  </div>
                </div>

                <span className="capitalize absolute right-0 bottom-0 text-sm text-white bg-teal-600 px-4 py-2 rounded-sm">
                  {experience.work}
                </span>
              </div>

              <div className="p-5 h-auto flex flex-col justify-center items-start">
                <span className="text-xs capitalize text-zinc-600 border border-zinc-500 px-3 py-1 rounded-sm">
                  {experience.label}
                </span>

                <p className="text-lg capitalize font-semibold mt-3">
                  {experience.title}
                </p>

                <p className="capitalized w-full text-sm text-slate-400 mt-3">
                  {expandedIndex[idx]
                    ? experience.subtitle
                    : `${experience.subtitle.substring(0, 50)}...`}
                </p>

                <div className="absolute bottom-5">
                  <div className="text-sm w-32 h-10 border border-slate-300 hover:bg-teal-600 transition-colors duration-300 hover:text-white cursor-pointer shadow mt-3">
                    <div
                      onClick={() => toggleExpanded(idx)}
                      className="flex justify-center items-center h-full capitalize"
                    >
                      {expandedIndex[idx] ? "read less" : "read more"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ButtonSeeMore showMore={showMore} setShowMore={setShowMore} />
      </div>
    </section>
  );
}
