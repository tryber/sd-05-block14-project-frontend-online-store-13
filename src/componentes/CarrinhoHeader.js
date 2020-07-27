import React from 'react';
import Image from './Image';
import './Carrinho.css';

class CarrinhoHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="setinha">
          <Image
            src="https://icon-icons.com/icons2/2036/PNG/32/curve_left_arrow_icon_124203.png"
            alt="ícone voltar"
          />
        </div>
        <div data-testid="shopping-cart-button" className="carrinho">
          <Image
            src="https://image.flaticon.com/icons/svg/1170/1170678.svg"
            alt="ícone carrinho de compras"
          />
          <p>Carrinho de Compras</p>
        </div>
      </div>
    );
  }
}

export default CarrinhoHeader;
