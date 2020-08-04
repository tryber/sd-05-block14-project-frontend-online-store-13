import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{product.title}</p>
        <Image src={product.thumbnail} alt={product.title} />
        <p>{product.price}</p>
        <button
          onClick={this.setCart}
          data-testid="product-add-to-cart"
          type="button"
        >
          Adicionar no carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={`/details/${product.id}/${product.title}`}
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

export default ProductCard;
