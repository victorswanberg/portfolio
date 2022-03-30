import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../assets/testimonials-carousel/avatar-1.png";
import avatar2 from "../assets/testimonials-carousel/avatar-2.png";
import avatar3 from "../assets/testimonials-carousel/avatar-3.png";


const CarouselTestimonials = () => {
    return (
        <div className="container">
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
                        <h3>Kai Warren</h3>
                        <p>
                        Victor offers great mentorship when it comes to professionalism and sales. I luckily came across Victor at the beginning of my working career where he was able to take me under his wing, show me the ins and outs of speaking with confidence using sales pitches surrounded around value, and introducing me to various sales strategies to provide more value to customers. I say lucky because there are very few managers you come across in life where you gain those valuable experiences, along with a friendship/mentorship that will carry on. 
                        </p>
                    </div>
                </div>
                </>
                <>
                <div>
                    <img src={avatar3} />
                    <div className="custom-carousel">    
                        <h3>Andrew Davidson</h3>
                        <p>
                        "Always a leader" is a phrase that comes to mind when I think about Victor. I had the pleasure of working with Victor for over a year at Sublime Media, collaborating on several projects with multiple different tools involved. He proved to be an amazing asset to the team both for his knowledge of the work being done and also his professionalism and organizational proficiencies, which greatly improved the quality of work coming from our team. I would recommend victor for any role in the future as I feel he will add tremendous value to any team that he is on. Oh, and don't forget to add him to the fun committee if you have one, you won't regret it!
                        </p>
                    </div> 
                </div>
                </>
                <>
                <div>
                    <img src={avatar2} />
                    <div className="custom-carousel">
                        <h3>Kate Wharton</h3>
                        <p>
                        Victor is a fantastic co-worker, with unparalleled drive and high standards. As a developer at Sublime Media, he’s delivered several outstanding products. He learns programs very quickly and finds creative coding solutions. Not only does he understand the dev product, but his retail background keeps him focused on delivering a great customer and client experience. With his positive energy and attitude, he motivates all of his team members. He is a great asset to any company!
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