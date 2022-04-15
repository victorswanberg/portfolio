import React from  'react';
import CarouselTestimonials from "./CarouselTestimonials";
import './carousel-testimonials.scss'
import Zoom from 'react-reveal/Zoom';


const Testimonials = () => {
  return (
    <div className="testimonials">
        <h1 className="neon-text">
          Testimonials
        </h1>
      <div className="container">
        <div className="testimonials-content">
          <Zoom>
            <CarouselTestimonials />
          </Zoom>
        </div> 
      </div>
    </div>
  )
}

export default Testimonials