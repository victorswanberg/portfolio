import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselTestimonials from './components/CarouselTestimonials';



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience /> 
      <Portfolio />
      <Testimonials />
    </>
  );
}

export default App;
