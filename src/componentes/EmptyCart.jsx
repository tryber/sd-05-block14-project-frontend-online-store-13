import React from 'react';
import Image from './Image';
import CartHeader from './CartHeader';
import '../css/Carrinho.css';

class EmptyCart extends React.Component {
  render() {
    return (
      <div>
        <CartHeader />
        <div className="vazio">
          <Image
            src="https://cdn.icon-icons.com/icons2/38/PNG/512/emptybox_5117.png"
            alt="Ícone caixa vazia"
          />
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default EmptyCart;
