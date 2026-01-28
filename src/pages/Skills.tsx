import next from "../assets/logo/next js.jpg"
import react from "../assets/logo/React-icon.svg.png"

interface logos {
name: string,

}
const Skills = () => {
    const logos = [
        {
            name: "aws",
            logo : next
        },
         {
            name: "React",
            logo : react
        },
    ]
  return (
    <main className="flex flex-col justify-center items-center m-15">
      <p>These are the skills I have</p>
      <h1 className="font-bold text-4xl">My Skills</h1>

      <section className="flex gap-10 my-10">
       <div className="metrics flex justify-center gap-10 mt-10">
            {logos.map((item, index) => (
              <div key={index} className="mb-4 text-center">
                <h2 className="text-3xl font-bold text-purple-600">
                  {item.logo}
                </h2>
                <p className="text-lg">{item.name}</p>
              </div>
            ))}
          </div>
      </section>
    </main>
  );
};

export default Skills;