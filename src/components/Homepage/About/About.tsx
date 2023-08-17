import React from "react";
import styles from "./About.module.scss";
import Text from "components/Text/Text";
import Box from "components/Box/Box";
import RestaurantImg from "images/restaurant.jpg";
import RestaurantChef from "images/restaurantchef.jpg";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Box marginBottom={8}>
          <Box>
            <Text size={64}>Little Lemon</Text>
            <Text size={40}>Chicago</Text>
          </Box>
        </Box>
        <div className={styles.aboutDescription}>
          <Text size={20} weight={"bold"}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </Text>
          <div className={styles.imagesContainer}>
            <img alt={"Restaurant"} src={RestaurantImg} />
            <img alt={"Restaurant Chef"} src={RestaurantChef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
