import React from 'react';
import CarrinhoVazio from './componentes/CarrinhoVazio';
import ApiFetch from './componentes/Requisito4';
import Card5 from './componentes/Card5';

function App() {
  return (
    <div>
      <Card5 />
      <CarrinhoVazio />
      <ApiFetch />
    </div>
  );
}

export default App;
