import React, { PropsWithChildren } from "react";
import styles from "./Box.module.scss";
import classNames from "classnames";

type SpaceMultiplierType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface BoxProps {
  marginBottom?: SpaceMultiplierType;
  marginTop?: SpaceMultiplierType;
}

const getMarginClassnames = (props: BoxProps): string[] => {
  const margins: ("marginTop" | "marginBottom")[] = [
    "marginTop",
    "marginBottom",
  ];

  return margins
    .map((margin) => {
      const marginPropValue = props[margin];
      return !!marginPropValue ? styles[`${margin}${marginPropValue}`] : null;
    })
    .filter((marginClassName) => marginClassName !== null);
};

const Box = ({ children, ...restProps }: PropsWithChildren<BoxProps>) => {
  return (
    <div className={classNames(getMarginClassnames(restProps))}>{children}</div>
  );
};

export default Box;
