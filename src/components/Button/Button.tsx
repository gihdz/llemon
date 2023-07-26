import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props {
  text: string;
  color?: "primary1" | "primary2";
}
const Button = ({ text, color }: Props) => {
  const bgColorStyle = styles[color || "primary2"];
  return (
    <button type="button" className={classNames(styles.button, bgColorStyle)}>
      {text}
    </button>
  );
};

export default Button;
