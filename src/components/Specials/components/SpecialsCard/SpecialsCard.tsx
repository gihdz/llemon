import React from "react";
import styles from "./SpecialsCard.module.scss";
import Text from "components/Text/Text";
import { ReactComponent as MotoDelivery } from "images/motodelivery.svg";

interface SpecialsCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  price: string;
}
const SpecialsCard = ({
  title,
  description,
  imgSrc,
  imgAlt,
  price,
}: SpecialsCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.cardImage} src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.bodyContent}>
        <div className={styles.titleAndDescriptionContainer}>
          <div className={styles.topContent}>
            <Text size={20} weight="medium">
              {title}
            </Text>
            <Text size={16} weight="medium" color="secondary1">
              {`$${price}`}
            </Text>
          </div>

          <Text size={16} weight="regular" color="primary1">
            {description}
          </Text>
        </div>

        <div className={styles.orderDeliveryContainer}>
          <Text size={16} weight="bold">
            Order a delivery
          </Text>
          <div>
            <MotoDelivery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialsCard;
