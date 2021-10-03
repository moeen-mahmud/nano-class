import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about-us">About</NavLink>
      <NavLink to="/classes">Classes</NavLink>
      <NavLink to="/special">Special</NavLink>
    </div>
  );
};

export default Header;
