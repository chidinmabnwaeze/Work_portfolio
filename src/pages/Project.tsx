import project1 from "../assets/Screenshot 2026-01-22 215413.png"
import project2 from "../assets/Screenshot 2026-01-22 215432.png"

export default function Project() {
  const projects = [
    {
      img: project1,
      name: "Eduprotos",
      description: "Lorem ipsum",
    },
     {
      img: project2,
      name: "Eduprotos",
      description: "",
    },
      {
      img: "",
      name: "Eduprotos",
      description: "",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center m-15">
      <p className="mt-10">Here are some of my projects.</p>
      <h1 className="font-bold text-4xl">Projects</h1>

      <section className="grid grid-cols-2 p-20 m-5 border-stone-800 bg-black ">
        {projects.map((project, index) => (
          <div className="p_card bg-linear-90 bg-white p-10 m-2 rounded-2xl hover:transform hover:translate-y-3 hover:transition" key={index}>
            <img src={project.img} alt="project 1" />
            <div className="border-t border-t-gray-200 m-8 py-3 ">
            <h2 className="text-2xl my-2 ">{project.name}</h2>
            <p>{project.description}</p>
            <button className="bg-fuchsia-950 text-white p-3 mt-5 rounded">View Project</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}