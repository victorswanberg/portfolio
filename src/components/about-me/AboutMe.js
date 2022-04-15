import React from 'react';
import './about-me.scss'
import author from '../../assets/about-me/vic.jpg';
import Zoom from 'react-reveal/Zoom';

const AboutMe = () => {
    return (
        <div id="about-me" className="container about-me py-5">
            <div className="row no-gutter">
                {/* Center when in mobile? */}
                <div className="col-lg-6 col-xm-12 my-auto">
                    <Zoom>
                        <div className="photo-wrapper">
                            <img className="profile-img" src={author} alt="Victor Swanberg"/>
                        </div>
                    </Zoom>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="profile-header mb-1">About me</h1>
                    <p>
                    Greetings, I am Vic a aspiring front-end developer. I am a born Seattlite. I am passionate about design and belive that a good user experience is a good design. I love late nights of coding with RGB's and lo-fi music playing. Its the best enviorment for me to do work, which is why i started to build a brand called Code Vibes. Because the atmosphere is really a type of vibe. 
                    </p>
                    <p>
                    I started development in 2018 as a self taught web developer. I have a degree in computer science and information systems and bounced around the tech industry until i found my spot. The thing i love about code is the logic of problem solving. I enjoy seeing results render on my screen as i struggle to find the perfect postion in CSS or dig throught he console to find my error. 
                    </p>
                    <p>
                    I am a constant learner, and always hungry to find the latest and greatest new library to dig into. My love for computers started at a young age, building my first PC. As a teenager I would drag all my desktop parts to a friends house and hardwire into the network to play starcraft. That passion has lived through me all the way through highschool studying 3d drafting to college doing IT appreteniceships, hardware support, and cybersecurity with Cisco. Fastforward to now with more clarity in my carrer and there are two things that i abosolutly love. Creating peoples images into real world sites and teaching people how to do the same. My purpose and mission inlife is to help people stay connected in a world of digital space.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe