import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CarrinhoVazio from './componentes/CarrinhoVazio';
// import Categories from './componentes/Categories';
// import SearchBar from './componentes/SearchBar';
// import ProductList from './componentes/ProductList';
import ProductDetails from './componentes/Productdetails';
import './index.css';
import Home from './componentes/Home';
import Cart from './componentes/Cart'
// import * as api from './services/api';

class App extends React.Component {

  render() {
    // const { myCateg, results } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default App;
