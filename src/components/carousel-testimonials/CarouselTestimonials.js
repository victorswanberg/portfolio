import React from 'react';
import './carousel-testimonials.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../../assets/testimonials-carousel/avatar-1.png";
import avatar2 from "../../assets/testimonials-carousel/avatar-2.png";
import avatar3 from "../../assets/testimonials-carousel/avatar-3.png";
import Fade from 'react-reveal/Fade';


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
                    <Fade>
                    <img src={avatar1} alt="Avatar with glasses" />
                    </Fade>
                    <div className="custom-carousel">
                        <h3>Kai Warren</h3>
                        <p className="px-3 px-md-0">
                        Victor offers great mentorship when it comes to professionalism and sales. I luckily came across Victor at the beginning of my working career where he was able to take me under his wing, show me the ins and outs of speaking with confidence using sales pitches surrounded around value, and introducing me to various sales strategies to provide more value to customers. I say lucky because there are very few managers you come across in life where you gain those valuable experiences, along with a friendship/mentorship that will carry on. 
                        </p>
                    </div>
                </div>
                </>
                <>
                <div>
              
                    <img src={avatar3} alt="Avatar with beard" />
               
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
           
                    <img src={avatar2} alt="Avatar with glasses" />

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
       
                    <img src={avatar2} alt="Avatar with glasses" />

                    <div className="custom-carousel">
                        <h3>Elise St Hilaire</h3>
                        <p>
                        Victor is a passionate developer, generous teammate, and caring friend.
                        He encouraged and supported me through three years at Sublime Media. After team meetings, he contributed invaluable feedback on how to make future meetings more effective. He consistently initiated check-ins, and helped me troubleshoot any issues that came up. Victor's energy is contagious. He often collaborated with the design team to create animations and new interactions that were beyond what was expected. He recognized the team need for accessibility processes, then initiated research on the topic and documented best practices. I also appreciate his love of cars, cats and Pokémon, as it assures that our conversation is always interesting. I highly recommend Victor for a developer position. He will be an invaluable asset to any company.
                        </p>
                    </div>
                </div>
                </>
                <>
                <div>
                    <Fade>
                    <img src={avatar3} alt="Avatar with glasses" />
                    </Fade>
                    <div className="custom-carousel">
                        <h3>Mike Koplitz</h3>
                        <p className="px-3 px-md-0">
                        Victor was a great addition to our team. He has a positive attitude, creative and is always willing to help others and is creative at looking at new ways to do things. He’s definitely a go getter, eager to take on any challenge. And always has the best interest of the company in mind. I would take any opportunity to work with Victor again. And any organization would be lucky to have him on their team.
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