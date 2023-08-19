import React from "react";
import { ReactComponent as LemonLogo } from "images/Logo.svg";
import styles from "./Header.module.scss";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <LemonLogo />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
