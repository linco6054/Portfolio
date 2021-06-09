import NavBar from "./Components/NavBar";
// Import Swiper styles
import "swiper/swiper.scss";
// Import Swiper styles

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Skills from "./Routes/Skills";
import Portfolio from "./Routes/Portfolio";
import Services from "./Routes/Services";
import PortfolioTwo from "./Routes/PortfolioTwo";
import ProjectsInMind from "./Routes/ProjectsInMind";
import Testimonial from "./Routes/Testimonial";
import Contact from "./Routes/Contact";
import Footer from "./Components/Footer";
import Sroller from "./Components/Sroller";
// import "swiper/swiper.scss";
function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <PortfolioTwo />
        <ProjectsInMind />
        <Testimonial />
        <Contact />
        <Footer />
        <Sroller />
      </div>
    </>
  );
}

export default App;
