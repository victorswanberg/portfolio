import React from  'react';
import CarouselTestimonials from "./CarouselTestimonials";

const Testimonials = () => {
  return (
    <div className="testimonials">
        <h1 className="neon-text">
          Testimonials
        </h1>
      <div className="container">
        <div className="testimonials-content">
          <CarouselTestimonials />
        </div> 
      </div>
    </div>
  )
}


export default Testimonials