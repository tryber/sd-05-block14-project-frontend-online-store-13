import React from 'react';
import { Link } from 'react-router-dom';
// import Cart from './Cart';
import Categories from './Categories';
import SearchBar from './SearchBar';
import ProductList from './ProductList';


class Home extends React.Component {

  render() {
    const { myCateg, results, cart, funcCart } = this.props;
    const { searchQuery } = funcCart;
    return (
      <div className="all">
        <div className="bloco1">
          <SearchBar searchQuery={searchQuery} />
          <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        </div>
        <div className="bloco2">
          <Categories myCateg={myCateg} fullfill={searchQuery} />
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
