import React from 'react';
import CartIcon from '../components/CartIcon';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="cart">
          <CartIcon />
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
