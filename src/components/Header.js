import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-tsparticles';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <Particles
                className="particles-canvas"
                options={options}
            />
            <div className="main-info">
              <div className="box-set">
                <h1 className="neon-text-header">Code Vibes by Victor Swanberg</h1> 
                <Typed
                    className="typed-text"
                    strings={["Web developer", "E-learning developer", "Accessibility expert", "UX/UIX in mind", "Coding instuctor", "Peer mentor"]}
                    typeSpeed={25}
                    backSpeed={25}
                    loop
                />
                <div className="mt-4 mb-4">
                  <a href="#contact" className="btn-main-offer">Contact Me</a></div>  
                </div>
            </div>
        </div>
    )
}

export default Header
const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
       //  onHover: {
       //    enable: true,
       //    mode: "repulse",
       //  },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 300,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ef4035",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 900,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
    fullScreen: {
        enable: false
    }
  }