import project1 from "../assets/Screenshot 2026-01-22 215413.png";
import project2 from "../assets/Screenshot 2026-01-22 215432.png";
import attendance from "../assets/images/Screenshot 2026-02-25 001703.png"
import bayzel from "../assets/images/Screenshot 2026-02-24 230420.png"
import next from "../assets/logo/next js.jpg";

interface Projects {
  img: string;
  name: string;
  description: string;
  button: string;
  skills: [string];
}

export default function Project() {
  const projects: Projects[] = [
    {
      img: project1,
      name: "EduProtos",
      description:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      button: "",
      skills: [next],
    },
    {
      img: attendance,
      name: "Attendance Clocking System",
      description:
        "An attendance clocking system that records when a user clocks in in the timesheet, display live time and date , and calculates payroll based on attendance.",
      button: "https://attendance-system-xi-blush.vercel.app/",
      skills: [next],
    },
    {
      img: project2,
      name: "Communiti by Innov8",
      description:
        "An innovation-centric ecosystem by Innov8 Hub, where experts, inventors, entrepreneurs, and change-makers come together to be supported, gain visibility, collaborate on a shared mission, and showcase their work for local and global economic growth. ",
      button: "https://mycommuniti.org/",
      skills: [next],
    },
    {
      img: project1,
      name: "Danel Nigeria Ltd",
      description:
        "A website for the major suppliers of chemicals to the paint manufacturing industry in Nigeria. Over the years, we have grown from supplying eco-friendly chemicals to almost all the paint manufacturing companies in the country, to becoming a trusted partner in driving innovation and excellence across the sector.",
      button: "https://danelnigerialtd.com/",
      skills: [next],
    },
    {
      img: bayzel,
      name: "Bayzel Integrated Services",
      description:
        "A consultancy, plastic waste recycling and related services website",
      button: "https://www.bayzelintegratedservices.com/",
      skills: [next],
    },
  ];

  return (
    <main
      id="projects"
      className="reveal flex flex-col justify-center items-center m-15 animate-fade-in"
    >
      <p className="mt-10 text-gray-500 animate-slide-down">
        Here are some of my projects.
      </p>
      <h1
        className="font-bold text-4xl animate-slide-down"
        style={{ animationDelay: "0.2s" }}
      >
        Projects
      </h1>

      <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 p-6 m-5 border-stone-800 bg-black w-full">
        {projects.map((project, index) => (
          <div
            className="p_card bg-linear-90 bg-white/15 text-white p-6 m-2 rounded-2xl hover:transform hover:-translate-y-3 hover:transition-smooth transition-smooth hover:shadow-2xl hover:bg-white/25 animate-scale-in"
            key={index}
            style={{ animationDelay: `${0.2 * index}s` }}
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md transition-smooth hover:scale-105"
            />
            <div className="m-4 py-3 ">
              <h2 className="text-2xl my-2 transition-smooth">
                {project.name}
              </h2>
              <p className="transition-smooth">{project.description}</p>
              <button className="bg-fuchsia-950 text-white p-3 mt-5 rounded transition-smooth hover:bg-purple-600 hover:scale-105 hover:shadow-lg">
                <a href={project.button} target="blank">View Project</a>
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
