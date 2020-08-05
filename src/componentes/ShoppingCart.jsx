import React from 'react';
import EmptyCart from './EmptyCart';
import ItemShoppingCart from './ItemShoppingCart';

class ShoppingCart extends React.Component {
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
          <ItemShoppingCart key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
export default ShoppingCart;
