import React, { Component } from 'react';
import Evaluation from './Evaluation';
import { saveInLocalStorage, getFromLocalStorage } from '../services/SaveInLocalStorage';

export default class RatingProduct extends Component {
  state = {
    email: '',
    comment: '',
    checkedRadioButton: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    },
    commentsArray: [],
  }

  ratingButtonClick = (event) => {
    event.preventDefault();
    const newCheckedRadioButton = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    };

    this.setState(({ commentsArray, checkedRadioButton, email, comment }) => {
      const obj = { checkedRadioButton, email, comment };
      saveInLocalStorage([obj, ...commentsArray]);
      return {
        commentsArray: [obj, ...commentsArray],
        email: '',
        comment: '',
        checkedRadioButton: newCheckedRadioButton,
      };
    });
  }

  selectRadioButton = ({ target: { value } }) => {
    const checkedRadioButton = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    };
    checkedRadioButton[value] = true;
    this.setState({ checkedRadioButton });
  }

  componentDidMount = () => {
    const getItems = getFromLocalStorage();
    if (getItems) this.setState({ commentsArray: getItems });
  }

  render() {
    const { email, comment, checkedRadioButton, commentsArray } = this.state;

    return (
      <div>
        <h2>Avaliações</h2>
        <form>
          <input
            data-testid="product-detail-email"
            type="email"
            placeholder="Email"
            onChange={ ({ target }) => this.setState({ email: target.value }) }
            value={ email }
          />
          { Object.keys(checkedRadioButton).map((number) => (<input
            data-testid={ `${number}-rating` }
            type="radio"
            name="rating"
            checked={ checkedRadioButton[number] }
            value={ number }
            onChange={ this.selectRadioButton }
            key={ number }
          />)) }
          <textarea
            placeholder="Mensagem (Opcional)"
            data-testid="product-detail-evaluation"
            onChange={ ({ target }) => this.setState({ comment: target.value }) }
            value={ comment }
          />
          <button
            data-testid="submit-review-btn"
            type="submit"
            onClick={ this.ratingButtonClick }
          >
            Avaliar
          </button>
        </form>
        <div>
          {commentsArray.map((item) => (<Evaluation
            key={ item.email }
            { ...item }
          />))}
        </div>
      </div>
    );
  }
}
