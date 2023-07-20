import React from "react";
import { ReactComponent as LemonLogo } from "../../images/Logo.svg";
import styles from "./Header.module.scss";
import Text from "../Text/Text";

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
              <Text size="cta">Home</Text>
            </a>
          </li>
          <li>
            <a href="/">
              <Text size="cta">About</Text>
            </a>
          </li>
          <li>
            <a href="/">
              <Text size="cta">Reservations</Text>
            </a>
          </li>
          <li>
            <a href="/">
              <Text size="cta">Order Online</Text>
            </a>
          </li>
          <li>
            <a href="/">
              <Text size="cta">Login</Text>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
