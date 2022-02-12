import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../components/CartIcon';
import { getDetailsFromProductId } from '../services/api';
import { getCartItems, saveCartItem } from '../services/LocalStorageCart';
import RatingProduct from '../components/RatingProduct';
import BtnAddToCart from '../components/BtnAddToCart';

export default class ProductDetails extends Component {
  state = {
    productInfo: {},
    quantity: 0,
    empty: true,
  };

  componentDidMount() {
    const { match: { params: { productId } } } = this.props;
    this.fetchApi(productId);
  }

  updateCart = () => {
    const cartItems = getCartItems();
    const cartQuantity = cartItems.reduce((acc, curr) => curr.count + acc, 0);
    this.setState({
      quantity: cartQuantity,
    }, () => {
      if (cartQuantity > 0) {
        this.setState({
          empty: false,
        });
      }
    });
  }

  onBtnClick = async () => {
    const { productInfo } = this.state;
    await saveCartItem(productInfo);
  }

  fetchApi = async (productId) => {
    this.updateCart();
    const productInfo = await getDetailsFromProductId(productId);
    this.setState({ productInfo });
  }

  render() {
    const { productInfo, empty, quantity } = this.state;
    return (
      <div>
        <div id="cart">
          <CartIcon empty={ empty } quantity={ quantity } />
        </div>
        {/* Apenas renderiza as informações do produto quando termina o fetch na API */}
        {productInfo.id
          ? (
            <section>
              <img src={ productInfo.thumbnail } alt={ productInfo.title } />
              <h3 data-testid="product-detail-name">{ productInfo.title }</h3>
              <p>{ `R$ ${productInfo.price}` }</p>
              <BtnAddToCart
                productId={ productInfo.id }
                itemObj={ productInfo }
                itemsCart={ saveCartItem }
                empty={ empty }
                quantity={ quantity }
                getCart={ () => { this.updateCart(); } }
                dataTestID="product-detail-add-to-cart"
              />
            </section>)
          : null}

        <RatingProduct />
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
