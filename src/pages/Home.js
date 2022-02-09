import React from 'react';
import SearchResults from './SearchResults';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: '',
      requestDid: false,
    };
  }

  onBtnClick = () => {
    this.setState({
      requestDid: true,
    });
  }

  onSearchChange = ({ target }) => {
    const search = target.value;
    this.setState({
      query: search,
    });
  }

  render() {
    const { query, category, requestDid } = this.state;
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
        { requestDid && <SearchResults query={ query } category={ category } />}
      </div>
    );
  }
}
