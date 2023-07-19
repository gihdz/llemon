import React from "react";
import { PropsWithChildren } from "react";
const Header = (props: PropsWithChildren) => {
  return <header>{props.children}</header>;
};

export default Header;
