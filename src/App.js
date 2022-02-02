import React, { Component } from 'react';
import axios from 'axios';
import Userforms from './Components/Userforms'
import ViewList from './Components/ViewList'

export default class App extends Component {

  state = {
    data: [],
    ruta: 'lista',
  }
constructor(){
  super()
   axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => this.setState({ data }))
}

seleccionaUsuario = id => {
  console.log('seleccionaUsuario')
 this.setState ({
  ruta: 'formulario',
  usuarioSeleccionado: id,
 })
}


  render() {
    
    
    const { ruta, data } = this.state

    return (<div>
    {/* si 'ruta' es igual '===' a  'algo' entonces '&&'  retorna la '<Vista/>' */}
      {ruta === 'lista' && 
      <ViewList  
      data={data}  
      handleClick={this.seleccionaUsuario}
      />}
      {ruta === 'formulario' && <Userforms />}
    </div>);
  }
}
