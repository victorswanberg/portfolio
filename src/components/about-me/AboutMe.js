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
                    Greetings, I am Vic an aspiring front-end developer. I am a born Seattleite and love the Pac northwest. I am passionate about all the phases of development from the flowcharts to the handoffs to a client. I enjoy late nights of coding with rgb lights and lo-fi music playing. It’s the best environment for me to do work, which is why I started to build a brand called Code Vibes. Because the atmosphere is really a type of vibe.
                    </p>
                    <p>
                    I started development in 2018 as a e-learning courseware developer. I currently have a degree in computer information systems and studied a wide range of tech related sectors like hardware IT support, network infrastructure, sever management, and application development. I found my passion when I started front-end development and knew that was my path. I enjoy seeing results render on my screen as I struggle to find the perfect position in CSS or dig through, the console to find my error.
                    </p>
                    <p>
                    I would describe myself as a humble constant learner, starving to find the latest and greatest new library to dig into. My love for computers started at a young age, building my first PC with an Athlon duo core by AMD. As a teenager I would drag all my desktop parts to a friend’s house and hardwire into the LAN to play StarCraft or Diablo. That passion has lived through me all the way through high school studying 3d drafting to college doing IT apprenticeships, hardware support, and cybersecurity with Cisco. As with anyone it takes years to establish a career and to really find a career that just feels like you. For me it’s about creating people’s visions into reality in a digital space and leaving a younger generation with more knowledge and success to elevate our community and push the limits.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe