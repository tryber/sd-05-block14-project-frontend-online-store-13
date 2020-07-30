import React from 'react';
import Image from './Image';
import CarrinhoHeader from './CarrinhoHeader';
import '../css/Carrinho.css';

class CarrinhoVazio extends React.Component {
  render() {
    return (
      <div>
        <CarrinhoHeader />
        <div className="vazio">
          <Image
            src="https://cdn.icon-icons.com/icons2/38/PNG/512/emptybox_5117.png"
            alt="Ícone caixa vazia"
          />
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default CarrinhoVazio;
