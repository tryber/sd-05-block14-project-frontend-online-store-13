import React from 'react';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  render() {
    return (
      <div>
        Olá
        {getCategories.map(function (element){
          <p>getCategories.element</p>
        })}
      </div>
    );
  }
}
export default Categorias;
