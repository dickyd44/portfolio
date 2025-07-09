"use client";
import { motion } from "framer-motion";
import { appearsTop, appearsBottomOneOnOne } from "@/src/animation";
import Image from "next/image";
import { EXPERIENCE } from "@/src/constants/experience";
import { useState } from "react";
import { RoleText } from "../../atoms/role-text";
import { ButtonSeeMore } from "../../atoms/button-see-more";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
          viewport={{ amount: 0, once: true }}
        >
          <RoleText text="experiences" className="mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {displayExperience.map((experience, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={appearsBottomOneOnOne}
              custom={idx}
              viewport={{ amount: 0, once: true }}
              key={idx}
            >
              <Card className="relative h-full overflow-hidden">
              <div className="relative w-full overflow-hidden group">
                <Image
                  priority
                  src={experience.photo}
                  alt="news-10"
                  width={1000}
                  height={1000}
                  className="object-cover object-top h-[20rem] md:h-[16rem] lg:h-[20rem] xl:h-[16rem] 2xl:h-[20rem] group-hover:scale-105 transition-all duration-300 ease-in-out coursor-pointer"
                />
                <div className="h-full absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center justify-around h-full">
                    <p className="text-xl capitalize font-semibold text-white mb-10">
                      {experience.company}
                    </p>
                  </div>
                </div>

                  <Badge variant="galaxy" className="absolute right-2 bottom-2 text-white bg-galaxy_core">
                  {experience.work}
                  </Badge>
              </div>

                <CardContent className="p-5 pb-16">
                  <Badge variant="outline" className="mb-3">
                  {experience.label}
                  </Badge>

                  <CardTitle className="text-lg capitalize mb-3">
                  {experience.title}
                  </CardTitle>

                  <CardDescription className="text-sm">
                  {expandedIndex[idx]
                    ? experience.subtitle
                    : `${experience.subtitle.substring(0, 50)}...`}
                  </CardDescription>

                <div className="absolute bottom-5">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleExpanded(idx)}
                      className="capitalize"
                    >
                      {expandedIndex[idx] ? "read less" : "read more"}
                    </Button>
                </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <ButtonSeeMore showMore={showMore} setShowMore={setShowMore} />
      </div>
    </section>
  );
}
