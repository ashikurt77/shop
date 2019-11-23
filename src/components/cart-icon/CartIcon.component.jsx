import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/cart-icon.svg";

import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCart, cartItems }) => {
  let newCart = [];
  cartItems.map(item => newCart.push(item.quantity));
  const quantity = newCart.reduce((a, b) => a + b, 0);

  return (
    <div className="cart-icon" onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
