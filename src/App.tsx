import React from "react";
import Hero from "components/Hero/Hero";
import Main from "components/Main";
// import Footer from "components/Footer";
import Header from "components/Header/Header";
import Specials from "components/Specials/Specials";
import Testimonials from "components/Homepage/Testimonials/Testimonials";
import About from "components/Homepage/About/About";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        {/*<Footer />*/}
      </Main>
    </>
  );
}

export default App;
