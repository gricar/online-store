import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../components/CartIcon';
import { getDetailsFromProductId } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    productInfo: '',
  }

  componentDidMount() {
    const { match: { params: { productId } } } = this.props;
    this.fetchApi(productId);
  }

  fetchApi = async (productId) => {
    const productInfo = await getDetailsFromProductId(productId);
    this.setState({ productInfo });
  }

  render() {
    const {
      productInfo: { title, thumbnail, price },
    } = this.state;
    return (
      <div>
        <div id="cart">
          <CartIcon />
        </div>
        <section>
          <img src={ thumbnail } alt={ title } />
          <h3 data-testid="product-detail-name">{ title }</h3>
          <p>{ `R$ ${price}` }</p>
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
};
