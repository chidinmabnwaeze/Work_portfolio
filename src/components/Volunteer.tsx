// import evan from "../assets/images/image.png";
import { UserStar } from "lucide-react";
import mentor1 from "../assets/images/mentor 1.jpeg";
import mentor2 from "../assets/images/mentor 2.jpeg";
// import mentor3 from "../assets/images/mentor 3.jpeg";
import mentor6 from "../assets/images/mentor 6.jpeg";
// import pm1 from "../assets/images/pm 1.jpeg";
// import pm2 from "../assets/images/pm 2.jpeg";
import pm3 from "../assets/images/pm 3.jpeg";
import pm4 from "../assets/images/pm 4.jpeg";
// import pm5 from "../assets/images/pm 5.jpeg";
// import pm6 from "../assets/images/pm 6.jpeg";
import pm7 from "../assets/images/pm 7.jpeg";
// import { useEffect, useState, useRef, type ReactNode } from "react";

interface VolunteerProps {
  title: string;
  org: string;
  duration: string;
  content: React.ReactNode;
  image?: string[];
}

const Volunteer = () => {
  const volunteer: VolunteerProps[] = [
    {
      title: "Mentor",
      org: "Technovation",
      duration: "1-01-2023",
      content: (
        <>
          "As a mentor with Technovation Girls, I guide secondary school girls
          in developing technology-based solutions that address real-world
          challenges aligned with the United Nations Sustainable Development
          Goals (SDGs). I support participants through ideation, teamwork,
          prototyping, pitching, and public speaking, helping them build
          confidence, leadership, and problem-solving skills while encouraging
          more girls to pursue careers in science and technology."
        </>
      ),
      image: [mentor1, mentor2, mentor6],
    },
    {
      title: "Project Manager",
      org: "Innov8 Hub",
      duration: "1-01-2023",
      content: (
        <>
          "At Innov8Hub, I serve as the Acting Head of Department and Project
          Manager, where I oversee digital projects, coordinate teams, manage
          timelines, and ensure successful execution of technology initiatives.
          My role includes supervising website development and optimization,
          managing project workflows, collaborating with stakeholders,
          supporting innovation programs, and driving operational efficiency
          within the organization."
        </>
      ),
      image: [pm4, pm7, pm3],
    },
    {
      title: "Member",
      org: "Rotaract Club",
      duration: "1-01-2023 till date",
      content: (
        <>
          "I am also an active member of Rotaract, where I contribute to
          community development, youth empowerment, leadership, and
          service-oriented initiatives aimed at creating positive social impact.
          Through volunteering and collaborative projects, I continue to support
          initiatives that promote education, personal growth, and sustainable
          community development."
        </>
      ),
    },
  ];

  // const [slide, setSlide] = useState(0);

  // const nextSlide = (length:number) => {
  //   setSlide((prev) => (prev + 1) % length);
  // };
  // const prevSlide = (length : number) => {
  //   setSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSlide((prev) => (prev + 1) % 2);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <main
      id="volunteer"
      className="volunteer-container flex flex-col justify-center items-center max-w-5xl mx-auto py-12 px-4"
    >
      <p className="text-gray-500">
        How I lead and make impact across various fields
      </p>
      <h1 className="font-bold text-4xl">Volunteering & Leadership</h1>
      <section className="w-full">
        {volunteer.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-100 rounded-3xl p-6 md:p-10 hover:shadow-lg bg-white/15 mt-6"
          >
            <div className="rounded-full p-3 bg-fuchsia-950 text-white text-center w-12 h-12 flex items-center justify-center">
              <UserStar />
            </div>

            <h1 className="text-2xl mt-4">{item.title}</h1>
            <h1 className="text-gray-500">{item.org}</h1>
            <p className="my-5">{item.content}</p>

            {item.image && (
              <div className="gallery flex flex-wrap my-5 justify-center md:justify-start">
                {item.image.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img}
                    alt="volunteer images"
                    className="w-40 h-40 md:w-60 md:h-60 rounded-xl m-3 object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Volunteer;
