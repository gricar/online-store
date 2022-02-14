import React, { Component } from 'react';
import { getCartItems } from '../services/LocalStorageCart';

export default class FinalPage extends Component {
  state ={
    cart: [],
  }

  componentDidMount() {
    this.updateCart();
  }

  updateCart = () => {
    const cartItems = getCartItems();
    this.setState({
      cart: cartItems,
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <div>
          { cart.map((item) => (
            <div key={ item.id }>
              <img src={ item.thumbnail } alt={ item.title } />
              <h3 data-testid="shopping-cart-product-name">{ item.title }</h3>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade:
                { item.count }
              </p>
            </div>
          ))}
        </div>
        <form>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome"
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
          />
          <input
            data-testid="checkout-phone"
            type="text"
            placeholder="Telefone"
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
          />
          <button
            data-testid=""
            type="button"
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    );
  }
}
