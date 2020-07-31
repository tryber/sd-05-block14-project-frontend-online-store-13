import React from 'react';
import CarrinhoVazio from './componentes/CarrinhoVazio';
import ApiFetch from './componentes/Requisito4';
import SearchBar from './componentes/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <CarrinhoVazio />
      <ApiFetch />
    </div>
  );
}

export default App;
