import React from "react";
import styles from "./Testimonials.module.scss";
import TestimonialCard from "components/Homepage/Testimonials/TestimonialCard";
import Text from "components/Text/Text";
import Box from "components/Box/Box";

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <Box marginBottom={12}>
        <Text align="center" size={36} weight="bold">
          Testimonials
        </Text>
      </Box>
      <div className={styles.content}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
