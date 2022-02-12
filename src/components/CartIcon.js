import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingCart } from '../images/ShoppingCart.svg';

export default class CartIcon extends Component {
  render() {
    const { quantity, empty } = this.props;
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <ShoppingCart width="50" alt="Shopping Cart" />
        {empty
          ? (<p data-testid="shopping-cart-size">0</p>)
          : (
            <p data-testid="shopping-cart-size">
              {
                quantity
              }

            </p>)}
      </Link>
    );
  }
}

CartIcon.propTypes = {
  quantity: PropTypes.number.isRequired,
  empty: PropTypes.bool.isRequired,
}.isRequired;
