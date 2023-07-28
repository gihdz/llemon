import React from "react";
import Hero from "components/Hero/Hero";
import Main from "components/Main";
// import Footer from "components/Footer";
import Header from "components/Header/Header";
import Specials from "components/Specials/Specials";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Specials />
        {/*<Footer />*/}
      </Main>
    </>
  );
}

export default App;
