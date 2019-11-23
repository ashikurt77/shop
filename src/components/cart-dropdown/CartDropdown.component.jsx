import React from "react";
import CustomButton from "../custom-button/CustomButton.component";

import { connect } from "react-redux";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ isCartHidden }) => {
  return (
    <div
      className={isCartHidden ? "no-dropdown cart-dropdown" : "cart-dropdown"}
    >
      <div className="cart-items" />
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  isCartHidden: state.cart.hidden
});

export default connect(mapStateToProps)(CartDropdown);
