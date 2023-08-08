import React from "react";
import { Outlet } from "react-router-dom";
import Main from "components/Main";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import styles from "styles/App.module.scss";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Header />
          <Main>
            <Outlet />
          </Main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
