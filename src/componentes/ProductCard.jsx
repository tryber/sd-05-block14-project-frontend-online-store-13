import React from 'react';
import { Link } from 'react-router-dom';
// import ProductDetails from './Productdetails';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { product } = this.props;
    localStorage.setItem('Produto', JSON.stringify(product));
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
      </div>
    );
  }
}

export default ProductCard;
