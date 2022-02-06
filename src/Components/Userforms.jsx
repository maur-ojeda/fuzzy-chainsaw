import React, { Component } from 'react';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'obligatorio'
  }
  if (!values.email) {
    errors.email = 'obligatorio'
  }
  if (!values.website) {
    errors.website = 'obligatorio'
  }
  return errors
}

export default class Userforms extends Component {
  state = {
    errors: {}
  }
// método contructor que inyectará las propiedades que le estamos pasando
constructor(props){
  super(props)
  this.state = {
    ...this.state,
    ...props.valoresIniciales
  }


  console.group('constructor de userforms');        
  console.log('props: ', props)
  console.log('state: ', this.state)
  console.log('valoresIniciales: ', props.valoresIniciales)
  console.groupEnd();
 
}




  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }


  handleUpdate  = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { errors, ...sinErrors } = this.state
    const result = validate(sinErrors)
    
    //this.setState({ errors: result })
    
    if (!Object.keys(result).length) {
      const {handleSubmit, valoresIniciales, handleUpdate } = this.props
      // si valores iniciales tiene un id, significa que se esta actualizando un recurso
      if(valoresIniciales.id){
      // y pasamos el id en valores iniciales  y los datos en sin errors (los recogidos en el formulario)
        handleUpdate(valoresIniciales.id, sinErrors)
      }else{
        handleSubmit(sinErrors)
      }
    }else{
      this.setState({errors: result})
    }
  }

  render() {
    const { errors } = this.state
    const {valoresIniciales} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
      {/* su valor inicial sera el elemento de los valoras iniciales*/}
        <input defaultValue={valoresIniciales.name} name="name" placeholder='Nombre' onChange={this.handleChange} />
        {errors.name && <small>{errors.name}</small>}
        <br />
        <br />
        <input defaultValue={valoresIniciales.email} name="email" placeholder='Email' onChange={this.handleChange} />
        {errors.email && <small>{errors.email}</small>}
        <br />
        <br />
        <input defaultValue={valoresIniciales.website} name="website" placeholder='Website' onChange={this.handleChange} />
        {errors.website && <small>{errors.website}</small>}
        <br />
        <br />
        <button type='submit'>Enviar</button>
      </form>
    );
  }

}
