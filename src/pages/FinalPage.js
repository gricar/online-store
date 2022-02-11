import React, { Component } from 'react';

export default class FinalPage extends Component {
  /* state ={
    checkoutEmail: '',
    checkoutName: '',
    checkoutPhone: '',
    checkoutAddress: '',
    checkoutCep: '',
    checkoutCpf: '',

  } */

  render() {
    return (
      <div>
        <form>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome"
            // onChange={ ({ target }) => this.setState({ checkoutName: target.value }) }
            // value={ checkoutName }
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
            // onChange={ ({ target }) => this.setState({ checkoutEmail: target.value }) }
            // value={ checkoutEmail }
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
            // onChange={ ({ target }) => this.setState({ checkoutCpf: target.value }) }
            // value={ checkoutCpf }
          />
          <input
            data-testid="checkout-phone"
            type="text"
            placeholder="Telefone"
            // onChange={ ({ target }) => this.setState({ checkoutPhone: target.value }) }
            // value={ checkoutPhone }
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
            // onChange={ ({ target }) => this.setState({ checkoutCep: target.value }) }
            // value={ checkoutCep }
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
            // onChange={ ({ target }) => this.setState({ checkoutAddress: target.value }) }
            // value={ checkoutAddress }
          />
          <button
            data-testid=""
            type="button"
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    );
  }
}
