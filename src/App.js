import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CarrinhoVazio from './componentes/CarrinhoVazio';
// import Categories from './componentes/Categories';
// import SearchBar from './componentes/SearchBar';
// import ProductList from './componentes/ProductList';
import ProductDetails from './componentes/Productdetails';
import './index.css';
import Home from './componentes/Home';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';
import * as api from './services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      category: null,
      value: null,
      query: null,
      results: [],
      cartSize: 0,
      cart: [],
    };
    this.searchQuery = this.searchQuery.bind(this);
    this.searchCateg = this.searchCateg.bind(this);
  }
  componentDidMount() {
    this.searchCateg();
  }
  searchCateg() {
    api
      .getCategories()
      .then((categorias) => this.setState({ myCateg: categorias }));
  }
  searchQuery() {
    const searchT = localStorage.getItem('Textsearch');
    const catID = localStorage.getItem('CatID');
    console.log(searchT);
    console.log(catID);
    api
      .getProductsFromCategoryAndQuery(searchT, catID)
      .then((data) => this.setState({ results: data }));
  }

  render() {
    const { searchQuery, searchCateg } = this;
    const funcCart = { searchQuery, searchCateg };
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...this.state} funcCart={funcCart} {...props} />
            )}
          />
          <Route
            exact
            path="/details"
            render={(props) => <ProductDetails {...this.state} {...props} />}
          />
          <Route exact path="/cart" render={(props) => <Cart {...props} />} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
