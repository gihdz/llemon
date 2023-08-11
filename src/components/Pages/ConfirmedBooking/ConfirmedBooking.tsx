import React, { useEffect } from "react";
import Text from "components/Text/Text";
import styles from "./ConfirmedBooking.module.scss";

const ConfirmedBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles.container}>
      <Text align={"center"} size={64}>
        Booking Confirmed!
      </Text>
    </div>
  );
};

export default ConfirmedBooking;
