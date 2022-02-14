import React, { Component } from 'react';
import { ReactComponent as ShoppingCart } from '../images/ShoppingCart.svg';
import { getCartItems, removeCartItem, saveCartItem } from '../services/LocalStorageCart';
import EndPurchaseButton from '../components/EndPurchaseButton';

export default class Cart extends Component {
  state = {
    cart: [],
    cartIsempty: true,
  }

  componentDidMount() {
    this.updateCart();
  }

  updateCart = () => {
    const cartItems = getCartItems();
    this.setState({
      cart: cartItems,
    }, () => {
      if (cartItems.length > 0) {
        this.setState({
          cartIsempty: false,
        });
      }
    });
  }

  render() {
    const { cart, cartIsempty } = this.state;
    return (
      <>
        <header>
          <ShoppingCart width="50" />
          - Carrinho de compras
          <EndPurchaseButton />
        </header>
        <section>
          {cartIsempty
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : cart.map((item) => (
              <div key={ item.id }>
                <img src={ item.thumbnail } alt={ item.title } />
                <h3 data-testid="shopping-cart-product-name">{ item.title }</h3>
                <p data-testid="shopping-cart-product-quantity">
                  Quantidade:
                  { item.count }
                </p>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  value={ item.id }
                  onClick={ () => { removeCartItem(item, false); this.updateCart(); } }
                >
                  -
                </button>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  value={ item.id }
                  onClick={ () => { saveCartItem(item); this.updateCart(); } }
                >
                  +
                </button>
                <button
                  type="button"
                  value={ item.id }
                  onClick={ () => { removeCartItem(item, true); this.updateCart(); } }
                >
                  X
                </button>
              </div>
            )) }
        </section>
      </>
    );
  }
}
