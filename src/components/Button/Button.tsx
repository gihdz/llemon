import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import Text from "components/Text/Text";

interface Props {
  text: string;
  color?: "primary1" | "primary2";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}
const Button = ({ text, color, type, disabled, onClick }: Props) => {
  const bgColorStyle = styles[color || "primary2"];
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={classNames(styles.button, bgColorStyle, {
        [styles.buttonDisabled]: disabled,
      })}
      onClick={onClick}
    >
      <Text size={16} weight="medium">
        {text}
      </Text>
    </button>
  );
};

export default Button;
