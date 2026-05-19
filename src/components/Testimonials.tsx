import React, { useCallback, useEffect, useState } from "react";
import make from "../assets/logo/cropped-LOGO-removebg-preview-42x33.png";
import bayzel from "../assets/logo/bayzel-cropped-logo.png"
// import evan from "../assets/images/image.png";

interface Review {
  name: string;
  avatar: string;
  role: string;
  content: React.ReactNode;
}

const Testimonials = () => {
  const reviews: Review[] = [
    // {
    //   name: "Everistus Nwogo",
    //   avatar: evan,
    //   role: "Senior AI and Software Engineer",
    //   content: (
    //     <p>
    //       I highly recommend Chidinma Nwaeze, whom I mentored during her
    //       impressive three-month internship. Chidinma's exceptional talent spans
    //       across front-end development and UI/UX design, showcasing exceptional
    //       communication, teamwork, and problem-solving skills. Chidinma's
    //       expertise in front-end development and UI/UX design is commendable.
    //       She consistently delivered high-quality work with precision and
    //       creativity.
    //       <br />
    //       <br />
    //       As her mentor, I witnessed Chidinma's collaborative spirit and
    //       positive attitude, contributing effectively to team discussions and
    //       achieving project goals seamlessly. Chidinma's problem-solving skills
    //       are remarkable, making her a valuable asset to any project or team. In
    //       summary, Chidinma Nwaeze is exceptionally talented. It was a pleasure
    //       to mentor her, and I am confident in her continued success.
    //     </p>
    //   ),
    // },
    {
      name: "James Ibekason",
      avatar: make,
      role: "CEO, Make Maker",
      content: (
        <p>
          Working with Chidinma was a seamless and highly professional
          experience from start to finish. She demonstrated a deep understanding
          of both user needs and business goals, translating ideas into a clean,
          intuitive, and visually compelling website. What stood out most was
          her professionalism—clear communication, a structured workflow, and a
          proactive approach to feedback made the entire process smooth and
          stress-free. Every milestone was delivered on time, without
          compromising on quality, which is rare and deeply appreciated. The
          final product exceeded expectations. The design is not only
          aesthetically strong but also highly functional and user-friendly,
          reflecting her strong attention to detail and genuine commitment to
          excellence. I would confidently recommend Chidinma to anyone looking
          for a reliable, skilled, and detail-oriented UI/UX designer who
          consistently delivers high-quality work on schedule.
        </p>
      ),
    },
    {
      name: "Basil Nwankpa",
      avatar: bayzel,
      role: "CEO, Bayzel Integrated Services",
      content: (
        <p>
          One thing I appreciated about working with Chidinma was how invested
          she was in the project like it was her own. She brought structure,
          ideas, and clarity to what initially felt overwhelming for us. Every
          stage of the website development was handled with professionalism and
          care. She was very intentional about creating a website that was not
          just visually appealing but also easy to navigate and practical for
          our users. Even after delivery, she remained available for support,
          updates, and improvements, which showed her commitment to quality and
          client satisfaction. The entire experience was smooth, collaborative,
          and stress-free. If you need someone who combines technical skill with
          creativity and reliability, Chidinma is definitely someone I would
          recommend.
        </p>
      ),
    },
    // {
    //   name: "Peter Damilare",
    //   avatar: "",
    //   role: "Senior Software Engineer, Innov8 Hub",
    //   content: (
    //     <p>
    //       She is highly intelligent and consistently delivers outstanding
    //       results. Her ability to meet deadlines often completing tasks well
    //       ahead of schedule is impressive. She approaches every project with
    //       dedication, attention to detail, and a strong commitment to
    //       excellence. Working with her guarantees quality, efficiency, and
    //       reliability. I highly recommend her for any task requiring
    //       professionalism and top-tier performance. We collaborated on several
    //       projects, and her contributions were always invaluable. Her work
    //       ethic, creativity, and problem-solving skills make her an asset to any
    //       team or project. I have no doubt that she will continue to excel in
    //       her career and deliver exceptional results in all her future
    //       endeavors.
    //     </p>
    //   ),
    // },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  }, [reviews.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <main
      id="testimonials"
      className="reveal flex flex-col items-center py-16 bg-gray-50"
    >
      <p className="text-gray-500 animate-slide-down">
        Here's what people say about me
      </p>
      <h1
        className="font-bold text-4xl mb-10 animate-slide-down"
        style={{ animationDelay: "0.2s" }}
      >
        Testimonials
      </h1>

      <div
        className="relative max-w-4xl w-full bg-white shadow-lg rounded-2xl p-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide */}
        <div className="transition-all duration-500 ease-in-out">
          {reviews[currentSlide].avatar && (
            <img
              src={reviews[currentSlide].avatar}
              alt={reviews[currentSlide].name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4"
            />
          )}
          {reviews[currentSlide].content}
          <div className="mt-4">
            <strong>{reviews[currentSlide].name}</strong>
            <p className="text-gray-600">{reviews[currentSlide].role}</p>
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
        >
          ›
        </button>
      </div>
    </main>
  );
};

export default Testimonials;
