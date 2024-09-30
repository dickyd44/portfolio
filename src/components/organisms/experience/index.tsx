"use client";
import { motion } from "framer-motion";
import {
  appearsLeft,
  appearsRight,
  appearsBottom,
  appearsTop,
} from "@/src/animation";
import Image from "next/image";
import BOneConsulting from "@/src/assets/experience/b-one.jpeg";
import TotalPrint from "@/src/assets/experience/total-print.jpg";
import FamilyCoffee from "@/src/assets/experience/barista.jpg";
import { useState } from "react";
import { RoleText } from "../../atoms/role-text";

const CARDS = [
  {
    photo: BOneConsulting,
    date: "01 Mar 2024",
    company: "b one consulting",
    label: "junior front-end developer",
    title: "making the website landing pages",
    subtitle:
      "For 6 months, I worked on a website project, namely Bali Smart Investment, and where I made it page by page, starting from home, services and so on.",
  },
  {
    photo: TotalPrint,
    date: "02 June 2022",
    company: "pt. total print indonesia",
    label: "technician engineer",
    title: "service machine photocopy",
    subtitle:
      "For one year I worked as a technician engineer, that is, every day I serviced the client's photocopier machine if there was a problem then after completing repairs, I reported it to the admin.",
  },
  {
    photo: FamilyCoffee,
    date: "03 August 2023",
    company: "family coffee",
    label: "barista",
    title: "service customer making good coffee",
    subtitle:
      "During the 7 months I was a barista, I learned a lot there how to brew coffee properly and correctly, and there were also many things I could learn there.",
  },
];

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState(
    Array(CARDS.length).fill(false)
  );

  const toggleExpanded = (idx: number) => {
    setExpandedIndex((prev) => {
      const newExpanded = [...prev];
      newExpanded[idx] = !newExpanded[idx];
      return newExpanded;
    });
  };

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
          <RoleText
            text="front-end developer based in indonesia"
            className="mb-10"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {CARDS.map((card, idx) => (
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
                  src={card.photo}
                  alt="news-10"
                  width={1000}
                  height={1000}
                  className="object-cover object-top h-full group-hover:scale-105 transition-all duration-300 ease-in-out coursor-pointer"
                />
                <div className="h-full absolute inset-0 bg-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center justify-around h-full">
                    <p className="text-xl capitalize font-semibold text-white mb-10">
                      {card.company}
                    </p>
                  </div>
                </div>

                <span className="absolute right-0 bottom-0 text-sm text-white bg-teal-600 px-4 py-2 rounded-sm">
                  {card.date}
                </span>
              </div>

              <div className="p-5 h-auto flex flex-col justify-center items-start">
                <span className="text-xs capitalize text-zinc-600 border border-zinc-500 px-3 py-1 rounded-sm">
                  {card.label}
                </span>

                <p className="text-lg capitalize font-semibold mt-3">
                  {card.title}
                </p>

                <p className="capitalized w-full text-sm text-slate-400 mt-3">
                  {expandedIndex[idx]
                    ? card.subtitle
                    : `${card.subtitle.substring(0, 50)}...`}
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
      </div>
    </section>
  );
}
