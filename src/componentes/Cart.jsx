import React from 'react';
import Image from './Image';
// import CarrinhoHeader from './CarrinhoHeader';
import '../css/Carrinho.css';
// import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: JSON.parse(localStorage.getItem('Mycart')) };
  }
  render() {
    const { cart } = this.state;
    if (localStorage.Mycart !== null) {
      console.log(this.state.cart);
      return (
        <div>
          {cart.map((elements) => (
            <p data-testid="shopping-cart-product-name">{elements.title}</p>
          ))}
          <p data-testid="shopping-cart-product-quantity">
            Total de items:{cart.length}
          </p>
        </div>
      );
    }
    return (
      <div>
        <h2>teste</h2>
        <div className="vazio">
          <Image
            src="https://cdn.icon-icons.com/icons2/38/PNG/512/emptybox_5117.png"
            alt="Ícone caixa vazia"
          />
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Cart;
