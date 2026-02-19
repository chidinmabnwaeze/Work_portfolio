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
    <main className="flex flex-col items-center m-8 px-4">
      <p className="mt-10 text-gray-500">How my experience matters.</p>
      <h1 className="font-bold text-4xl">Experience</h1>

      <section className="w-full max-w-3xl mt-8 space-y-2">
        {exp.map((item, index) => (
          <div
            className="group flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-5 hover:border border-fuchsia-400 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-[#784ab7]/40 transition duration-500"
            key={index}
          >
            <div className="rounded-full bg-purple-600 p-3 md:p-4 text-white flex items-center justify-center mb-3 md:mb-0">
              <Briefcase />
            </div>
            <div className="text-left md:text-right w-full">
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
