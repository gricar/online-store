import React from 'react';
import { getCategories } from '../services/api';

export default class Home extends React.Component {
  state = {
    allCategories: [],
  }

  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories = async () => {
    const allCategories = await getCategories();
    this.setState({ allCategories });
  }

  render() {
    const { allCategories } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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
