import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingCart } from '../images/ShoppingCart.svg';

export default class CartIcon extends Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <ShoppingCart width="50" alt="Shopping Cart" />
      </Link>
    );
  }
}
