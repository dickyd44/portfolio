"use client";
import { ComputerIcon } from "@/src/assets/icon/icon-service";
import { TagsIcon } from "@/src/assets/icon/icon-service";
import { ChatIcon } from "@/src/assets/icon/icon-service";
import { DeviceIcon } from "@/src/assets/icon/icon-service";
import { BowIcon } from "@/src/assets/icon/icon-service";
import { ToolIcon } from "@/src/assets/icon/icon-service";
import { motion } from "framer-motion";

const CARD_SERVICE = [
  {
    icon: <ComputerIcon />,
    title: "unique design",
    subtitle:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
  },
  {
    icon: <TagsIcon />,
    title: "different layouts",
    subtitle:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
  },
  {
    icon: <ChatIcon />,
    title: "make it simple",
    subtitle:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
  },
  {
    icon: <DeviceIcon />,
    title: "responsives",
    subtitle:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
  },
  {
    icon: <BowIcon />,
    title: "testing and debugging",
    subtitle:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
  },
  {
    icon: <ToolIcon />,
    title: "advanced options",
    subtitle:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
  },
];

export default function ServiceSection() {
  const appearsLeft = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.1 },
    },
    hidden: { opacity: 0, x: -100 },
  };

  const appearsRight = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.1 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  const appearsTop = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.1 },
    },
    hidden: { opacity: 0, y: -100 },
  };

  const appearsBottom = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.1 },
    },
    hidden: { opacity: 0, y: 100 },
  };

  const shakeEffect = {
    scale: 1.05,
    rotate: [0, -2, -2, -2, -2, 0],
    transition: { type: "spring", stiffness: 300, damping: 5 },
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
          <p className="uppercase text-xl font-light text-zinc-500">
            Front-End Developer based in Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
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
                <p className="font-normal text-zinc-500 group-hover:text-zinc-200">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
