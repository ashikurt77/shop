import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./Header.styles.scss";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";

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
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps)(Header);
