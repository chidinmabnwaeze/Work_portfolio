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
import Contact from "./Contact";
import { Link } from "react-router-dom";

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
      <main
        id="home"
        className="reveal hero flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 p-6 md:p-10 min-h-screen bg-blend-darken bg-fuchsia-950 text-white"
      >
        <section className="reveal max-w-2xl text-center md:text-left animate-slide-left">
          <span className="text-shadow text-xl flex items-center gap-4 justify-center md:justify-start animate-fade-in">
            <p className="hi text-2xl">Hi There ...</p>
            <DotLottieReact
              src="https://lottie.host/48743c51-ce31-44c0-86de-a0592ee3ae2d/dj6cWEaV1e.lottie"
              loop
              autoplay
              style={{ width: "60px", height: "60px" }}
            />
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 md:mt-10 animate-slide-up transition-smooth">
            Welcome To My Portfolio
          </h1>
          <h2
            className="italic mt-2 animate-slide-up transition-smooth"
            style={{ animationDelay: "0.2s" }}
          >
            A Frontend Developer Crafting Engaging Web Experiences
          </h2>
          <p
            className="pt-6 md:pt-10 animate-slide-up transition-smooth"
            style={{ animationDelay: "0.4s" }}
          >
            I am a software developer with experience in web technologies, cloud
            deployment, and product development. Skilled in React.js, JavaScript, AWS, and
            system troubleshooting, with a strong interest in building scalable
            solutions and supporting technology-driven impact.
          </p>

          <span
            className="flex justify-center md:justify-start mt-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {logos.map((item, index) => (
              <img
                key={index}
                src={item.logo}
                alt={item.name}
                className="w-6 m-2 transition-smooth hover:scale-125 hover:drop-shadow-lg"
              />
            ))}
          </span>
          <div
            className="flex justify-center md:justify-start animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Link to="#contact">
              <button className="p-4 mt-4 bg-purple-600 rounded flex items-center gap-2 hover:bg-white hover:text-fuchsia-950 transition-smooth hover:scale-105 hover:shadow-lg font-bold">
                Contact Me <ArrowUpRight />
              </button>
            </Link>
          </div>
        </section>

        <section className="reveal bg-fuchsia-800 rounded-full p-1 flex items-center justify-center mt-6 md:mt-0 animate-slide-right">
          <div className="w-40 h-40 md:w-120 md:h-120 overflow-hidden rounded-full transition-smooth hover:scale-105 hover:shadow-2xl">
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
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
