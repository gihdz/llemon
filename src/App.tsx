import React from "react";
import Hero from "components/Hero/Hero";
import Main from "components/Main";
import Footer from "components/Footer";
import Header from "components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main>
        <Footer />
      </Main>
    </>
  );
}

export default App;
