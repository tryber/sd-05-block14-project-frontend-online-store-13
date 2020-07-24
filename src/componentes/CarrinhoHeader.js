import React from 'react';

class CarrinhoHeader extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="https://br.freepik.com/icones-gratis/curva-de-ponto-de-seta-para-a-esquerda_694912.htm"
            alt="ícone voltar"
          />
        </div>
        <div>
          <img
            src="https://www.gratispng.com/png-4x5ugc/download.html"
            alt="ícone carrinho de compras"
          />
          <p>Carrinho de Compras</p>
        </div>
      </div>
    );
  }
}

export default CarrinhoHeader;
