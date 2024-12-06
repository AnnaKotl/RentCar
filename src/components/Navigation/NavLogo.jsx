import React from "react";
import { Link } from "react-router-dom";
import carLogo from "/images/nav-logo.png";
import { Logo } from "./NavHeader.styled";

const NavLogo = () => {
  return (
    <Link to="/">
      <Logo src={carLogo} alt="car-logo" height="80px" />
    </Link>
  );
};

export default NavLogo;
