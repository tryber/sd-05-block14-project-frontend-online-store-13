import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = { cart: JSON.parse(localStorage.getItem('Produto')) };
  //   }

  render() {
    const { resQ, cart } = this.props;
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
          <ProductCard product={product} key={product.id} cart={cart} />
        ))}
        {/* <p data-testid="shopping-cart-size">
        {cart.reduce((tot, item) => tot + item.qnt, 0)}</p> */}
      </div>
    );
  }
}
export default ProductList;
