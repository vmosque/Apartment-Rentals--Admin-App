import React from "react";

import rentadoImg from "../assets/rentado.png";
import logoImg from "../assets/logo.png";
import profileLogo from "../assets/profile-icon.png";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <img className="navbar-logo" src={logoImg} alt="Logo" />
        <img className="navbar-rentado" src={rentadoImg} alt="Logo" />
        <img
          className="navbar-profileLogo"
          src={profileLogo}
          alt="profileLogo"
        />
      </nav>
    </>
  );
};

export default Navbar;
