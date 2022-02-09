import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { getCategories } from '../services/api';
import CartIcon from '../components/CartIcon';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: '',
      didRequest: false,
      allCategories: [],
    };
  }

  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories = async () => {
    const allCategories = await getCategories();
    this.setState({ allCategories });
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
    const { query, category, didRequest, allCategories } = this.state;
    return (
      <div>
        <div id="cart">
          <CartIcon />
        </div>
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
        <ul>
          {
            allCategories.map(({ name, id }) => (
              <li key={ id }>
                <label data-testid="category" htmlFor={ id }>
                  <input type="radio" />
                  { name }
                </label>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
