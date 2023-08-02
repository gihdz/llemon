import React from "react";
import { Outlet } from "react-router-dom";
import Main from "components/Main";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

function App() {
  return (
    <>
      <Main>
        <Header />
        <Outlet />
        <Footer />
      </Main>
    </>
  );
}

export default App;
