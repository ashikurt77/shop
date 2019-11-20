import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./Header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        {" "}
        Shop{" "}
      </Link>
      <Link to="/contact" className="option">
        {" "}
        Contact{" "}
      </Link>
    </div>
  </div>
);

export default Header;
