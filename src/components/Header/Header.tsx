import React from "react";
import { ReactComponent as LemonLogo } from "images/Logo.svg";
import styles from "./Header.module.scss";
import Text from "components/Text/Text";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <LemonLogo />
      </div>
      <nav>
        <ul className={styles.navLinksContainer}>
          <li>
            <Link to={"/"}>
              <Text size={20}>Home</Text>
            </Link>
          </li>
          <li>
            <Text size={20}>About</Text>
          </li>
          <li>
            <Link to={"/book"}>
              <Text size={20}>Reservations</Text>
            </Link>
          </li>
          <li>
            <Text size={20}>Order Online</Text>
          </li>
          <li>
            <Text size={20}>Login</Text>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
