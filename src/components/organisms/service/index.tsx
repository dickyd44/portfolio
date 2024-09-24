import { ComputerIcon } from "@/src/assets/icon/icon-service";
import { TagsIcon } from "@/src/assets/icon/icon-service";
import { ChatIcon } from "@/src/assets/icon/icon-service";
import { DeviceIcon } from "@/src/assets/icon/icon-service";
import { BowIcon } from "@/src/assets/icon/icon-service";
import { ToolIcon } from "@/src/assets/icon/icon-service";

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
  return (
    <section className="bg-slate-200 min-h-screen flex items-center">
      <div className="container py-20">
        <h1 className="text-4xl uppercase font-semibold">My Service</h1>
        <div className="my-3 border-[1px] border-teal-600 w-16" />
        <p className="uppercase text-xl font-light text-zinc-500">
          Front-End Developer based in Indonesia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {CARD_SERVICE.map((card, idx) => (
            <div key={idx} className="bg-white rounded-md p-8">
              <div className="rounded-full p-4 border-dotted border-2 border-teal-500 text-teal-500 w-[86px]">
                {card.icon}
              </div>

              <p className="capitalize font-medium my-3">{card.title}</p>
              <p className="font-normal text-zinc-500">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
