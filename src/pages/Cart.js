import React, { Component } from 'react';
import { ReactComponent as ShoppingCart } from '../images/ShoppingCart.svg';
import { getCartItems } from '../services/api';

export default class Cart extends Component {
  state = {
    cart: [],
  }

  async componentDidMount() {
    await this.fetchCart();
  }

  fetchCart = async () => {
    const cartItems = await getCartItems();
    this.setState({
      cart: cartItems,
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <>
        <header>
          <ShoppingCart width="50" />
          - Carrinho de compras
        </header>
        <section>
          {!cart
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : cart.map(({ id, title, thumbnail, count }) => (
              <div key={ id }>
                <img src={ thumbnail } alt={ title } />
                <h3 data-testid="shopping-cart-product-name">{ title }</h3>
                <p data-testid="shopping-cart-product-quantity">
                  Quantidade:
                  { count }
                </p>
              </div>
            )) }
        </section>
      </>
    );
  }
}
