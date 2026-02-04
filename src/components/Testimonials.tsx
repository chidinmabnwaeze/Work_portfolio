import React, { useCallback, useEffect, useState } from "react";

interface Review {
  name: string;
  avatar: string;
  role: string;
  content: React.ReactNode;
}

const Testimonials = () => {
  const reviews: Review[] = [
    {
      name: "Everistus Nwogo",
      avatar: "/path-to-avatar-image.jpg",
      role: "Senior AI and Software Engineer",
      content: (
        <p>
          I highly recommend Chidinma Nwaeze, whom I mentored during her
          impressive three-month internship. Chidinma's exceptional talent spans
          across front-end development and UI/UX design, showcasing exceptional
          communication, teamwork, and problem-solving skills. Chidinma's
          expertise in front-end development and UI/UX design is commendable.
          She consistently delivered high-quality work with precision and
          creativity.
          <br />
          <br />
          As her mentor, I witnessed Chidinma's collaborative spirit and
          positive attitude, contributing effectively to team discussions and
          achieving project goals seamlessly. Chidinma's problem-solving skills
          are remarkable, making her a valuable asset to any project or team. In
          summary, Chidinma Nwaeze is exceptionally talented. It was a pleasure
          to mentor her, and I am confident in her continued success.
        </p>
      ),
    },
    {
      name: "ONISODUMEYA HAMILTON",
      avatar: "/path-to-avatar-image.jpg",
      role: "STEM Instructor",
      content: (
        <p>
          As a. technical training manager at the CyberSchool Africa digital
          skills training funded by the world bank group in alliance with
          Gallery of Code and Alden Telecommunications, I watch with keen
          interest the students who made sacrificial efforts to go beyond the
          tides and Chidinma Nwaeze was one of them, she had excellent
          performance in her practical projects as well as been punctual to
          workshops while undergoing her voluntary military training in Nigeria.
          I also saw her delivery excellent documentations for projects in firms
          within short notices. she is a very proactive person in terms of
          creativity and seeking mentorship for enhanced quality delivery in her
          services.
        </p>
      ),
    },
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
    <main className="testimonials-container flex flex-col justify-center items-center">
      <p>Here what people have to say about me</p>
      <h1 className="font-bold text-4xl">Testimonials</h1>
      <div
        className="slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slide-content shadow bg-white rounded-2xl max-w-5xl p-8 relative flex w-full overflow-hidden">
          {/* {reviews.map((review, index) => ( */}
          <div className="review-card ">
            {reviews[currentSlide].avatar && (
              <img
                src={reviews[currentSlide].avatar}
                alt={reviews[currentSlide].name}
                className="avatar"
              />
            )}
            <div className="reviews-content">
              {reviews[currentSlide].content}
              <div className="reviews-author">
                <strong>{reviews[currentSlide].name}</strong>
                <p className="text-gray-600">{reviews[currentSlide].role}</p>
              </div>
            </div>
          </div>
          {/* ))} */}
          <div
            className={`indicators flex justify-between${(_reviews[currentSlide], index)}`}
          >
            <button
              onClick={prevSlide}
              className="absolute top-0 bottom-0 left-0 cursor-pointer"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-0 bottom-0 right-0 cursor-pointer"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
