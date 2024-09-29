"use client";
import FormContact from "../../molecules/form-contact";
import {
  LocationIcon,
  PhoneIcon,
  EmailIcon,
} from "@/src/assets/icon/icon-contact";
import {
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/src/assets/icon/icon-sosmed";
import { motion } from "framer-motion";
import { appearsLeft, appearsRight, appearsTop } from "@/src/animation";
import Link from "next/link";

const CONTACTS = [
  {
    icon: <LocationIcon />,
    title: "Our Address",
    core_title: "Address",
    subtitle: "Tiban Indah Mc-Dermott Blok K.20",
  },
  {
    icon: <PhoneIcon />,
    title: "Our Phone",
    core_title: "Phone",
    subtitle: "+62 877-7359-2720",
  },
  {
    icon: <EmailIcon />,
    title: "Our Email",
    core_title: "Email",
    subtitle: "dickytwillio@gmail.com",
  },
];

const SOCIAL_MEDIA = [
  {
    platform: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/dicky-darmawan-00b698275/",
  },
  {
    platform: <GithubIcon />,
    link: "https://github.com/dickyd44",
  },
  {
    platform: <InstagramIcon />,
    link: "https://www.instagram.com/dickythepaddy/",
  },
  {
    platform: <FacebookIcon />,
    link: "https://www.facebook.com/profile.php?id=100095615464050",
  },
];
export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-200 flex items-center py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsTop}
          viewport={{ amount: 0 }}
        >
          <h1 className="text-4xl uppercase font-semibold">get in touch</h1>
          <div className="my-3 border-[1px] border-teal-600 w-16" />
          <p className="uppercase text-xl font-light text-zinc-500">
            Front-End Developer based in Indonesia
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-6 mt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={appearsLeft}
            viewport={{ amount: 0 }}
            className="col-span-2"
          >
            <FormContact />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={appearsRight}
            viewport={{ amount: 0 }}
          >
            {CONTACTS.map((contact, idx) => (
              <div key={idx} className="bg-white rounded-sm p-5 w-full mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 p-3 rounded-full text-white">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-medium mb-2">{contact.title}</p>
                    <p className="text-zinc-500">
                      {contact.core_title}: {contact.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-start gap-4 bg-white p-5">
              {SOCIAL_MEDIA.map((sosmed, idx) => (
                <Link
                  href={sosmed.link}
                  key={idx}
                  className="bg-teal-600 p-3 rounded-full text-white hover:bg-teal-700"
                  target="_blank"
                >
                  {sosmed.platform}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
