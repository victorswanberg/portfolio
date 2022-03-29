import React from 'react';
import './component-styles/Experience.scss'
const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>My Journey</h1>
                <p>With over 5 years of professional experience, I have had the pleasure of working with some of the greatest organizations in the world. I have met brilliant minds and learned about amazing tools. I feel that my expereince as an employee is more of a journy through life establishing my value and brand in the world.
                </p>
            </div>
        <div className="container"> 
            <div className="row justify-content-start">
                <div className="col-md-6">
                    <div className="marker-right"></div>
                        <div className="timeline-content">
                            <h3>2021-2022</h3>
                            <p>
                            The begining of my Brand. Code Vibes. 

                            Currently Employed at Sublime Media Inc. working in the Vue.js fw and building more scalable applications. Working in Storyline authoring tool pushing the limits of the application to do custom reports with a SCORM data model.

                            Currently Employed at Nucamp as a Coding Instructor teaching the fundamentals course and the bootstrap 4/5 courses
                            </p>
                        </div>
                </div>
            </div>
            {/* Add more blocks and swap between left and right */}
            <div className="row justify-content-end">
            <div className="col-md-6">
                    <div className="marker-left"></div>
                    <div className="timeline-content">
                        <h3>2020-2021</h3>
                        <p>
                        Currently Employed at SublimeMedia as a full time employee working with Storyline and a custom Vue.js framework 

                        Currently Attending a nucamp bootcamp for Front-end-stack to learn about a popular .js library called React/React Native
                        </p>
                    </div>
                </div>
                </div>
                {/* Add more blocks and swap between left and right */}
                <div className="row justify-content-start">
                <div className="col-md-6">
                    <div className="marker-right"></div>
                    <div className="timeline-content">
                        <h3>2019-2020</h3>
                        <p>
                            Currently Employed at SublimeMedia as a e-Learning developer working with a new authoring tool called Storyline and a custom framework by Microsoft called Access point studios

                            Currently Attending a nucamp bootcamp for web fundamentals to reacclimate my skill sets on html and CSS 
                        </p>
                    </div>
                </div>
                </div>
                {/* Add more blocks and swap between left and right */}
                <div className="row justify-content-end">
                <div className="col-md-6">
                    <div className="marker-left"></div>
                    <div className="timeline-content">
                        <h3>2018-2019</h3>
                        <p>
                            Employed at a Company called Philip J Boren.

                            Hired at a Company called Sublime Media as a contractor working with authoring tools for instructional designers. Primary tool was Adobe Captivate.
                        </p>
                    </div>
                </div>
                </div>  
            </div>
        </div>
    )
}

export default Experience