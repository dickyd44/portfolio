"use client";
import {
  ComputerIcon,
  TagsIcon,
  ChatIcon,
  DeviceIcon,
  BowIcon,
  ToolIcon,
} from "@/src/assets/icon/icon-service";
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

const CARD_SERVICE = [
  {
    icon: <ComputerIcon />,
    title: "unique design",
    subtitle:
      "Could you clarify what type of design you'd like a description of? For example, are you looking for a unique design description for a website, a user interface, a logo, or something else? Feel free to share more details!",
  },
  {
    icon: <TagsIcon />,
    title: "different layouts",
    subtitle:
      "Design layouts can be categorized into different types, each with a unique function. The Grid Layout organizes content into rows and columns for consistency, while the Asymmetrical Layout offers a creative, dynamic look. The Single-Column Layout simplifies content into a vertical flow, ideal for mobile or long-form reading, and the Split-Screen Layout contrasts two sections on one screen, often used for landing pages.",
  },
  {
    icon: <ChatIcon />,
    title: "make it simple",
    subtitle:
      "To create a simple design and layout, focus on a clean and organized structure. Start with a clear hierarchy, using headings and subheadings to guide the user through the content. Choose a limited color palette to maintain visual harmony, and utilize ample white space to enhance readability.",
  },
  {
    icon: <DeviceIcon />,
    title: "responsives",
    subtitle:
      "Finally, ensure that the layout is responsive, providing a seamless experience across different devices. Prioritize essential information and features, streamlining the design to eliminate unnecessary elements and distractions.",
  },
  {
    icon: <BowIcon />,
    title: "testing and debugging",
    subtitle:
      "Testing and debugging are vital in software development. Testing identifies defects through methods like unit and integration testing, often using automated tests for efficiency.  Debugging diagnoses and fixes errors found during testing by analyzing error messages and isolating issues. Together, these processes ensure high-quality software and improve user satisfaction.",
  },
  {
    icon: <ToolIcon />,
    title: "advanced options",
    subtitle:
      "Advanced options refer to features that provide users with enhanced control and customization over a system or application. These options typically include settings that allow for fine-tuning performance, adjusting user interfaces, and integrating additional functionalities.",
  },
];

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
          viewport={{ amount: 0 }}
        >
          <h1 className="text-4xl uppercase font-semibold">My Service</h1>
          <div className="my-3 border-[1px] border-teal-600 w-16" />
          <RoleText
            text="front-end developer based in indonesia"
            className="mb-10"
          />
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
              viewport={{ amount: 0 }}
              key={idx}
            >
              <div className="cursor-default bg-white rounded-sm p-8 hover:bg-teal-500 hover:border-white hover:text-white group">
                <div className="rounded-full p-4 border-dotted border-2 border-teal-600 text-teal-600 w-[86px] group-hover:border-white group-hover:text-white transition duration-300 ease-in-out">
                  {card.icon}
                </div>

                <p className="capitalize font-medium my-3">{card.title}</p>
                <p className="font-normal text-sm text-zinc-600 group-hover:text-zinc-200">
                  {truncatedIndex[idx]
                    ? card.subtitle
                    : `${card.subtitle.substring(0, 150)}...`}
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
