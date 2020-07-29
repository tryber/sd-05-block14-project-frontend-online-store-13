import React from 'react';
import CarrinhoVazio from './componentes/CarrinhoVazio';
import ApiFetch from './Requisito4';
import StartingPage from './componentes/startingpage';

function App() {
  return (
    <div>
      <StartingPage />
      <CarrinhoVazio />
      <ApiFetch />
    </div>
  );
}

export default App;
