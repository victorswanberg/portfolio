import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello my name is Victor</h1> 
                <Typed
                    className="typed-text"
                    strings={["Web developer", "E-learning developer", "Accessibility expert", "UX/UIX in mind", "Coding instuctor", "Peer mentor"]}
                    typeSpeed={25}
                    backSpeed={25}
                    loop
                /> 
                <a href="#" className="btn-main-offer">Contact Me</a>  
            </div>
        </div>
    )
}

export default Header