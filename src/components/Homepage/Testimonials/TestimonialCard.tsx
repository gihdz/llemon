import React from "react";
import styles from "./TestimonialCard.module.scss";
import Text from "components/Text/Text";

const TestimonialCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Text size={14} weight="bold">
          Rating
        </Text>
        <div className={styles.reviewHero}>
          <div className={styles.reviewImageContainer}></div>
          <Text size={14} weight="bold">
            Name
          </Text>
        </div>
        <Text>Review test</Text>
      </div>
    </div>
  );
};

export default TestimonialCard;
