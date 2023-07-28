import React from "react";
import { ReactComponent as LemonLogo } from "images/Logo.svg";
import styles from "./Header.module.scss";
import Text from "components/Text/Text";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <LemonLogo />
      </div>
      <nav>
        <ul className={styles.navLinksContainer}>
          <li>
            <a href="/">
              <Text size="20">Home</Text>
            </a>
          </li>
          <li>
            <a href="/">
              <Text size="20">About</Text>
            </a>
          </li>
          <li>
            <a href="/">
              <Text size="20">Reservations</Text>
            </a>
          </li>
          <li>
            <a href="/">
              <Text size="20">Order Online</Text>
            </a>
          </li>
          <li>
            <a href="/">
              <Text size="20">Login</Text>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
