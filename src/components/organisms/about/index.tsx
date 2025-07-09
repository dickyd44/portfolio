"use client";
import Profile from "@/src/assets/about/profile.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { appearsLeft, appearsRight } from "@/src/animation";
import { RoleText } from "../../atoms/role-text";
import { ACCOUNT, IDENTITY } from "@/src/constants/about";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-200 dark:bg-gray-800 min-h-screen flex items-center transition-colors duration-300">
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
          >
            <Card className="p-4">
              <Image
                priority
                src={Profile}
                alt="profile"
                width={1000}
                height={1000}
                className="object-cover object-right w-full h-[473px] rounded-sm"
              />
            </Card>
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
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 mt-10 w-full">
              <div>
                {IDENTITY.map((identity, idx) => (
                  <div key={idx} className="flex items-center mb-3">
                    <div className="text-foreground font-medium capitalize text-sm md:text-base xl:text-xs 2xl:text-sm min-w-[100px]">
                      {identity.title}
                    </div>
                    <Separator orientation="vertical" className="mx-4 h-4" />
                    <div className="text-muted-foreground capitalize text-sm md:text-base xl:text-xs 2xl:text-sm">
                      {identity.subtitle}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                {ACCOUNT.map((account, idx) => (
                  <div key={idx} className="flex items-center mb-3">
                    <div className="text-foreground font-medium capitalize text-sm md:text-base xl:text-xs 2xl:text-sm min-w-[100px]">
                      {account.title}
                    </div>
                    <Separator orientation="vertical" className="mx-4 h-4" />
                    <div className="text-muted-foreground text-sm md:text-base xl:text-xs 2xl:text-sm">
                      {account.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-start items-center mt-14 xl:mt-10">
              <Button
                variant="galaxy"
                size="custom"
                asChild
              >
                <Link
                href="/Resume_Dicky Darmawan.pdf"
                target="_blank"
              >
                  REVIEW CV
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
