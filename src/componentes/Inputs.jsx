import React from 'react';

class Inputs extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">Nome completo
          <input id="nome" type="text" data-testid="checkout-fullname" />
        </label>
        <br />
        <label htmlFor="email">Email
          <input id="email" type="email" data-testid="checkout-email" />
        </label>
        <br />
        <label htmlFor="cpf">CPF
          <input id="cpf" type="text" data-testid="checkout-cpf" />
        </label>
        <br />
        <label htmlFor="tel">Telefone
          <input id="tel" type="text" data-testid="checkout-phone" />
        </label>
        <br />
        <label htmlFor="cep">Cep
          <input id="cep" type="text" data-testid="checkout-cep" />
        </label>
        <br />
        <label htmlFor="ender">Endereço
          <input id="ender" type="text" data-testid="checkout-address" />
        </label>
      </form>
    );
  }
}
export default Inputs;
