import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import Text from "components/Text/Text";

interface Props {
  text: string;
  color?: "primary1" | "primary2";
}
const Button = ({ text, color }: Props) => {
  const bgColorStyle = styles[color || "primary2"];
  return (
    <button type="button" className={classNames(styles.button, bgColorStyle)}>
      <Text size="16" weight="medium">
        {text}
      </Text>
    </button>
  );
};

export default Button;
