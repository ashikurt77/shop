import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/cart-icon.svg";

import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(ToggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
