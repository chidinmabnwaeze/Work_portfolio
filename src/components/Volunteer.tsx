import evan from "../assets/images/image.png";
import { UserStar } from "lucide-react";

interface VolunteerProps {
  title: string;
  org: string;
  duration: string;
  content: React.ReactNode;
}

const Volunteer = () => {
  const volunteer: VolunteerProps[] = [
    {
      title: "Mentor",
      org: "Technovation",
      duration: "1-01-2023",
      content: (
        <>
          "As a mentor in the technovation girls, I focus on delivering scalable
          solutions with strong attention to performance, SEO, and brand
          compliance. Currently at Innov8 Hub, I collaborate across teams to
          manage website development, server migrations, SSL integrations, and
          digital optimization. Beyond work, I mentor young girls in Abuja on
          STEM, public speaking, and problem-solving aligned with the UN SDGs."
        </>
      ),
    },
  ];

  return (
    <main className="volunteer-container flex flex-col justify-center items-center max-w-5xl mx-auto ">
      <p>Here's how I volunteer</p>
      <h1 className="font-bold text-4xl">Volunteering</h1>
      <section className="border border-gray-100 rounded-3xl p-10 hover:shadow-lg">
        {volunteer.map((item, index) => (
          <div key={index}>
            <div className="rounded-full p-2 bg-fuchsia-950 text-white text-center w-1/5">
              {" "}
              <UserStar />
            </div>

            <h1 className="text-2xl">{item.title}</h1>
            <h1 className="text-gray-500">{item.org}</h1>
            <p className="my-5">{item.content}</p>
            <div className="gallery flex my-5">
              <img src={evan} alt="" className="w-60 h-60 rounded-4xl m-3" />
              <img src={evan} alt="" className="w-60 h-60 rounded-4xl" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Volunteer;
