import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-tsparticles';


function App() {
  return (
    <>
      <Particles
       className="particles-canvas"
       // params={{
       //   particles: {
       //     number: {
       //       value: 30,
       //       density: {
       //         enable: true,
       //         value_area: 900,
       //       },
       //     },
       //     shape: {
       //       type: "circle",
       //       stroke: {
       //         width: 6,
       //         color: "#f9ab00",
       //       },
       //     },
       //   },
       // }}
       options={{
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
       }}
     />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
