import React from "react";
import Hero from "components/Homepage/Hero/Hero";
import Specials from "components/Homepage/Specials/Specials";
import Testimonials from "components/Homepage/Testimonials/Testimonials";
import About from "components/Homepage/About/About";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
};

export default Homepage;
