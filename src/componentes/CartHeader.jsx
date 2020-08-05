import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import '../css/Carrinho.css';

class CartHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="setinha">
          <Link to="/"><img src="https://icon-icons.com/icons2/2036/PNG/32/curve_left_arrow_icon_124203.png" alt="imagem de seta para voltar" /></Link>
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

export default CartHeader;
