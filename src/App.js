import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './componentes/SearchBar';
import ShoppingCart from './componentes/ShoppingCart';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SearchBar />
          <ShoppingCart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
