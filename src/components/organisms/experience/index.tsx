import Image from "next/image";
import Blog1 from "@/src/assets/experience/blog-1.jpg";
import Blog2 from "@/src/assets/experience/blog-2.jpg";
import Blog3 from "@/src/assets/experience/blog-3.jpg";

const CARDS = [
  {
    photo: Blog1,
    date: "01 Mar 2024",
    company: "b one consulting",
    label: "Junior Front-End Developer",
    title: "Making the website landing pages",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    photo: Blog2,
    date: "02 Mar 2023",
    company: "b one consulting",
    label: "Junior Front-End Developer",
    title: "Making the website landing pages",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    photo: Blog3,
    date: "02 Mar 2023",
    company: "b one consulting",
    label: "Junior Front-End Developer",
    title: "Making the website landing pages",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="container flex items-center py-28">
      <div className="container">
        <h1 className="text-4xl uppercase font-semibold">experience</h1>
        <div className="my-3 border-[1px] border-teal-600 w-16" />
        <p className="uppercase text-xl font-light text-zinc-500">
          Front-End Developer based in Indonesia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {CARDS.map((card, idx) => (
            <div
              key={idx}
              className="relative h-full pb-16 border border-slate-300 rounded-sm shadow"
            >
              <div className="relative w-full overflow-hidden group">
                <Image
                  src={card.photo}
                  alt="news-10"
                  width={1000}
                  height={1000}
                  className="object-cover object-top h-full group-hover:scale-105 transition-all duration-300 ease-in-out coursor-pointer"
                />
                <div className="h-[337px] md:h-[255px] lg:h-[212px] xl:h-[337px] absolute inset-0 bg-dark bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl capitalize font-semibold text-white mb-3">
                    {card.company}
                  </p>
                </div>

                <span className="absolute right-0 bottom-0 text-sm text-white bg-teal-600 px-4 py-2 rounded-sm">
                  {card.date}
                </span>
              </div>

              <div className="p-5 h-auto flex flex-col justify-center items-start">
                <span className="text-xs text-zinc-600 border border-zinc-500 px-3 py-1 rounded-sm">
                  {card.label}
                </span>

                <p className="text-lg font-semibold mt-3">{card.title}</p>
                <p className="capitalized truncate w-full text-sm text-slate-400 mt-3">
                  {card.subtitle}
                </p>
                <div className="absolute bottom-5">
                  <div className="text-sm w-32 h-10 border border-slate-300 hover:bg-teal-600 transition-colors duration-300 hover:text-white cursor-pointer shadow mt-3">
                    <div className="flex justify-center items-center h-full capitalize">
                      read more
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
