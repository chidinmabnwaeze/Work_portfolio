import img1 from "../assets/images/IMG_1134.JPG"
import reactLogo from "../assets/logo/React-icon.svg.png"
import jsLogo from "../assets/logo/javascript-logo-png_seeklogo-255387.png"
import viteLogo from "../assets/logo/Vitejs-logo.svg.png"

type logoProps = {
  src: string;
  alt: string;
}; 

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  logo: logoProps[];
};

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "ClockIT Attendance System",
    description:
      "ClockIT is an Attendance Clocking System that tracks employees’ daily attendance, displays a real-time clock, and summarizes all employees with their clock-in times. Employees can also request leave directly from the platform, and it even calculates payroll based on attendance.",
    logo: [
      {
        src: jsLogo,
        alt: "JavaScript Logo",
      },
      {
        src: reactLogo,
        alt: "React Logo",
      },
         {
        src: viteLogo,
        alt: "vite Logo",
      },
    ],
    imageUrl: "",
  },
];
const Project = () => {
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
                <p className="bg-fuchsia-950 rounded-full w-16 h-16 text-center p-5 text-white">
                  {project.id}
                </p>
                <h1 className="text-2xl py-5">{project.title}</h1>
                <p>{project.description}</p>
               <ul>
                  {project.logo.map((logoItem, logoIndex) => (
                    <li key={logoIndex} className="inline-block mr-2 my-3">
                      <img  src={logoItem.src} alt={logoItem.alt} className="w-8 h-8" />
                    </li>
                  ))}
               </ul>
                <button className="p-4 my-6 max-w-2xs text-white rounded bg-fuchsia-950 hover:bg-white hover:font-bold hover:text-fuchsia-950 hover:transition-all border-2 border-fuchsia-950">
                  View Project
                </button>
              </div>

              <div className="max-w-200">
                <img src={img1} alt="Project image" />
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
