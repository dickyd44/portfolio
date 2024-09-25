import Profile from "@/src/assets/about/profile.jpeg";
import Image from "next/image";

const IDENTITY = [
  {
    title: "birthday",
    subtitle: "4th august 2000",
  },
  {
    title: "age",
    subtitle: "24 years old",
  },
  {
    title: "residence",
    subtitle: "indonesia",
  },
  {
    title: "address",
    subtitle: "tiban mc'dermott",
  },
];

const ACCOUNT = [
  {
    title: "e-mail",
    subtitle: "dickytwillio@gmail.com",
  },
  {
    title: "phone",
    subtitle: "0877-7359-2720",
  },
  {
    title: "github",
    subtitle: "dickyd44",
  },
  {
    title: "freelance",
    subtitle: "available",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-200 min-h-screen flex items-center">
      <div className="container py-20">
        <div className="container">
          <h1 className="text-4xl uppercase font-semibold">About Me</h1>
          <div className="my-3 border-[1px] border-teal-600 w-16" />
          <p className="uppercase text-xl font-light text-zinc-500">
            Front-End Developer based in Indonesia
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-10">
            <div className="bg-white rounded-sm shadow-xl p-4 w-auto">
              <Image
                src={Profile}
                alt="profile"
                width={1000}
                height={1000}
                className="object-cover object-right w-full h-[473px] rounded-sm"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold">I&apos;m Dicky Darmawan</h2>
              <h4 className="uppercase text-xl font-light py-5">
                a lead&nbsp;
                <span className="text-teal-600">front-end developer</span> based
                in <span className="text-teal-600">batam</span>
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
                    <div
                      key={idx}
                      className="grid grid-cols-2 mb-3 items-center"
                    >
                      <div className="text-gray-800 font-medium capitalize text-sm md:text-base xl:text-[11px] 2xl:text-sm">
                        {identity.title}
                      </div>

                      <div className="pl-4 text-zinc-500 capitalize text-sm md:text-base xl:text-[11px] 2xl:text-sm border-l border-zinc-400">
                        {identity.subtitle}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  {ACCOUNT.map((account, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-2 mb-3 items-center"
                    >
                      <div className="text-gray-800 font-medium capitalize text-sm md:text-base xl:text-[11px] 2xl:text-sm">
                        {account.title}
                      </div>

                      <div className="pl-4 text-zinc-500 capitalize border-l border-zinc-400 text-sm md:text-base xl:text-[11px] 2xl:text-sm">
                        {account.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center md:justify-start items-center mt-14">
                <div className="uppercase bg-teal-600 text-white w-40 h-12 flex justify-center items-center">
                  download cv
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
