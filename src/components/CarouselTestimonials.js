import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../assets/testimonials-carousel/avatar-1.png";
import avatar2 from "../assets/testimonials-carousel/avatar-2.png";
import avatar3 from "../assets/testimonials-carousel/avatar-3.png";


const CarouselTestimonials = () => {
    return (
        <div class="container">
            <div className="carousel-wrapper">
                <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={true}
                infiniteLoop={false}
                >
                <>
                <div>
                    <img src={avatar1} />
                    <div className="custom-carousel">
                        <h3>John Doe</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto repellendus recusandae aut minima dolorum, corrupti nemo at esse officiis!
                        </p>
                    </div>
                </div>
                </>
                <>
                <div>
                    <img src={avatar2} />
                    <div className="custom-carousel">    
                        <h3>John Doe</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto repellendus recusandae aut minima dolorum, corrupti nemo at esse officiis!
                        </p>
                    </div> 
                </div>
                </>
                <>
                <div>
                    <img src={avatar3} />
                    <div className="custom-carousel">
                        <h3>John Doe</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto repellendus recusandae aut minima dolorum, corrupti nemo at esse officiis!
                        </p>
                    </div>
                </div>
                </>
                <>
                <div>
                    <img src={avatar3} />
                    <div className="custom-carousel">
                        <h3>John Doe</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto repellendus recusandae aut minima dolorum, corrupti nemo at esse officiis!
                        </p>
                    </div>
                </div>
                </>
                </Carousel>
            </div>
        </div>
    );
}

export default CarouselTestimonials