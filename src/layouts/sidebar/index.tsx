"use client";
import { useEffect, useState } from "react";
import { HomeIcon } from "@/src/assets/icon/icon-sidebar";
import { AboutIcon } from "@/src/assets/icon/icon-sidebar";
import { ServiceIcon } from "@/src/assets/icon/icon-sidebar";
import { PortfolioIcon } from "@/src/assets/icon/icon-sidebar";
import { ExperienceIcon } from "@/src/assets/icon/icon-sidebar";
import { ContactIcon } from "@/src/assets/icon/icon-sidebar";
// import NavbarDropdown from "./NavbarDropdown";

const SIDEBAR_LINK = [
  {
    name: "Home",
    link: "#home",
    icon: <HomeIcon />,
  },
  {
    name: "About me",
    link: "#",
    icon: <AboutIcon />,
  },
  {
    name: "Service",
    link: "#",
    icon: <ServiceIcon />,
  },
  {
    name: "Portfolio",
    link: "#",
    icon: <PortfolioIcon />,
  },
  {
    name: "Experience",
    link: "#",
    icon: <ExperienceIcon />,
  },
  {
    name: "Contact",
    link: "#",
    icon: <ContactIcon />,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.addEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <aside className="fixed hidden md:block">
      <div className="h-screen w-0 md:w-24 z-3 bg-white shadow-2xl">
        <div className="flex flex-col">
          {/* icon */}
          <div className="h-11 bg-teal-600 flex items-center justify-center">
            <h1 className="text-center text-white font-semibold">dicky.</h1>
          </div>

          {/* menu */}
          <div className="flex flex-col items-center text-black uppercase font-body w-full h-20">
            {SIDEBAR_LINK.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                className="nav-link border-b border-zinc-200 py-3 w-full text-center hover:text-teal-600"
              >
                <div className="flex justify-center items-center mb-1">
                  {link.icon}
                </div>
                <span className="text-xs">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* humberger */}
      {/* <div
          onClick={handleOpen}
          className={`${
            isOpen ? "open" : ""
          } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
        >
          <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
          <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
        </div> */}

      {/* navbar mobile menu */}
      {/* <NavbarDropdown isOpen={isOpen} /> */}
    </aside>
  );
}
