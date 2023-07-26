import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Text.module.scss";

type TextSizeType = "regular" | "title" | "subTitle" | "cta";
type TextColorType = "default" | "light" | "primary1" | "primary2";
interface Props {
  size?: TextSizeType;
  color?: TextColorType;
}

const Text = ({ children, size, color }: PropsWithChildren<Props>) => {
  const textSizeStyle = styles[size || "regular"];
  const textColorStyle = styles[color || "default"];
  return (
    <div className={classNames(textSizeStyle, textColorStyle)}>{children}</div>
  );
};

export default Text;
