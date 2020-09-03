import React from 'react';
// import * as api from '../services/api';
// import ProductList from './ProductList';

class APICategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      catId: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const { fullfill } = this.props;
    this.setState({ catId: event.target.id });
    localStorage.setItem('CatID', event.target.id);
    fullfill();
  }
  render() {
    const { myCateg } = this.props;
    return myCateg ? (
      <div>
        {myCateg.map((cat) => (
          <p key={cat.id}>
            <input
              type="radio"
              id={cat.id}
              name="categoria"
              value={cat.id}
              onClick={this.handleClick}
              data-testid="category"
            />
            <label htmlFor={cat.id}>{cat.name}</label>
          </p>
        ))}
      </div>
    ) : (
      <div>
        <h1>carregando...</h1>
      </div>
    );
  }
}

export default APICategories;
