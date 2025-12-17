import rentadoImg from "../assets/rentado.png";
import logoImg from "../assets/logo.png";
import profileLogo from "../assets/profile-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <img className="navbar-logo" src={logoImg} alt="Logo" />
      </Link>

      <Link to="/">
        <img className="navbar-rentado" src={rentadoImg} alt="Rentado" />
      </Link>

      <Link to="/signin">
        <img
          className="navbar-profileLogo"
          src={profileLogo}
          alt="profileLogo"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
