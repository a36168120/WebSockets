import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const NavLinks = () => (
  <div>
    <NavLink to="/" className="NavLinks">
      Home
    </NavLink>
    <NavLink to="/input" className="NavLinks">
      Input
    </NavLink>
    <NavLink to="/output" className="NavLinks">
      Output
    </NavLink>
  </div>
);

export default NavLinks;
