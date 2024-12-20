"use client";
import FormContact from "../../molecules/form-contact";
import { CONTACTS, SOCIAL_MEDIA } from "@/src/constants/contact";
import { motion } from "framer-motion";
import { appearsLeft, appearsRightOneOnOne, appearsTop } from "@/src/animation";
import Link from "next/link";
import { RoleText } from "../../atoms/role-text";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-200 flex items-center py-28">
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
                className="bg-white rounded-sm p-5 w-full mb-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-galaxy_core p-3 rounded-full text-white">
                    {React.createElement(contact.icon)}
                  </div>
                  <div>
                    <p className="font-medium mb-2">{contact.title}</p>
                    <p className="text-zinc-500">
                      {contact.core_title}: {contact.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="flex justify-center items-start gap-4 bg-white p-5"
              initial="hidden"
              whileInView="visible"
              variants={appearsRightOneOnOne}
              custom={CONTACTS.length}
              viewport={{ amount: 0, once: true }}
            >
              {SOCIAL_MEDIA.map((sosmed, idx) => (
                <Link
                  href={sosmed.link}
                  key={idx}
                  className="bg-galaxy_core p-3 rounded-full text-white hover:bg-galaxy_dark"
                  target="_blank"
                >
                  {React.createElement(sosmed.platform)}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
