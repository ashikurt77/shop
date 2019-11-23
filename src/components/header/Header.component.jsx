import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./Header.styles.scss";
import { auth } from "../../firebase/firebase";

import { connect } from "react-redux";

import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";

const Header = ({ currentUser }) => {
  return (
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {`Sign Out (${currentUser.displayName})`}
          </div>
        ) : (
          <Link className="option" to="signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

const mapStateToProps = ({ user, isCartDropdownHidden }) => {
  return {
    currentUser: user.currentUser,
    isCartDropdownHidden: isCartDropdownHidden.hidden
  };
};

export default connect(mapStateToProps)(Header);
