"use client";
import {
  CompactDiscIcon,
  AwardIcon,
  CoffeeIcon,
  FlagIcon,
} from "@/src/assets/icon/icon-skills";
import { motion } from "framer-motion";
import { appearsLeft, appearsRight } from "@/src/animation";
import { RoleText } from "@/src/components/atoms/role-text";

const skills = [
  { title: "Next.JS", percentage: 92 },
  { title: "TailwindCSS", percentage: 85 },
  { title: "Vue.JS", percentage: 86 },
  { title: "Laravel", percentage: 88 },
];

const achievements = [
  { icon: <CompactDiscIcon />, title: "80 Albums Listened" },
  { icon: <AwardIcon />, title: "1 Real-Projects Finished" },
  { icon: <CoffeeIcon />, title: "3 Cups Per/Day Coffee" },
  { icon: <FlagIcon />, title: "1 Cities Visited" },
];

export default function MySkillsSection() {
  return (
    <section className="container mx-auto py-24">
      {/* Skills Section */}
      <div className="flex flex-col xl:flex-row gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsLeft}
          viewport={{ amount: 0 }}
          className="w-full"
        >
          <h1 className="text-4xl uppercase font-semibold">My Skills</h1>
          <div className="my-3 border-[1px] border-teal-600 w-16" />
          <RoleText
            text="front-end developer based in indonesia"
            className="mb-8"
          />
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1.5">
                <span className="font-normal">{skill.title}</span>
                <span className="text-zinc-600 font-normal">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-light rounded-full h-2">
                <div
                  className="bg-teal-600 h-2 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsRight}
          viewport={{ amount: 0 }}
          className="grid grid-cols-2 gap-4 w-full"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-2 border-teal-600 text-teal-600 rounded-lg p-4 text-center"
            >
              <div className="text-3xl mb-2 mr-2">{achievement.icon}</div>
              <div className="text-base font-normal capitalize text-gray-800">
                {achievement.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
