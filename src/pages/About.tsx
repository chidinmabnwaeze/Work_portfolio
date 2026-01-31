import aboutimg from "../assets/images/Group 2.png";
import { Download, Briefcase } from "lucide-react";

type Metrics = {
  figure: number;
  name: string;
}
const metrics: Metrics[] = [
  { figure: 3, name: "Organizations" },
  { figure: 5, name: "Projects" },
  { figure: 6, name: "Testimonials" },
  // { figure: 90, name: "Satisfactory Rate" },
];

const About = () => {
  return (
    <main className="flex flex-col justify-center items-center m-15">
      <p>Get to know me</p>
      {/* <span className="bg-fuchsia-950 w-20 h-0.5 mt-2">.</span> */}
      <h1 className="font-bold text-4xl">About Me</h1>
      <div className="flex gap-10 my-10">
        <section className=" w-full items-center relative ">
          <img src={aboutimg} alt="Chidinma" className="rounded-md w-full" />
          <h2 className="text-6xl text-center font-bold text-outline absolute bottom-0 drop-shadow ">WHO IS CHIDINMA NWAEZE ?</h2>
        </section>
        <section className="mt-20 ml-30 mr-">
          <span className="flex gap-3 text-xl">
            <span className=" chidinma text-fuchsia-950 text-3xl">
              Chidinma{" "}
            </span>{" "}
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
              <div key={index} className="mb-4 text-center">
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
            {/* 
            <button className="border-2 border-purple-600 text-purple-600 p-4 rounded flex items-center gap-2 hover:bg-fuchsia-950 hover:text-white transition transform hover:scale-105"> */}
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
