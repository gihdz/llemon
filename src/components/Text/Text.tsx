import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Text.module.scss";

type TextSizeType = "regular" | "title" | "subTitle" | "cta";
interface Props {
  size?: TextSizeType;
}

const textSizeStyles: Record<TextSizeType, string> = {
  regular: styles.regular,
  title: styles.displayTitle,
  subTitle: styles.subTitle,
  cta: styles.ctaLead,
};
const Text = ({ children, size }: PropsWithChildren<Props>) => {
  const textSizeStyle = textSizeStyles[size];
  return <div className={classNames(textSizeStyle)}>{children}</div>;
};

Text.defaultProps = {
  size: "regular",
};

export default Text;
