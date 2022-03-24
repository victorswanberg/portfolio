import React from 'react';
import './component-styles/Experience.scss'
const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
        <div className="container"> 
            <div className="row justify-content-start">
                <div className="col-md-6">
                    <div className="marker-right"></div>
                        <div className="timeline-content">
                            <h3>2021-2022</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas egestas leo, a rhoncus leo vehicula ac. Cras mollis lacus consequat odio eleifend semper. Donec enim justo, commodo luctus nisl eu, tristique cursus dui. Nullam molestie nunc sed augue malesuada, volutpat iaculis est ultrices. Quisque commodo, enim sed elementum imperdiet, felis velit sodales mauris, non interdum ex nibh eget turpis. Sed tristique id felis condimentum accumsan. Pellentesque vitae justo fringilla, elementum est sit amet, faucibus ex. Mauris sed nibh quam.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas egestas leo, a rhoncus leo vehicula ac. Cras mollis lacus consequat odio eleifend semper. Donec enim justo, commodo luctus nisl eu, tristique cursus dui. Nullam molestie nunc sed augue malesuada, volutpat iaculis est ultrices. Quisque commodo, enim sed elementum imperdiet, felis velit sodales mauris, non interdum ex nibh eget turpis. Sed tristique id felis condimentum accumsan. Pellentesque vitae justo fringilla, elementum est sit amet, faucibus ex. Mauris sed nibh quam.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas egestas leo, a rhoncus leo vehicula ac. Cras mollis lacus consequat odio eleifend semper. Donec enim justo, commodo luctus nisl eu, tristique cursus dui. Nullam molestie nunc sed augue malesuada, volutpat iaculis est ultrices. Quisque commodo, enim sed elementum imperdiet, felis velit sodales mauris, non interdum ex nibh eget turpis. Sed tristique id felis condimentum accumsan. Pellentesque vitae justo fringilla, elementum est sit amet, faucibus ex. Mauris sed nibh quam.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas egestas leo, a rhoncus leo vehicula ac. Cras mollis lacus consequat odio eleifend semper. Donec enim justo, commodo luctus nisl eu, tristique cursus dui. Nullam molestie nunc sed augue malesuada, volutpat iaculis est ultrices. Quisque commodo, enim sed elementum imperdiet, felis velit sodales mauris, non interdum ex nibh eget turpis. Sed tristique id felis condimentum accumsan. Pellentesque vitae justo fringilla, elementum est sit amet, faucibus ex. Mauris sed nibh quam.
                        </p>
                    </div>
                </div>
                </div>  
            </div>
        </div>
    )
}

export default Experience