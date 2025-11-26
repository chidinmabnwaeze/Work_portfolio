import img1 from "../assets/images/IMG_1134.JPG"

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "ClockIT Attendance System",
    description:
      "ClockIT is an Attendance Clocking System that tracks employees’ daily attendance, displays a real-time clock, and summarizes all employees with their clock-in times. Employees can also request leave directly from the platform, and it even calculates payroll based on attendance.",
    imageUrl: "../assets/images/IMG_1134.JPG",
  },
];
const Project = ({ id, title, description, imageUrl }: ProjectProps) => {
  return (
    <main className="flex flex-col justify-center items-center m-15 bg-black p-20 text-white">
      <p>Here are some of my projects</p>
      <h1 className="font-bold text-4xl">Projects</h1>
      <section>
        <div className="project-list flex flex-wrap justify-center gap-10 my-10 text-black">
          {/* Project Item 1 */}
          {projects.map((project, index) => (
            <section
              className="project-item bg-white rounded-lg shadow-lg p-6 flex"
              key={index}
            >
              <div className="m-8 flex flex-col justify-center">
              <p className="bg-fuchsia-950 rounded-full w-16 h-16 text-center p-5 text-white">{project.id}</p>
              <h1 className="text-2xl py-5">{project.title}</h1>
                <p>{project.description}</p>
                <button className="p-4 my-6 max-w-2xs text-white rounded bg-fuchsia-950 hover:bg-p">View Project</button>
              </div>

              <div className="max-w-200">
                <img src={img1}alt="Project image" />
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
