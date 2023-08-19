import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Text from "components/Text/Text";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <MobileNav />
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
  );
};

export default Nav;
