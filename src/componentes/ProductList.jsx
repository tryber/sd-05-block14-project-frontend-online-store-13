import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { resQ } = this.props;
    if (resQ.results === undefined) {
      return (
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      );
    }
    return (
      <div className="product-list">
        {resQ.results.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    );
  }
}
export default ProductList;
