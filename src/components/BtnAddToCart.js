import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saveCartItem } from '../services/LocalStorageCart';

export default class BtnAddToCart extends Component {
  onBtnClick = () => {
    const { itemObj } = this.props;
    saveCartItem(itemObj);
  }

  render() {
    const { productId } = this.props;

    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          value={ productId }
          onClick={ this.onBtnClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

BtnAddToCart.propTypes = {
  productId: PropTypes.string.isRequired,
  itemObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
