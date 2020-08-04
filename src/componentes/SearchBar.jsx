import React, { Component } from 'react';
import * as api from '../services/api';
import ProductList from './ProductList';

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
        <ProductList results={this.state.results} />
      </div>
    );
  }
}
export default SearchBar;
