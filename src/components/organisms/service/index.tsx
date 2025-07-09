"use client";
import { CARD_SERVICE } from "@/src/constants/service";
import { motion } from "framer-motion";
import {
  appearsLeft,
  appearsRight,
  appearsBottom,
  appearsTop,
  shakeEffect,
} from "@/src/animation";
import { RoleText } from "../../atoms/role-text";
import { useState } from "react";
import React from "react";
import { SectionWrapper } from "../../atoms/section-wrapper";

export default function ServiceSection() {
  const [truncatedIndex, setTruncatedIndex] = useState(
    Array(CARD_SERVICE.length).fill(false)
  );

  const toggleTruncated = (idx: number) => {
    setTruncatedIndex((prev) => {
      const newTruncated = [...prev];
      newTruncated[idx] = !newTruncated[idx];
      return newTruncated;
    });
  };

  return (
    <SectionWrapper id="service" bgVariant="alternate">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsTop}
          viewport={{ amount: 0, once: true }}
        >
          <RoleText text="services" className="mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CARD_SERVICE.map((card, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              whileHover={shakeEffect}
              variants={
                idx % 3 === 0
                  ? appearsLeft
                  : idx % 3 === 1
                  ? appearsBottom
                  : appearsRight
              }
              viewport={{ amount: 0, once: true }}
              key={idx}
            >
              <div className="cursor-default bg-white dark:bg-gray-800 rounded-sm p-8 hover:bg-galaxy_core hover:border-white hover:text-white group transition-all duration-300">
                <div className="rounded-full p-4 border-dotted border-2 border-galaxy_core text-galaxy_core w-[86px] group-hover:border-white group-hover:text-white transition duration-200 ease-in-out">
                  {React.createElement(card.icon)}
                </div>

                <p className="capitalize font-medium my-3">{card.title}</p>
                <p className="font-normal text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-200">
                  {truncatedIndex[idx]
                    ? card.subtitle
                    : `${card.subtitle.substring(0, 141)}...`}
                </p>
                <span
                  onClick={() => toggleTruncated(idx)}
                  className="text-galaxy_core text-sm underline group-hover:text-white cursor-pointer"
                >
                  {truncatedIndex[idx] ? "Less" : "More"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
    </SectionWrapper>
  );
}
