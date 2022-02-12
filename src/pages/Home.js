import React, { Component } from 'react';
import SearchResults from '../components/SearchResults';
import { getCategories } from '../services/api';
import { getCartItems } from '../services/LocalStorageCart';
import CartIcon from '../components/CartIcon';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: '',
      didRequest: false,
      allCategories: [],
      quantity: 0,
      cartIsempty: true,
    };
  }

  componentDidMount() {
    this.getAllCategories();
    this.updateCart();
  }

  updateCart = () => {
    const cartItems = getCartItems();
    const cartQuantity = cartItems.reduce((acc, curr) => curr.count + acc, 0);
    this.setState({
      quantity: cartQuantity,
    }, () => {
      if (cartQuantity > 0) {
        this.setState({
          cartIsempty: false,
        });
      }
    });
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

  handleChangeCategory = ({ target }) => {
    const selectedCategory = target.value;
    this.setState({
      category: selectedCategory,
      didRequest: true,
    });
  }

  render() {
    const { query,
      category,
      didRequest,
      allCategories,
      quantity,
      cartIsempty } = this.state;
    return (
      <div>
        <div id="cart">
          <CartIcon empty={ cartIsempty } quantity={ quantity } />
        </div>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
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
        </div>
        { didRequest && <SearchResults
          query={ query }
          category={ category }
          empty={ cartIsempty }
          quantity={ quantity }
          updateCart={ this.updateCart }
        />}
        <ul>
          {
            allCategories.map(({ name, id }) => (
              <li key={ id }>
                <label data-testid="category" htmlFor={ id }>
                  <input
                    id={ id }
                    type="radio"
                    name="category"
                    value={ id }
                    onChange={ this.handleChangeCategory }
                  />
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
