import React from "react";
import Hero from "components/Hero/Hero";
import Main from "components/Main";
// import Footer from "components/Footer";
import Header from "components/Header/Header";
import Specials from "components/Specials/Specials";
import Testimonials from "components/Homepage/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Specials />
        <Testimonials />
        {/*<Footer />*/}
      </Main>
    </>
  );
}

export default App;
