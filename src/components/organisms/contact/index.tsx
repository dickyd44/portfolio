"use client";
import FormContact from "../../molecules/form-contact";
import { CONTACTS, SOCIAL_MEDIA } from "@/src/constants/contact";
import { motion } from "framer-motion";
import { appearsLeft, appearsRightOneOnOne, appearsTop } from "@/src/animation";
import Link from "next/link";
import { RoleText } from "../../atoms/role-text";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-200 dark:bg-gray-800 flex items-center py-28 transition-colors duration-300">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsTop}
          viewport={{ amount: 0, once: true }}
        >
          <RoleText text="get in touch" className="mb-10" />
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={appearsLeft}
            viewport={{ amount: 0, once: true }}
            className="col-span-2"
          >
            <FormContact />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={appearsRightOneOnOne}
            viewport={{ amount: 0, once: true }}
          >
            {CONTACTS.map((contact, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={appearsRightOneOnOne}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0, once: true }}
              >
                <Card className="p-5 w-full mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-galaxy_core p-3 rounded-full text-white">
                    {React.createElement(contact.icon)}
                  </div>
                  <div>
                    <p className="font-medium mb-2">{contact.title}</p>
                      <p className="text-muted-foreground">
                      {contact.core_title}: {contact.subtitle}
                    </p>
                  </div>
                </div>
                </Card>
              </motion.div>
            ))}
            <motion.div
              custom={CONTACTS.length}
              variants={appearsRightOneOnOne}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: true }}
            >
              <Card className="flex justify-center items-start gap-4 p-5">
              {SOCIAL_MEDIA.map((sosmed, idx) => (
                <Button
                  variant="galaxy"
                  size="icon"
                  asChild
                  href={sosmed.link}
                  key={idx}
                  target="_blank"
                >
                  <Link href={sosmed.link} target="_blank">
                  {React.createElement(sosmed.platform)}
                  </Link>
                </Button>
              ))}
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
