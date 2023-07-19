import React from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <div className={styles.title}>Little Lemon</div>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
