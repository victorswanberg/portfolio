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
import { HashRouter, Route, Routes } from 'react-router-dom';


function Home () {
  return     <>
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
}

function getIframe () {
  return {
    __html: '<iframe style="position: absolute; height: 100%; width: 100%; border: none" src="/project-examples/triple_x_project/home.html"> width="100vw" heigh="100vh"</iframe>'
  }
}
function MyProject () {
  console.log(getIframe());
  return <div dangerouslySetInnerHTML={getIframe()}/>
}

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<MyProject />} />
    </Routes>
    </HashRouter>
  );
}

export default App;
