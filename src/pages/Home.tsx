import ProfilePic from "../assets/images/chi pic 1.jpg";
import { ArrowUpRight } from "lucide-react";
import About from "./About";
import Project from "./Project";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Skills from "./Skills";
import next from "../assets/logo/next js.jpg";
import react from "../assets/logo/React-icon.svg.png";
import ts from "../assets/logo/Typescript_logo_2020.svg.png";
import vite from "../assets/logo/Vitejs-logo.svg.png";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Volunteer from "../components/Volunteer";
import Experience from "../components/Experience";

// interface HomeProps {
//   heading: string;
//   subText: string;
// }

const Home = () => {
  const logos = [
    {
      name: "Next JS",
      logo: next,
    },
    {
      name: "React",
      logo: react,
    },
    {
      name: "Typescript",
      logo: ts,
    },
    {
      name: "Vite",
      logo: vite,
    },
  ];
  return (
    <>
      <main className="hero flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 p-6 md:p-10 min-h-screen bg-blend-darken bg-fuchsia-950 text-white">
        <section className="max-w-2xl text-center md:text-left">
          <span className="text-shadow text-xl flex items-center gap-4 justify-center md:justify-start">
            <p className="hi text-2xl">Hi There ...</p>
            <DotLottieReact
              src="https://lottie.host/48743c51-ce31-44c0-86de-a0592ee3ae2d/dj6cWEaV1e.lottie"
              loop
              autoplay
              style={{ width: "60px", height: "60px" }}
            />
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 md:mt-10">
            Welcome To My Portfolio
          </h1>
          <h2 className="italic mt-2">
            A Frontend Developer Crafting Engaging Web Experiences
          </h2>
          <p className="pt-6 md:pt-10">
            I am a web developer, Frontend Developer, i specialize in ...
            <br /> web development, Frontend Development, i specialize in
            ...{" "}
          </p>

          <span className="flex justify-center md:justify-start mt-4">
            {logos.map((item, index) => (
              <img
                key={index}
                src={item.logo}
                alt={item.name}
                className="w-6 m-2"
              />
            ))}
          </span>
          <div className="flex justify-center md:justify-start">
            <button className="p-4 mt-4 bg-purple-600 rounded flex items-center gap-2 hover:bg-white hover:text-fuchsia-950 transition transform hover:scale-105 font-bold">
              Contact Me <ArrowUpRight />
            </button>
          </div>
        </section>

        <section className="bg-fuchsia-800 rounded-full p-1 flex items-center justify-center mt-6 md:mt-0">
          <div className="w-40 h-40 md:w-80 md:h-80 overflow-hidden rounded-full">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full h-full object-cover block"
            />
          </div>
        </section>
      </main>
      <About />
      <Project />
      <Skills />
      <Experience />
      <Testimonials />
      <Volunteer />
      <Footer />
    </>
  );
};

export default Home;
