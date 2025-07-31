import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

const Logo = () => {
  return (
    <>
      <NavLink className="navbar-brand logo" href="#">
        <img
          src={logo}
          style={{ width: "200px" }}
          alt="logo"
        />
      </NavLink>
    </>
  );
};

export default Logo;
