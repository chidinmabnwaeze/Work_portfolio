interface Reviews {
    name:string;
avatar:                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ;
review:
}


const Testimonials = () => {
const reviews:Reviews[] = [
    {
        name: "Everistus",
        avatar: ,
        review:""
    }
]

  return (
    <div>
         <p>Here what people have to say about me </p>
      <h1 className="font-bold text-4xl">Testimonials</h1>
        <div className="slider">
            <div className="slide-content">
                {reviews.map((review, index)=>(
                    <p>{review.review}</p>
                ))}
            </div>
        </div>
        </div>
  )
}

export default Testimonials