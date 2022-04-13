import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ScrollButton from './components/scroll-btn/ScrollButton';
import Header from './components/header/Header';
import AboutMe from './components/about-me/AboutMe';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/carousel-testimonials/Testimonials';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import SideGadget from './components/side-gadget/SideGadget';


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
      <Contacts />
      <ScrollButton />
      <SideGadget />
      <Footer />
    </>
  );
}

export default App;
