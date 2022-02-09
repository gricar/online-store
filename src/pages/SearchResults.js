import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
        {results.map(({ id, thumbnail, title, price }) => (
          <div key={ id } data-testid="product">
            <img src={ item.thumbnail } alt={ title } />
            <p>{ title }</p>
            <p>{ price }</p>
          </div>
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
