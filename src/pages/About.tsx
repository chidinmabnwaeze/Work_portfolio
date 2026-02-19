import aboutimg from "../assets/images/Group 2.png";
import { Download, Briefcase } from "lucide-react";

type Metrics = {
  figure: number;
  name: string;
};
const metrics: Metrics[] = [
  { figure: 3, name: "Organizations" },
  { figure: 5, name: "Projects" },
  { figure: 6, name: "Testimonials" },
  // { figure: 90, name: "Satisfactory Rate" },
];

const About = () => {
  return (
    <main className="flex flex-col justify-center items-center my-18 px-4 md:px-0">
      <p className="text-gray-500">Get to know me</p>
      <h1 className="font-bold text-4xl">About Me</h1>
      <div className="flex flex-col justify-center lg:flex-row gap-8 lg:gap-10 my-20 px-4 mx-auto w-full">
        <section className="w-full lg:w-2/5 items-center relative">
          <img
            src={aboutimg}
            alt="Chidinma"
            className="rounded-md w-full lg:h-full object-cover"
          />
          <h2 className="hidden lg:block absolute inset-x-0 bottom-6 lg:bottom-8 text-center text-6xl font-bold text-outline drop-shadow">
            WHO IS CHIDINMA NWAEZE ?
          </h2>
        </section>
        <section className="mt-6 lg:mt-0 lg:ml-6 lg:max-w-2xl w-full">
          <div className="text-xl text-justify">
            <span className="chidinma text-fuchsia-950 text-3xl">
              Chidinma{" "}
            </span>
            is a passionate Frontend Web Developer with experience in building
            and optimizing scalable, user-friendly and impactful websites and
            digital solutions. Skilled in React.js, Vite, JavaScript, WordPress,
            Elementor, AWS, and cPanel, she brings designs to life with
            precision and creativity.
            <br />I focus on delivering scalable solutions with strong attention
            to performance, SEO, and brand compliance. Currently at Innov8 Hub,
            I collaborate across teams to manage website development, server
            migrations, SSL integrations, and digital optimization. Beyond work,
            I mentor young girls in Abuja on STEM, public speaking, and
            problem-solving aligned with the UN SDGs.
            <br />I thrive at the intersection of technology, education, and
            community impact, driven by the belief that digital solutions can
            transform lives and industries. I’m currently advancing my skills
            toward becoming a Full Stack Developer, and exploring opportunities
            to contribute to innovative projects that require both technical
            expertise and creative problem-solving.
          </div>
          <div className="metrics grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {metrics.map((item, index) => (
              <div key={index} className="mb-4 text-center">
                <h2 className="text-3xl font-bold text-purple-600">
                  {item.figure}+
                </h2>
                <p className="text-lg">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="buttons flex flex-col lg:flex-row justify-center lg:justify-start gap-4 mt-10">
            <button className="bg-purple-600 text-white p-4 rounded mr-0 sm:mr-4 flex items-center gap-2 hover:bg-fuchsia-950 transition transform hover:scale-105">
              Hire Me
              <Briefcase />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 p-4 rounded flex items-center gap-2 hover:bg-fuchsia-950 transition transform hover:scale-105 hover:text-white">
              Download CV
              <Download />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
