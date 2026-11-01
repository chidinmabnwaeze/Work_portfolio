import project1 from "../assets/Screenshot 2026-01-22 215413.webp";
import project2 from "../assets/Screenshot 2026-01-22 215432.webp";
// import attendance from "../assets/images/Screenshot 2026-02-25 001703.png"
import bayzel from "../assets/images/Screenshot 2026-02-24 230420.webp"
import next from "../assets/logo/next js.jpg";
import react from "../assets/logo/React-icon.svg.webp";
import eduprotos from "../assets/images/eduprotos.webp"
import makemaker from "../assets/images/makemaker.webp"
import tradeconnect from "../assets/logo/Logo-tradeconnect.webp"

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
      img: eduprotos,
      name: "EduProtos",
      description:
        "A learning Management application where lecturers can login, upload their course content and set quiz for their students.",
      button: "",
      skills: [next],
    },
     {
      img: tradeconnect,
      name: "Tradeconnect",
      description:
        "A digital marketplace for farmers to connect with buyers and sell their farm produce online. It provides a platform for farmers to showcase their products, connect with potential buyers, and facilitate transactions. Buyers can browse through a wide range of agricultural products, place orders, and make payments securely, They can also send complaints called disputes in the app ,to the platform administrators if any.",
      button: "https://www.tradeconnectmarket.com/",
      skills: [react],
    },
    // {
    //   img: attendance,
    //   name: "Attendance Clocking System",
    //   description:
    //     "An attendance clocking system that records when a user clocks in in the timesheet, display live time and date , and calculates payroll based on attendance.",
    //   button: "https://attendance-system-xi-blush.vercel.app/",
    //   skills: [next],
    // },
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
     {
      img: makemaker,
      name: "Make Makers",
      description:
        "An E-commerce store for selling 3D product design tools, filaments etc",
      button: "https://makemaker.com.ng/",
      skills: [next],
    },
  ];

  return (
    <main
      id="projects"
      className="reveal flex flex-col justify-center items-center my-15 mx-4 md:mx-8 xl:mx-15 animate-fade-in"
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

      <section className="grid md:grid-cols-2 gap-4 lg:gap-6 p-3 sm:p-6 mt-5 border-stone-800 bg-black w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            className="p_card bg-linear-90 bg-white/15 text-white p-4 sm:p-6 sm:m-2 rounded-2xl hover:transform hover:-translate-y-3 hover:transition-smooth transition-smooth hover:shadow-2xl hover:bg-white/25 animate-scale-in"
            key={index}
            style={{ animationDelay: `${0.2 * index}s` }}
          >
            <img
              src={project.img}
              alt={project.name}
              loading="lazy"
              decoding="async"
              className="w-full h-48 object-cover rounded-md transition-smooth hover:scale-105"
            />
            <div className="m-1 xl:m-4 py-3">
              <h2 className="text-2xl my-2 transition-smooth">
                {project.name}
              </h2>
              <p className="transition-smooth">{project.description}</p>
              {project.button && (
                <a
                  href={project.button}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-fuchsia-950 text-white p-3 mt-5 rounded transition-smooth hover:bg-purple-600 hover:scale-105 hover:shadow-lg"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
