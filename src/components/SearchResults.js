import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
        {results.map(({ id,
          thumbnail,
          title,
          price,
          shipping,
        }) => (
          <Link
            to={ `/product-details/${id}` }
            data-testid="product-detail-link"
            key={ id }
          >
            <div data-testid="product">
              <img src={ thumbnail } alt={ title } />
              <p>{ title }</p>
              {shipping.free_shipping && <p data-testid="free-shipping">Frete Grátis</p>}
              <p>{ price }</p>
            </div>
          </Link>
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
