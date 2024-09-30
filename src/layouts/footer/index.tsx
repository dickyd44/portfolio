import React from "react";

export default function Footer() {
  return (
    <section id="contact" className="bg-dark text-white">
      <div className="container py-10">
        <div className="text-zinc-400 flex flex-col md:flex-row justify-around">
          <p>Designed by Dicky Darmawan</p>
          <p className="capitalize">
            © {new Date().getFullYear()} copyright all right reserved
          </p>
        </div>
      </div>
    </section>
  );
}
