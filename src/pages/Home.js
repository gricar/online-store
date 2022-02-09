import React, { Component } from 'react';
import SearchResults from './SearchResults';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: '',
      didRequest: false,
    };
  }

  onBtnClick = () => {
    this.setState({
      didRequest: true,
    });
  }

  onSearchChange = ({ target }) => {
    const search = target.value;
    this.setState({
      query: search,
    });
  }

  render() {
    const { query, category, didRequest } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <form>
            <label htmlFor="search">
              <input
                type="text"
                data-testid="query-input"
                onChange={ this.onSearchChange }
                name="search"
              />
            </label>
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.onBtnClick }
            >
              Busca
            </button>
          </form>
        </p>
        { didRequest && <SearchResults query={ query } category={ category } />}
      </div>
    );
  }
}
