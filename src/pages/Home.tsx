import ProfilePic from "../assets/images/chi pic 1.jpg";
import { ArrowUpRight } from "lucide-react";
import About from "./About";
import Project from "./Project";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Skills from "./Skills";
import next from "../assets/logo/next js.jpg"
import react from "../assets/logo/React-icon.svg.png"
import ts from "../assets/logo/Typescript_logo_2020.svg.png"
import vite from "../assets/logo/Vitejs-logo.svg.png"
import Footer from "../components/Footer";

interface HomeProps {
  heading: string;
  subText: string;
}

const Home = () => {
   const logos = [
          {
              name: "Next JS",
              logo : next
          },
           {
              name: "React",
              logo : react
          },
           {
              name: "Typescript",
              logo : ts
          },
           {
              name: "Vite",
              logo : vite
          },
          
      ]
  return (
    <>
      <main className="hero flex justify-center gap-30 p-10 h-screen bg-blend-darken bg-fuchsia-950 text-white items-center">
        <section>
          <span className="text-shadow text-xl flex items-center gap-4">
            <p className="hi text-2xl">Hi There ...</p>
            <DotLottieReact
              src="https://lottie.host/48743c51-ce31-44c0-86de-a0592ee3ae2d/dj6cWEaV1e.lottie"
              loop
              autoplay
              style={{ width: "80px", height: "80px" }}
            />
          </span>
          <h1 className="text-6xl font-bold mt-10">Welcome To My Portfolio</h1>
          <h2 className="italic">
            A Frontend Developer Crafting Engaging Web Experiences
          </h2>
          <p className="pt-10">
            I am a web developer, Frontend Developer, i specialize in ...
            <br /> web development, Frontend Development, i specialize in ...{" "}
          </p>
          
          <span className="flex ">
            {logos.map((item, index)=>(

            <img key= {index} src={item.logo} alt=""  className="w-6 m-2"/>
            ))}
          </span>
          <button className="p-4 mt-4 bg-purple-600 rounded flex items-center gap-2 hover:bg-white hover:text-fuchsia-950 transition transform hover:scale-105 font-bold">
            Contact Me <ArrowUpRight />
          </button>
        </section>
        <section className="bg-fuchsia-800 rounded-full p-1 flex items-center justify-center">
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded-full object-cover w-80 h-80 sm:w-lg sm:h-128"
          />
        </section>
      </main>
      <About />
      <Project />
      <Skills/>
      <Footer/>
    </>
  );
};

export default Home;
