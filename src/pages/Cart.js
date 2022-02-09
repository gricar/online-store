import React, { Component } from 'react';
import { ReactComponent as ShoppingCart } from '../images/ShoppingCart.svg';

export default class Cart extends Component {
  render() {
    return (
      <>
        <header>
          <ShoppingCart width="50" />
          - Carrinho de compras
        </header>
        <section>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </section>
      </>
    );
  }
}
