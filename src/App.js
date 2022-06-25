import "./App.css";
import React from "react";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SwiperSection from "./components/SwiperSection";

import Products from "./components/Products";

function App() {
  return (
    <>
      <div>
        <Banner></Banner>
        <Products />
        <div id="about"></div>
        <About></About>
        <div id="services"></div>
        <Services></Services>
        <div id="collections"></div>
        <SwiperSection></SwiperSection>
        <Collections></Collections>
        <div id="contact"></div>
        <Contact></Contact>
        <Footer />
      </div>
    </>
  );
}

export default App;
