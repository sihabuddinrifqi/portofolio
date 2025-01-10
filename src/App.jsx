import Nav from "./Component/Nav";
import Header from "./Component/Header";
import About from "./Component/About";
import Skill from "./Component/Skill";
import Portfolio from "./Component/Portofolio";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  return (
    <div className="">
      <Nav />
      <Header />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
