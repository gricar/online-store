import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getProductsFromCategoryAndQuery, saveCartItem,
} from '../services/api';
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
        {results.map((item, { id, thumbnail, title, price }) => (
          <section key={ id }>
            <Link
              to={ `/product-details/${id}` }
              data-testid="product-detail-link"
            >
              <div data-testid="product">
                <img src={ thumbnail } alt={ title } />
                <p>{ title }</p>
                <p>{ price }</p>
              </div>
            </Link>
            <BtnAddToCart
              productId={ id }
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
  itemObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResults;
