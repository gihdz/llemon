import React from "react";
import styles from "./Specials.module.scss";
import SpecialsCard from "components/Homepage/Specials/components/SpecialsCard/SpecialsCard";
import GreekSaladImg from "images/greeksalad.jpg";
import BruschettaImg from "images/bruchetta.png";
import LemonDessertImg from "images/lemondessert.jpg";
import Text from "components/Text/Text";
import Button from "components/Button/Button";

const cardsInfo = [
  {
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "12.99",
    imgSrc: GreekSaladImg,
    imgAlt: "Greek salad",
  },
  {
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "5.99",
    imgSrc: BruschettaImg,
    imgAlt: "Bruschetta",
  },
  {
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "5.00",
    imgSrc: LemonDessertImg,
    imgAlt: "Lemon Dessert",
  },
];

const Specials = () => {
  const specialsCards = cardsInfo.map(
    ({ title, description, imgSrc, imgAlt, price }) => (
      <SpecialsCard
        key={title}
        title={title}
        description={description}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        price={price}
      />
    ),
  );
  return (
    <div className={styles.container}>
      <div className={styles.ctaContainer}>
        <Text size={64}>This weeks specials!</Text>
        <div>
          <Button text="Online Menu" />
        </div>
      </div>
      <div className={styles.cardsContainer}>{specialsCards}</div>
    </div>
  );
};

export default Specials;
