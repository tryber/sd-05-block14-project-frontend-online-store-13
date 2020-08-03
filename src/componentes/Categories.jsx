import React from 'react';
import * as api from '../services/api';
import ProductList from './ProductList';

class APICategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: '',
    };
    this.searchCat = this.searchCat.bind(this);
  }
  componentDidMount() {
    api.getCategories().then((categorias) => this.setState({ myCateg: categorias }));
  }
  async searchCat() {
    await api.getProductsFromCategoryAndQuery(false, this.state.search).then((data) =>
      this.setState({ results: data.results }),
    );
  }
  render() {
    const { myCateg } = this.state;
    return myCateg ? (
      <div>
        {myCateg.map((cat) => (
          <p key={cat.id} data-testid="category">
            <input
              type="radio"
              id={cat.id}
              name="categoria"
              value={cat.id}
              onClick={(aux) => {
                this.setState({ search: aux.target.value });
              }}
              onChange={() => this.searchCat()
              }
            />
            <label htmlFor={cat.id}>{cat.name}</label>
          </p>
        ))}
        <ProductList results={this.state.results} />
      </div>
    ) : (
      <div>
        <h1>carregando...</h1>
      </div>
    );
  }
}
export default APICategories;
