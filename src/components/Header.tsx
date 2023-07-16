import React from "react";
import { PropsWithChildren } from "react";
const Header = (props: PropsWithChildren): JSX.Element => {
  return <header>{props.children}</header>;
};

export default Header;
