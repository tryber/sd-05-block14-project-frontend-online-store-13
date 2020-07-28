import React,{ Component } from 'react';
import * as api from '../services/api';

class Card5 extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
    }
    this.changeValue = this.changeValue.bind(this)
    this.Btpesquisar = this.Btpesquisar.bind(this)
  }
  componentDidMount() {
    api.getProductsFromCategoryAndQuery('MLB5672')
    .then((categorias) => this.setState({ result: categorias.results }))
    .then(()=> console.log(this.state.result))
  }

  changeValue(evento, teste) {
    this.setState({ input: evento.target.value });
    console.log(teste)
  }
  
  

    
    Btpesquisar(){
      api.getProductsFromCategoryAndQuery('MLB5672')
      .then((categorias) => this.setState({ result: categorias }))
    }

    render() {
      // const {resultado} = this.state.result;
      return(
      <div>
        <input
        data-testid="query-input"
        type="text"
        value={this.props.input}
        onChange={this.changeValue}
        /> 
        <button data-testid="query-input" onClick={this.Btpesquisar()}>pesquisar</button>
        <div>
          
        </div>
      </div>
    )
  }

}

export default Card5;