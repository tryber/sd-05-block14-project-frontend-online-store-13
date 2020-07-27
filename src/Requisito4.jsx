import React from 'react';
import * as api from './services/api';

class APICategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    api.getCategories().then((categorias) => this.setState({ myCateg: categorias }));
  }
  render() {
    const { myCateg } = this.state;
    return myCateg ? (
      <div>
        {myCateg.map((cat) => (
          <p key={cat.id} data-testid="category">
            {cat.name}
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
