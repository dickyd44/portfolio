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
    <section
      id="service"
      className="bg-slate-200 min-h-screen flex items-center"
    >
      <div className="container py-20">
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
              <div className="cursor-default bg-white rounded-sm p-8 hover:bg-teal-500 hover:border-white hover:text-white group">
                <div className="rounded-full p-4 border-dotted border-2 border-teal-600 text-teal-600 w-[86px] group-hover:border-white group-hover:text-white transition duration-200 ease-in-out">
                  {React.createElement(card.icon)}
                </div>

                <p className="capitalize font-medium my-3">{card.title}</p>
                <p className="font-normal text-sm text-zinc-600 group-hover:text-zinc-200">
                  {truncatedIndex[idx]
                    ? card.subtitle
                    : `${card.subtitle.substring(0, 141)}...`}
                </p>
                <span
                  onClick={() => toggleTruncated(idx)}
                  className="text-teal-600 text-sm underline group-hover:text-white cursor-pointer"
                >
                  {truncatedIndex[idx] ? "Less" : "More"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
