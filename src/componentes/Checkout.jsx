import React from 'react';
import Inputs from './Inputs';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: JSON.parse(localStorage.getItem('Mycart')) };
  }
  render() {
    const { cart } = this.state;
    return (
      <div>
        {cart.map((elements) => (
          <div>
            <p>{elements.title}</p>
            <p>{elements.price}</p>
            <p>{elements.qnt}</p>
            <p>{elements.price * elements.qnt}</p>
          </div>
        ))}
        <p>
          {cart.reduce((total, item) => total + (item.qnt * item.price), 0)}
        </p>
        <Inputs />
      </div>
    );
  }
}
export default Checkout;
