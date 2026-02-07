import React from "react";
import { Briefcase, Calendar } from "lucide-react";

type ExperienceProps = {
  role: string;
  org: string;
  date: string;
};

const Experience = () => {
  const exp: ExperienceProps[] = [
    {
      role: "Web Developer",
      org: "Innov8 Hub",
      date: "April 2025 - Present",
    },
    {
      role: "Frontend Developer",
      org: "IPI Solutions",
      date: "September 2023 - March 2025",
    },
    {
      role: "Web Developer",
      org: "Bayzel Integrated Services ",
      date: "November 2024- Present",
    },
    {
      role: "Frontend Developer",
      org: "Gallery Of Code",
      date: "Feburary 2024 - May 2024",
    },
  ];
  return (
    <main className="flex flex-col items-center m-15">
      <p className="mt-10">How my experience matters.</p>
      <h1 className="font-bold text-4xl">Experience</h1>

      <section className=" min-w-3xl mt-8 ">
        {exp.map((item, index) => (
          <div
            className="group flex justify-between items-center p-5 hover:border border-fuchsia-400 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-[#784ab7]/40 transition duration-500 "
            key={index}
          >
            <div className="rounded-full bg-purple-600 p-4 text-white">
              <Briefcase />
            </div>
            <div className=" text-right">
              <h1 className="text-xl text-purple-600">{item.role}</h1>
              <h2 className="text-gray-700">{item.org}</h2>
              <div className="flex items-center text-sm text-gray-400">
                <span className="px-3">{item.date}</span>
                <Calendar width={15} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Experience;
