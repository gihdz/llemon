import React from "react";
import styles from "./HomepageHero.module.scss";
import RestaurantFoodImg from "images/restauranfood.jpg";
import Button from "components/Button/Button";
import Text from "components/Text/Text";

const HomepageHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Text size={64} color="primary2">
          Little Lemon
        </Text>
        <Text size={40} color="light">
          DR
        </Text>
        <div className={styles.subTitleContainer}>
          <Text size={16} color="light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
        <Button text="Reserve a table" />
        <img
          alt="palitos img"
          className={styles.heroImg}
          src={RestaurantFoodImg}
        />
      </div>
    </div>
  );
};

export default HomepageHero;
