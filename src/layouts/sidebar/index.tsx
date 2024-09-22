"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// import NavbarDropdown from "./NavbarDropdown";

const SIDEBAR_LINK = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Experience",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
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
    <nav className="relative">
      <div className="h-screen w-[200px] p-5 z-20 bg-sky-700 relative">
        <div className="flex flex-col h-full">
          {/* icon */}
          <h1 className="text-center text-white mb-5 font-semibold uppercase border-b border-gray-500 pb-4">
            Dicky Darmawan
          </h1>

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

          {/* menu */}
          <div className="flex flex-col items-center text-white text-sm lg:text-base font-body w-full">
            {SIDEBAR_LINK.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                className="navlink border-b border-gray-800 pb-4 w-full text-center mb-5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* button */}
          <div className="md:flex justify-around items-center text-sm lg:text-base font-head font-medium">
            <a href="#">
              <p className="text-white underline cursor-pointer">Login</p>
            </a>
          </div>
        </div>
      </div>

      {/* navbar mobile menu */}
      {/* <NavbarDropdown isOpen={isOpen} /> */}
    </nav>
  );
}
