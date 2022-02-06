import React, { Component } from 'react';
//libreria que maneja las peticiones ajax
import axios from 'axios';
//vistas : formulario de usuarios, listado de usuarios
import Userforms from './Components/Userforms'
import ViewList from './Components/ViewList'



export default class App extends Component {
  //definimos loas estados iniciales, para data y rutas de la aplicación
  state = {
    // Datos desde api
    data: [],
    // rutas de la app
    ruta: 'lista',
  }

  constructor() {   
    super()
  // De la respuesta de axios, tomamos data (usando destructuración) y la asignamos al estado data 
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => this.setState({ data }))
  }

  /**
   * Función que recibe como parametro id y cambia del estado ruta y usuarioSeleccionado 
  * @param id id del usuario
  */
  seleccionaUsuario = id => {
    this.setState({
      ruta: 'formulario',
      usuarioSeleccionado: id,
    })
  }

   /**
   * Función que recibe como parametro usuario, lo envia axios  y cambia en el estado data y ruta
  * @param usuario objeto obtenido del formulario
  */
  agregarUsuario = usuario => {
    axios.post('https://jsonplaceholder.typicode.com/users', usuario)
      .then(
        ({ data }) => {
          console.log(data)
          const newData = this.state.data.concat(data)
          
          this.setState({
            data: newData,
            ruta: 'lista'
          })
        }
      )
  }

  /**
   * Función que recibe como parametro id usuario, y datos
   * con el id se construira la url para actualizar el recurso y los valores para actualizar estaran en values
  * @param id ide de usuario
  * @param values valores del usuario
  */
   actualizarUsuario = (id, values) => {
     //template string 
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
      .then(()=>{
        // Necesitamos construir un nuevo arreglo de data con map, 
        // si logramos en contrar el elemento en el data lo remplazaremos porlo que viene en value
        // si es que si ,entrega values sino entrega lo que esta en elemento x
        // cambiaremos el data  y seteamos la ruta 

        const newData = this.state.data
        .map( x => x.id === id ? values : x)
        this.setState({
          data: newData,
          ruta:'lista'
        })
      })

   }
  
  




   /**
   * Función  que cambia el estado de ruta
  */
  nuevoUsuario = () => {
    this.setState({ ruta: 'formulario', usuarioSeleccionado: undefined})
  }

  render() {
    const { ruta, data, usuarioSeleccionado } = this.state  
    console.log('usuarioSeleccionado', usuarioSeleccionado)
    
    const valoresIniciales = usuarioSeleccionado && data.find( x => x.id === (Number(usuarioSeleccionado)) )

    console.groupCollapsed('App'); 
    //console.group('App');        
            console.log('this:', this)
            console.log('props', this.props)
            console.log('state', this.state)
            console.log('usuarioSeleccionado: ', usuarioSeleccionado)
            console.log('valoresIniciales', valoresIniciales)
    console.groupEnd();


    return (<div>
      {/* 
        si el valor del estado de ruta es igual a 'lista' entonces muestra el componente Viewlist
        al componente ViewList le pasamos las siguientes props:
         - data: el estado de data de app
         - nuevoUsuario: método de nuevoUsuario de app
         - handleClick: método de seleccionaUsuario de app
      */}
      {ruta === 'lista' &&
        <ViewList
          data={data}
          nuevoUsuario={this.nuevoUsuario}
          seleccionaUsuario={this.seleccionaUsuario}
        />}
              {/* 
        si el valor del estado de ruta es igual a 'formulario' entonces muestra el componente Userforms
        al componente Userforms le pasamos el metodo de handleSubmit .

        a userform le pasaremos valores iniciales que contiene la data del usuario a editar,
        en el caso que este undefined le podremos pasar un objeto

      */}

      {ruta === 'formulario' && 
      <Userforms 
      handleSubmit={this.agregarUsuario} 
      valoresIniciales={valoresIniciales || {}}
      handleUpdate={this.actualizarUsuario}
      />}
    </div>);
  }

}
