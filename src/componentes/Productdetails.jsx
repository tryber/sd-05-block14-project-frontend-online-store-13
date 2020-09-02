import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: JSON.parse(localStorage.getItem('Produto')) };
    // this.getProduct = this.getProduct.bind(this);
  }
  // getProduct() {
  //   const product = JSON.parse(localStorage.getItem('Produto'));
  //   this.setState({ product: product });
  // }
  // componentDidMount() {
  //   this.getProduct();
  // }
  render() {
    const { product } = this.state;
    if (this.state.product !== null) {
      return (
        <div>
          <p data-testid="product-detail-name">{product.title}</p>
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
