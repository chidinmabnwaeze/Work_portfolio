interface Reviews {
    name:string;
avatar: string;                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ;
content: React.ReactNode;
}


const Testimonials = () => {
 const reviews: Reviews[] = [
        {
            name: "Everistus Nwogo",
            avatar: "/path-to-avatar-image.jpg", // You need to provide an actual image path here
            content: (
                <p>
                    I highly recommend Chidinma Nwaeze, whom I mentored during her impressive three-month internship. 
                    Chidinma's exceptional talent spans across front-end development and UI/UX design, showcasing 
                    exceptional communication, teamwork, and problem-solving skills.
                    <br /><br />
                    Chidinma's expertise in front-end development and UI/UX design is commendable. She consistently 
                    delivered high-quality work with precision and creativity.
                    <br /><br />
                    As her mentor, I witnessed Chidinma's collaborative spirit and positive attitude, contributing 
                    effectively to team discussions and achieving project goals seamlessly.
                    <br /><br />
                    Chidinma's problem-solving skills are remarkable, making her a valuable asset to any project or team.
                    <br /><br />
                    In summary, Chidinma Nwaeze is exceptionally talented. It was a pleasure to mentor her, and I am 
                    confident in her continued success.
                </p>
            )
        }
]

  return (
    <div>
         <p>Here what people have to say about me </p>
      <h1 className="font-bold text-4xl">Testimonials</h1>
        <div className="slider">
                {reviews.map((review, index)=>(
            <div className="slide-content" key={index}>
                    <p>{review.content}</p>
            </div>
                ))}
        </div>
        </div>
  )
}
 
export default Testimonials