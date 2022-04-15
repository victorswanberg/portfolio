import React from 'react';
import './Experience.scss'
import Fade from 'react-reveal/Fade';


const Experience = () => {
    return (
        <div id="experience" className="experience pb-5">
            <div className=" container text-center p-5 px-3">
                <h1>My Journey</h1>
                <p>
                With over five years of professional experience, I have had the pleasure of working with some of the greatest organizations in the world. I have met brilliant minds and learned about amazing tools. I feel that my experience as a dev is more of a journey through life establishing my value and brand in the world of tech.
                </p>
            </div>
        <div className="container"> 
            <div className="row justify-content-start">
                <div className="col-md-6">
                    <div className="marker-right"></div>
                        <div className="timeline-content">
                            <Fade left>
                                <h3>2017-2018</h3>
                                 <p><strong>Philip J Boren Inc</strong></p>
                                    <ul>
                                        <li>Troubleshooted all software and hardware issues that the staff experienced.</li>
                                        <li>Maintained company website and provided feedback.</li>
                                        <li>Assembled deployment workstations for new employees and managed permissions with Active directory.
                                        </li>
                                        <li>Managed and administered company inventory and assets using Office 365 tool.</li>
                                        <li>Designed presentations and facilitated training sessions to help old employees stay up to speed</li>
                                    </ul>
                                    <p><strong>Sublime Media (contract)</strong></p>
                                    <ul>
                                        <li>Developed custom learning courseware in an application called Adobe Captivate.</li>
                                        <li>Utilize Adobe Creative cloud to take wireframes and comps and create a web application with Captivate.</li>
                                        <li>Tested and learned about the SCORM data model using LMS systems to track progression of courses.
                                        </li>
                                        <li>Worked with other internal teams to support the cycle of projects using a waterfall methodology.</li>
                                    </ul>
                            </Fade>
                        </div>
                </div>
            </div>
            {/* Add more blocks and swap between left and right */}
            <div className="row justify-content-end">
            <div className="col-md-6">
                    <div className="marker-left"></div>
                    <div className="timeline-content">
                        <Fade right>
                            <h3>2018-2019</h3>
                            <p><strong>Sublime Media (contract)</strong></p>
                                <ul>
                                    <li>Started using a technology called APS provided by a fortune 500 client.</li>
                                    <li>Leveraging html, css, .js and working with some limitations of a custom coded framework.</li>
                                    <li>Using Adobe illustrator to help cut our images, media tools to optimize media for web, and using storyboard templates to help create a word doc into a experience. 
                                    </li>
                                    <li>Collaborated internally to help bolster business processes and create a culture in the workplace that was impactful to employees of all ranges.</li>
                                    <li>Started really educating myself on accessibility and wcag 502 compliance.</li>
                                    <li>Started really educating myself on accessibility and 502 compliance.</li>
                                    <li>Created courseware using another tool called Storyline Articulate.</li>
                                </ul>
                        </Fade>
                    </div>
                </div>
                </div>
                {/* Add more blocks and swap between left and right */}
                <div className="row justify-content-start">
                <div className="col-md-6">
                    <div className="marker-right"></div>
                    <div className="timeline-content">
                        <Fade left>
                            <h3>2019-2020</h3>
                            <p><strong>Nucamp (Student)</strong></p>
                            <ul>
                                <li>Enrolled in a Web fundamentals class to help build my skills.</li>
                            </ul>
                            <p><strong>Sublime Media (Full-time Junior dev)</strong></p>
                            <ul>
                                <li>Created a document called a v-pat for compliance with accessibility. Educated internally to help bridge the gap amongst all teams to ensure inclusive courseware.</li>
                                <li>Introduced to a library for mobile first websites with Bootstrap 4.</li>
                                <li>Hyper focused on user experience and how the company can leverage unique interactions to help make the best web learning app they can.
                                </li>
                                <li>Consulting with SME’s and stakeholders to deliver projects on tight deadlines.</li>
                                <li>Shifted to a project management cycle that was more agile.</li>
                                <li>Introduced to a library called Vue.js.</li>
                            </ul>
                        </Fade>
                    </div>
                </div>
                </div>
                {/* Add more blocks and swap between left and right */}
                <div className="row justify-content-end">
                <div className="col-md-6">
                    <div className="marker-left"></div>
                    <div className="timeline-content">
                        <Fade right>
                            <h3>2020-2021</h3>
                            <p><strong>Nucamp (Student)</strong></p>
                            <ul>
                                <li>Enrolled in a Front-end class with bootstrap 4, React.js, and React native.</li>
                            </ul>
                            <p><strong>Sublime Media (Full-time Developer)</strong></p>
                            <ul>
                                <li>Working in a custom Vue.js framework to produce custom web apps.</li>
                                <li>Creating localization packages for clients to nest multiple language packages in one app.</li>
                                <li>Pushing the limits of Storyline with custom code that taps into the Storyline API. 
                                </li>
                                <li>Building small web components using vanilla.js to port into the Storyline courseware.</li>
                            </ul>
                        </Fade>
                    </div>
                </div>
                </div>  
                {/* Add more blocks and swap between left and right */}
                <div className="row justify-content-start">
                <div className="col-md-6">
                    <div className="marker-right"></div>
                    <div className="timeline-content">
                        <Fade left>
                            <h3>2021-2022</h3>
                            <p><strong>Code Vibes Consulting (Owner)</strong></p>
                            <ul>
                                <li>Establishing my web presence and creating some web templates for people that would like to start new business and need more digital space representation.</li>
                            </ul>
                            <p><strong>Nucamp (Instructor)</strong></p>
                            <ul>
                                <li>Hired as a coding instructor to teach other aspiring minds about the world of development with modern Mern technogies.</li>
                            </ul>
                            <p><strong>Sublime Media (Full-time Developer/Mentor)</strong></p>
                            <ul>
                                <li>Mentored multiple new hires, provide coaching and training.</li>
                                <li>Established new processes to accommodate large scaling of the company due to a large growth in the eLearning industry over the pandemic.</li>
                                <li>Working in the Vue.js framework now building components and using SCSS.
                                </li>
                                <li>Familiar with tooks like Webpack, NPM, and Node.js.</li>
                                <li>Shifted to a project management cycle that was more agile.</li>
                                <li>Execute accessibility testing, browser testing, and UAT testing to ensure our products are the best version for any environment.</li>
                            </ul>
                        </Fade>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Experience