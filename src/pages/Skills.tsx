import next from "../assets/logo/next js.jpg";
import react from "../assets/logo/React-icon.svg.png";
import aws from "../assets/logo/Amazon_Web_Services-Logo.wine.png";
import js from "../assets/logo/javascript-logo-png_seeklogo-255387.png";
import ts from "../assets/logo/Typescript_logo_2020.svg.png";
import vite from "../assets/logo/Vitejs-logo.svg.png";
import mongodb from "../assets/logo/png-transparent-mongodb-plain-wordmark-logo-icon.png";

// interface logos {
// name: string,

// }
const Skills = () => {
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
      name: "AWS",
      logo: aws,
    },
    {
      name: "Javascript",
      logo: js,
    },
    {
      name: "Typescript",
      logo: ts,
    },
    {
      name: "Vite",
      logo: vite,
    },
    {
      name: "MongoDB",
      logo: mongodb,
    },
    {
      name: "CPanel",
      logo: aws,
    },
  ];
  return (
    <main className="flex flex-col justify-center items-center m-15">
      <p>These are the skills I have</p>
      <h1 className="font-bold text-4xl">My Skills</h1>

      <section className="flex flex-col items-center gap-10 my-10 w-full px-4">
        <div className="metrics grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 w-full max-w-4xl">
          {logos.map((item, index) => (
            <div
              key={index}
              className="border p-5 rounded border-gray-200 flex flex-col items-center hover:transform hover:translate-y-3 hover:bg-fuchsia-200 transition"
            >
              <img src={item.logo} alt={item.name} className="w-10" />
              <p className="text-lg mt-2 text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;
