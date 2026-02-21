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
    <main  id="experience" className="reveal flex flex-col items-center m-8 px-4 animate-fade-in">
      <p className="mt-10 text-gray-500 animate-slide-down">
        How my experience matters.
      </p>
      <h1
        className="font-bold text-4xl animate-slide-down"
        style={{ animationDelay: "0.2s" }}
      >
        Experience
      </h1>

      <section className="w-full max-w-3xl mt-8 space-y-2">
        {exp.map((item, index) => (
          <div
            className="group flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-5 hover:border border-fuchsia-400 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-[#784ab7]/40 transition-smooth duration-500 animate-slide-right"
            key={index}
            style={{ animationDelay: `${0.15 * index}s` }}
          >
            <div className="rounded-full bg-purple-600 p-3 md:p-4 text-white flex items-center justify-center mb-3 md:mb-0 transition-smooth group-hover:scale-110 group-hover:bg-fuchsia-950">
              <Briefcase />
            </div>
            <div className="text-left md:text-right w-full">
              <h1 className="text-xl text-purple-600 transition-smooth group-hover:text-fuchsia-950">
                {item.role}
              </h1>
              <h2 className="text-gray-700 transition-smooth">{item.org}</h2>
              <div className="flex items-center text-sm text-gray-400 transition-smooth">
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
