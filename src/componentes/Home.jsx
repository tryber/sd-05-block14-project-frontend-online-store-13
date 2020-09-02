import React from 'react';
import CarrinhoVazio from './CarrinhoVazio';
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

  // genericSearch(query,category){
  //   const {category, query } = this.state;
  //   const retSearch = await api.getProductsFromCategoryAndQuery(query,category)
  //   this.setState({ results: retSearch });
  // }
  render() {
    const { myCateg, results } = this.state;
    return (
      <div className="all">
        <div className="bloco1">
          <SearchBar searchQuery={this.searchQuery} />
          <CarrinhoVazio />
        </div>
        <div className="bloco2">
          <Categories myCateg={myCateg} fullfill={this.searchQuery} />
          <div className="produtos">
            {/* <Route exact path='/' component={ProductList } /> */}
            <ProductList resQ={results} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
