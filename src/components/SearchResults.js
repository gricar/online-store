import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getProductsFromCategoryAndQuery,
} from '../services/api';
import { saveCartItem } from '../services/LocalStorageCart';
import BtnAddToCart from './BtnAddToCart';

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const { query, category } = this.props;
    const response = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      results: response.results,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        {results.map((item) => (
          <section key={ item.id }>
            <Link
              to={ `/product-details/${item.id}` }
              data-testid="product-detail-link"
            >
              <div data-testid="product">
                <img src={ item.thumbnail } alt={ item.title } />
                <p>{ item.title }</p>
                <p>{ item.price }</p>
                {item.shipping.free_shipping
                && <p data-testid="free-shipping">Frete Grátis</p>}
              </div>
            </Link>
            <BtnAddToCart
              productId={ item.id }
              itemObj={ item }
              itemsCart={ saveCartItem }
            />
          </section>
        ))}
      </div>
    );
  }
}

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default SearchResults;
