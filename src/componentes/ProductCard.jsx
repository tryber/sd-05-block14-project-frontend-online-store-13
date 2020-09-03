import React from 'react';
import { Link } from 'react-router-dom';
// import ProductDetails from './Productdetails';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.addCart = this.addCart.bind(this);
  }
  handleClick() {
    const { product } = this.props;
    localStorage.setItem('Produto', JSON.stringify(product));
  }
  addCart() {
    const { product, cart } = this.props;
    console.log(cart);
    cart.push(product);
    localStorage.setItem('Mycart', JSON.stringify(cart));
  }
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{product.title}</p>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.price}</p>
        <Link to="/details">
          <button data-testid="product-detail-link" onClick={this.handleClick}>
            Ver detalhes
          </button>
        </Link>
        <button onClick={this.addCart} data-testid="product-add-to-cart">
          Adicionar no carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;
