import React from "react";
import styles from "./Footer.module.scss";
import RestaurantFoodImg from "images/restauranfood.jpg";
import Text from "components/Text/Text";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div>
          <img
            className={styles.footerImg}
            alt={"Restaurant food"}
            src={RestaurantFoodImg}
          />
        </div>
        <div className={styles.columnLinks}>
          <div>
            <Text size={20} weight={"extraBold"} color={"primary1"}>
              Navigation
            </Text>
            <ul>
              <li>
                <Link to="/">
                  <Text size={20} weight={"medium"}>
                    Home
                  </Text>
                </Link>
              </li>
              <li>
                <Text size={20} weight={"medium"}>
                  About
                </Text>
              </li>
              <li>
                <Link to="/book">
                  <Text size={20} weight={"medium"}>
                    Reservations
                  </Text>
                </Link>
              </li>
              <li>
                <Text size={20} weight={"medium"}>
                  Order Online
                </Text>
              </li>
              <li>
                <Text size={20} weight={"medium"}>
                  Login
                </Text>
              </li>
            </ul>
          </div>
          <div>
            <Text size={20} weight={"extraBold"} color={"primary1"}>
              Contact
            </Text>
            <ul>
              <li>
                <Text size={20} weight={"medium"}>
                  Address
                </Text>
              </li>
              <li>
                <Text size={20} weight={"medium"}>
                  Phone number
                </Text>
              </li>
              <li>
                <Text size={20} weight={"medium"}>
                  Email
                </Text>
              </li>
            </ul>
          </div>
          <div>
            <Text size={20} weight={"extraBold"} color={"primary1"}>
              Social medial links
            </Text>
            <ul>
              <li>
                <Text size={20} weight={"medium"}>
                  Address
                </Text>
              </li>
              <li>
                <Text size={20} weight={"medium"}>
                  Phone number
                </Text>
              </li>
              <li>
                <Text size={20} weight={"medium"}>
                  Email
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
