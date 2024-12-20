"use client";
import Profile from "@/src/assets/about/profile.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { appearsLeft, appearsRight } from "@/src/animation";
import { RoleText } from "../../atoms/role-text";
import { ACCOUNT, IDENTITY } from "@/src/constants/about";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-200 min-h-screen flex items-center">
      <div className="container py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsLeft}
          viewport={{ amount: 0, once: true }}
        >
          <RoleText text="about me" className="mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={appearsLeft}
            viewport={{ amount: 0, once: true }}
            className="bg-white rounded-sm shadow-xl p-4 w-auto"
          >
            <Image
              src={Profile}
              alt="profile"
              width={1000}
              height={1000}
              className="object-cover object-right w-full h-[473px] rounded-sm"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={appearsRight}
            viewport={{ amount: 0, once: true }}
          >
            <h2 className="text-4xl font-bold">I&apos;m Dicky Darmawan</h2>
            <h4 className="capitalize text-xl font-light py-5">
              a lead&nbsp;
              <span className="text-galaxy_core font-semibold">
                front-end developer
              </span>{" "}
              based in{" "}
              <span className="text-galaxy_core font-semibold">batam</span>
            </h4>
            <p className="text-base text-zinc-500">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 mt-10 w-full">
              <div>
                {IDENTITY.map((identity, idx) => (
                  <div key={idx} className="grid grid-cols-2 mb-3 items-center">
                    <div className="text-gray-800 font-medium capitalize text-sm md:text-base xl:text-xs 2xl:text-sm">
                      {identity.title}
                    </div>

                    <div className="pl-4 text-zinc-500 capitalize text-sm md:text-base xl:text-xs 2xl:text-sm border-l border-zinc-400">
                      {identity.subtitle}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                {ACCOUNT.map((account, idx) => (
                  <div key={idx} className="grid grid-cols-2 mb-3 items-center">
                    <div className="text-gray-800 font-medium capitalize text-sm md:text-base xl:text-xs 2xl:text-sm">
                      {account.title}
                    </div>

                    <div className="pl-4 text-zinc-500 border-l border-zinc-400 text-sm md:text-base xl:text-xs 2xl:text-sm">
                      {account.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-start items-center mt-14 xl:mt-10">
              <Link
                href="/Resume_Dicky Darmawan.pdf"
                target="_blank"
                className="uppercase bg-galaxy_core hover:bg-galaxy_dark text-white w-40 h-12 flex justify-center items-center"
              >
                review cv
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
