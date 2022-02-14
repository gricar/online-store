import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EndPurchaseButton extends Component {
  render() {
    return (
      <Link to="/finalPage">
        <button type="button" data-testid="checkout-products">
          <p>Finalizar Compra</p>
        </button>
      </Link>
    );
  }
}
