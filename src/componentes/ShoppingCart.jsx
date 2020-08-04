import React, { Component } from 'react';
import ProductList from './ProductList';
import EmptyCart from './EmptyCart';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    this.setState({ items: shoppingCart });
  }

  render() {
    const { items } = this.state;

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
          <ProductList key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
export default ShoppingCart;
