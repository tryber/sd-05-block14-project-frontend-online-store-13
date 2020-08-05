/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from './ProductList';
import APICategories from './Requisito4';
import '../css/SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // filter: 'all',
      results: [],
      search: '',
    };
    this.pesquisar = this.pesquisar.bind(this);
  }
  // setFilterValue = event => {
  //   this.setState({
  //     filter: event.target.value === '' ? 'all' : event.target.value
  //   })
  // }

  async pesquisar() {
    await api
      // eslint-disable-next-line react/destructuring-assignment
      .getProductsFromCategoryAndQuery(this.state.search)
      .then((aux) => this.setState({ results: aux.results }));
  }

  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          onChange={(event) => this.setState({ search: event.target.value })}
          type="text"
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={() => this.pesquisar()}
          data-testid="query-button"
        >
          PESQUISAR
        </button>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img
            src="https://image.flaticon.com/icons/svg/1170/1170678.svg"
            alt="icone de carrinho"
            className="cart-icon"
          />
        </Link>
        <div className="content-container">
          <div className="categories-container">
            <APICategories />
          </div>
        </div>
        <div className="items-container">
          <ProductList results={this.state.results} />
        </div>
      </div>
    );
  }
}
export default SearchBar;
