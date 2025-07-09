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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <section id="service" className="bg-slate-200 dark:bg-gray-800 min-h-screen flex items-center transition-colors duration-300">
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
              <Card className="cursor-default hover:bg-galaxy_core hover:border-white hover:text-white group transition-all duration-300 h-full">
                <CardHeader>
                  <div className="rounded-full p-4 border-dotted border-2 border-galaxy_core text-galaxy_core w-[86px] group-hover:border-white group-hover:text-white transition duration-200 ease-in-out">
                  {React.createElement(card.icon)}
                  </div>
                  <CardTitle className="capitalize group-hover:text-white">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground group-hover:text-zinc-200 mb-4">
                  {truncatedIndex[idx]
                    ? card.subtitle
                    : `${card.subtitle.substring(0, 141)}...`}
                  </CardDescription>
                  <Button
                    variant="link"
                  onClick={() => toggleTruncated(idx)}
                    className="text-galaxy_core group-hover:text-white p-0 h-auto"
                >
                  {truncatedIndex[idx] ? "Less" : "More"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
