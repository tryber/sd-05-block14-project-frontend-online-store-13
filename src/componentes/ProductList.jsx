import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <div className="product-list">
        {results.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    );
  }
}

export default ProductList;
