import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Evaluation extends Component {
  render() {
    const { email, checkedRadioButton, comment } = this.props;
    const entries = Object.entries(checkedRadioButton).find((item) => item[1]);
    return (
      <div>
        <section>
          <span>{ email }</span>
          <span>{ entries ? entries[0] : ''}</span>
          <span>{ comment }</span>
        </section>
      </div>
    );
  }
}

Evaluation.propTypes = {
  email: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  checkedRadioButton: PropTypes.objectOf(PropTypes.bool).isRequired,
};
