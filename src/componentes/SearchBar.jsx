import React, { Component } from 'react';
// import * as api from '../services/api';
// import ProductList from './ProductList';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { search } = this.state;
    const { searchQuery } = this.props;
    localStorage.setItem('Textsearch', search);
    searchQuery();
  }
  render() {
    // const { search } = this.state;
    return (
      <div>
        <input
          onChange={(event) => this.setState({ search: event.target.value })}
          type="text"
          data-testid="query-input"
        />
        <button onClick={this.handleClick} data-testid="query-button">
          PESQUISAR
        </button>
      </div>
    );
  }
}
export default SearchBar;
