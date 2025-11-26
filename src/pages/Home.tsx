import ProfilePic from "../assets/images/chi pic 1.jpg";
import { ArrowUpRight } from "lucide-react";
import About from "./About";
import Project from "./Project";

interface HomeProps {
  heading: string;
  subText: string;
}

// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const App = () => {
//   return (
//     <DotLottieReact
//       src="https://lottie.host/48743c51-ce31-44c0-86de-a0592ee3ae2d/dj6cWEaV1e.lottie"
//       loop
//       autoplay
//     />
//   );
// };

const Home = () => {

  return (
    <>
      <main className="hero flex justify-center gap-30 p-10 h-screen bg-blend-darken bg-fuchsia-950 text-white items-center">
        <section>
          <p className="text-shadow text-xl">Hi There ...</p>
          <h1 className="text-6xl font-bold mt-10">Welcome To My Portfolio</h1>
          <h2 className="italic">
            A Frontend Developer Crafting Engaging Web Experiences
          </h2>
          <p className="pt-10">
            I am a web developer, Frontend Developer, i specialize in ...
            <br />I am a web developer, Frontend Developer, i specialize in ...{" "}
          </p>
          {/* 
          <span>
            <img src="" alt="" />
          </span> */}
          <button className="p-4 mt-4 bg-purple-600 rounded flex items-center gap-2">
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
    </>
  );
};

export default Home;
