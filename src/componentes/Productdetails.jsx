import React from 'react';
import { Link } from 'react-router-dom';
import indexFinder from '../services/indexFinder';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: JSON.parse(localStorage.getItem('Produto')) };
    this.cartAdd = this.cartAdd.bind(this);
  }
  cartAdd() {
    const { product } = this.state;
    const { cart } = this.props;
    const checkQnt = indexFinder(cart, product.id);
    console.log(checkQnt);
    if (checkQnt === -1) {
      product.qnt = 1;
      cart.push(product);
    } else {
      cart[checkQnt].qnt += 1;
    }
    localStorage.setItem('Mycart', JSON.stringify(cart));
  }

  render() {
    const { product } = this.state;
    if (this.state.product !== null) {
      return (
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            onClick={this.cartAdd}
          >
            Adicionar
          </button>
          <Link to="/">
            <button>voltar</button>
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button>Cart</button>
          </Link>
          <div>
            <p data-testid="product-detail-name">{product.title}</p>
            <textarea data-testid="product-detail-evaluation" />
          </div>
          {/* <p data-testid="shopping-cart-size">
          {cart.reduce((tot, item) => tot + item.qnt, 0)}</p> */}
        </div>
      );
    }
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }
}
export default ProductDetails;
