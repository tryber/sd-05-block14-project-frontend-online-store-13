import React, { Component } from 'react';
import * as api from '../services/api';
import ProductList from './ProductList';

class Card5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
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
  pesquisar() {
    api.getProductsFromCategoryAndQuery(false, this.state.results)
    .then((aux) => {
      this.setState({ results: aux.results });
    });
  }
  render() {
    return (
      <div>
        <input
          onChange={(event) => this.setState({ search: event.target.value })}
          type="text"
          data-testid="query-input"
        />
        <button onClick={() => this.pesquisar()}data-testid="query-button">PESQUISAR</button>
        <ProductList results={this.state.results} />
      </div>
    );
  }

}
export default Card5;
