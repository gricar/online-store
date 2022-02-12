import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saveCartItem } from '../services/LocalStorageCart';

export default class BtnAddToCart extends Component {
  onBtnClick = () => {
    const { itemObj } = this.props;
    saveCartItem(itemObj);
  }

  render() {
    const { productId, getCart, dataTestID } = this.props;

    return (
      <div>
        <button
          type="button"
          data-testid={ dataTestID }
          value={ productId }
          onClick={ () => { this.onBtnClick(); getCart(); } }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

BtnAddToCart.propTypes = {
  dataTestID: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  getCart: PropTypes.func.isRequired,
  itemObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
