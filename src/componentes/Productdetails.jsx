import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: JSON.parse(localStorage.getItem('Produto')) };
    this.cartAdd = this.cartAdd.bind(this);
  }
  cartAdd() {
    const { product } = this.state;
    const { cart } = this.props;
    cart.push(product);
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
            clique aqui
          </button>
          <Link to="/">
            <button>voltar</button>
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button>Cart</button>
          </Link>
          <div>
            <p data-testid="product-detail-name">{product.title}</p>
          </div>
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
