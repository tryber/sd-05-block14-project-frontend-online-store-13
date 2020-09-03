import React from 'react';
import { Link } from 'react-router-dom';
// import ProductDetails from './Productdetails';
import indexFinder from '../services/indexFinder';

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
    // console.log(cart);
    const qChec = indexFinder(cart, product.id);

    console.log(qChec);
    if (qChec === -1) {
      product.qnt = 1;
      cart.push(product);
    } else if (qChec >= 0 && cart[qChec].qnt < product.available_quantity) {
      cart[qChec].qnt += 1;
    }
    localStorage.setItem('Mycart', JSON.stringify(cart));
  }
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{product.title}</p>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.price}</p>
        {product.shipping.free_shipping && <p data-testid="free-shipping">Frete Gratis</p>}
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
