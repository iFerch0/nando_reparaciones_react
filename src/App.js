import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Guarantee from "./components/Guarantee";
import Brands from "./components/Brands";


function App() {
  return (
  <div className="App">
    <Navbar />    
    <Hero />
    <Services />
    <WhyUs />
    <Testimonials />
    <CallToAction />
    <FAQ />
    <Contact />
    <Location />
    <Brands />
    <Guarantee />
    <Footer />
  </div>
  );
}

export default App;
