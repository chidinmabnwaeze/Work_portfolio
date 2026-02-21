import project1 from "../assets/Screenshot 2026-01-22 215413.png";
import project2 from "../assets/Screenshot 2026-01-22 215432.png";
import next from "../assets/logo/next js.jpg";

// interface Projects {
//   img : "",
//   name: string,
//   description: string,
//   skills: []
// }

export default function Project() {
  const projects = [
    {
      img: project1,
      name: "EDUPROTOS",
      description:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      skills: [
        {
          skill: next,
        },
      ],
    },
    {
      img: project2,
      name: "EDUPROTOS",
      description: "",
    },
    {
      img: project1,
      name: "EDUPROTOS",
      description:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      skills: [
        {
          skill: next,
        },
      ],
    },
  ];

  return (
    <main  id="projects" className="reveal flex flex-col justify-center items-center m-15 animate-fade-in">
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
                View Project
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
