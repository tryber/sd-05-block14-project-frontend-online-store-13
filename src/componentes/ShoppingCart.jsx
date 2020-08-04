import React from 'react';
import EmptyCart from './EmptyCart';
import ProductCard from './ProductCard';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    this.setState({ products: shoppingCart });
  }

  render() {
    const { products: items } = this.state;

    if (!items) {
      return (
        <div>
          <EmptyCart />
        </div>
      );
    }
    return (
      <div>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
export default ShoppingCart;
