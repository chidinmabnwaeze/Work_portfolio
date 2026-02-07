import React from "react";

interface VolunteerProps {
  title: string;
  org: string;
  duration: string;
  content: string;
}

const Volunteer = () => {
  const volunteer: VolunteerProps[] = [
    {
      title: "Mentor",
      org: "Technovation",
      duration: "1-01-2023",
      content: "As a mentor in the technovation girls ....",
    },
  ];

  return (
    <main className="volunteer-container flex flex-col justify-center items-center">
      <p>Here's how I volunteer</p>
      <h1 className="font-bold text-4xl">Volunteering</h1>
      <section>
        {volunteer.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <h1>{item.org}</h1>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Volunteer;
