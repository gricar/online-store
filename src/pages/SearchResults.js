import PropTypes from 'prop-types';
import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchResults extends React.Component {
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
    console.log(response);
    this.setState({
      results: response.results,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        {results.map((item) => (
          <div key={ item.id } data-testid="product">
            <img src={ item.thumbnail } alt={ item.title } />
            <p>{ item.title }</p>
            <p>{ item.price }</p>
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
