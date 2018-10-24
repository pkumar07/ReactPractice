import React from "react";
import Navtab from "./Navtab.jsx";

const NavBar = () => {
  return (
    <div>
      <Navtab to="/about" label="About" />
      <Navtab to="/resume" label="Resume" />
      <Navtab to="/projects" label="Projects" />
      <Navtab to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar