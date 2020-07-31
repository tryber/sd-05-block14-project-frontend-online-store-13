import React from 'react';
import EmptyCart from './componentes/EmptyCart';
import ApiFetch from './componentes/Requisito4';
import SearchBar from './componentes/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <EmptyCart />
      <ApiFetch />
    </div>
  );
}

export default App;
