import React from 'react';
import CarrinhoVazio from './componentes/CarrinhoVazio';
import ApiFetch from './Requisito4';
// Função principal
function App() {
  return (
    <div>
      <CarrinhoVazio />
      <ApiFetch />
    </div>
  );
}

export default App;
