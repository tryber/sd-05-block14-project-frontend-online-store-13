import React from 'react';
import { Link } from 'react-router-dom';
// import Cart from './Cart';
import Categories from './Categories';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import * as api from '../services/api';

class Home extends React.Component {
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
    const { myCateg, results, cart } = this.state;
    console.log(cart);
    return (
      <div className="all">
        <div className="bloco1">
          <SearchBar searchQuery={this.searchQuery} />
          <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        </div>
        <div className="bloco2">
          <Categories myCateg={myCateg} fullfill={this.searchQuery} />
          <div className="produtos">
            {/* <Route exact path='/' component={ProductList } /> */}
            <ProductList resQ={results} cart={cart} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
