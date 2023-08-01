import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Text.module.scss";

type TextSizeType = 12 | 14 | 16 | 20 | 28 | 36 | 40 | 64;
type TextColorType =
  | "default"
  | "light"
  | "primary1"
  | "primary2"
  | "secondary1"
  | "secondary2"
  | "secondary3"
  | "secondary4";
type TextFontWeight = "regular" | "medium" | "bold" | "extraBold";
interface Props {
  size?: TextSizeType;
  color?: TextColorType;
  // Weight won't apply for 48 and 60 text sizes
  weight?: TextFontWeight;
  align?: "start" | "end" | "center";
}

const getFontSizeKey = (size?: TextSizeType) => {
  if (size === 64) return "title";
  if (size === 40) return "subTitle";
  return `fontSize${size || 14}`;
};
const getFontWeightKey = (weight?: TextFontWeight, size?: TextSizeType) => {
  if (size === 64 || size === 40) return "";
  const weightCssValueMap: Record<TextFontWeight, string> = {
    regular: "400",
    medium: "500",
    bold: "700",
    extraBold: "800",
  };
  return `fontWeight${weight ? weightCssValueMap[weight] : "400"}`;
};
const Text = ({
  children,
  size,
  color,
  weight,
  align,
}: PropsWithChildren<Props>) => {
  const textSizeStyle = styles[getFontSizeKey(size)];
  const textFontWeightStyle = styles[getFontWeightKey(weight, size)];
  const textColorStyle = styles[color || "default"];
  const alignStyle = styles[align ? `${align}Align` : "startAlign"];
  return (
    <div
      className={classNames(
        styles.container,
        textSizeStyle,
        textColorStyle,
        textFontWeightStyle,
        alignStyle,
      )}
    >
      {children}
    </div>
  );
};

export default Text;
