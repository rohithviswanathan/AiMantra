import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import AboutUs from "./components/about/AboutUs";
import OurServices from "./components/services/OurServices";
import WebDevelopment from "./components/services/WebDevelopment";
import WebDesigning from "./components/services/WebDesigning";
import MobileAppDevelopment from "./components/services/MobileAppDevelopment";
import DigitalMarketing from "./components/services/DigitalMarketing";
import ContentMarketing from "./components/services/ContentMarketing";
import GraphicDesigning from "./components/services/GraphicDesigning";
import Home from "./components/home/Home";
import AutoScrollButton from "./components/scrollbutton/AutoScrollButton";
import ScrollTopButton from "./components/scrollbutton/ScrollTopButton";
import Career from "./components/career/Career";

function App() {
  return (
    <Router>
      <AutoScrollButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/web-designing" element={<WebDesigning />} />
        <Route path="/services/mobileapp-development" element={<MobileAppDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/content-marketing" element={<ContentMarketing />} />
        <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
    </Router>
  );
}

export default App;