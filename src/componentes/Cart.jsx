import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
// import CarrinhoHeader from './CarrinhoHeader';
import '../css/Carrinho.css';
import indexFinder from '../services/indexFinder';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: JSON.parse(localStorage.getItem('Mycart')) };
    this.handAdd = this.handAdd.bind(this);
    this.handSub = this.handSub.bind(this);
  }
  handAdd(event) {
    const { cart } = this.state;
    const newCart = [...cart];
    const targetID = event.target.id;
    const addFinder = indexFinder(newCart, targetID);
    if (newCart[addFinder].qnt < newCart[addFinder].available_quantity) {
      newCart[addFinder].qnt += 1;
    }
    this.setState({ cart: newCart });
    localStorage.setItem('Mycart', JSON.stringify(newCart));
  }
  handSub(event) {
    const { cart } = this.state;
    const newCart = [...cart];
    const subFinder = indexFinder(newCart, event.target.id);
    newCart[subFinder].qnt -= 1;
    this.setState({ cart: newCart });
    localStorage.setItem('Mycart', JSON.stringify(newCart));
  }
  render() {
    const { cart } = this.state;
    if (localStorage.Mycart !== undefined) {
      return (
        <div>
          {cart.map((el) => (
            <div>
              <p data-testid="shopping-cart-product-name">{el.title}</p>
              <p>{el.price}</p>
              <p data-testid="shopping-cart-product-quantity">{el.qnt}</p>
              <button data-testid="product-increase-quantity" id={el.id} onClick={this.handAdd}>
                +
              </button>
              <button data-testid="product-decrease-quantity" id={el.id} onClick={this.handSub}>
                -
              </button>
            </div>
          ))}
          <p data-testid="shopping-cart-size">{cart.reduce((tot, item) => tot + item.qnt, 0)}</p>
          <Link to="/checkout"><button data-testid="checkout-products">Finalizar</button></Link>
        </div>
      );
    }
    return (
      <div>
        <div className="vazio">
          <Image src="https://cdn.icon-icons.com/icons2/38/PNG/512/emptybox_5117.png" />
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Cart;
