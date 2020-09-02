import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{product.title}</p>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.price}</p>
        <button>Ver detalhes</button>
      </div>
    );
  }
}

export default ProductCard;
