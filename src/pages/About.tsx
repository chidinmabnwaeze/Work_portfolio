import aboutimg from "../assets/OQCI8I0.jpg";
import { Download, Briefcase } from "lucide-react";

type Metrics = {
  figure: number;
  name: string;
};
const metrics: Metrics[] = [
  { figure: 3, name: "Organizations" },
  { figure: 5, name: "Projects" },
];

const About = () => {
  return (
    <main className="flex flex-col justify-center items-center m-15">
      <p>Get to know me</p>
      <hr/>
      <h1 className="font-bold text-4xl">About Me</h1>
      <div className="flex gap-10 my-10">
        <section>
          <img src={aboutimg} alt="Chidinma" />
        </section>
        <section className="mt-20">
          <span className="flex gap-3 text-xl">
            <blockquote className="text-fuchsia-950 text-4xl italic">
              Chidinma
            </blockquote>
            is a Frontend Developer with a passion for creating beautiful and
            functional web applications. With a strong foundation in HTML, CSS,
            and JavaScript, she brings designs to life with precision and
            creativity.
            <br />
            for creating beautiful and functional web applications. With a
            strong foundation in HTML, CSS, and JavaScript, she brings designs
            to life with precision and creativity.
          </span>
          <div className="metrics flex justify-center gap-10 mt-10">
            {metrics.map((item, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-3xl font-bold text-purple-600">
                  {item.figure}+
                </h2>
                <p className="text-lg">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="buttons flex justify-center gap-10 mt-10">
            <button className="bg-purple-600 text-white p-4 rounded mr-4 flex items-center gap-2 hover:bg-fuchsia-950 transition transform hover:scale-105">
              Hire Me
              <Briefcase />
            </button>

            <button className="border-2 border-purple-600 text-purple-600 p-4 rounded flex items-center gap-2 hover:bg-fuchsia-950 hover:text-white transition transform hover:scale-105">
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
