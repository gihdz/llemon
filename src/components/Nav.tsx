import React from "react";
import { ReactComponent as LemonLogo } from "../images/Logo.svg";

const Nav = () => {
  return (
    <>
      <LemonLogo />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
