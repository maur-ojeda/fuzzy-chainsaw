import React, { Component } from 'react';


const validate = values => {
  const errors = {}
  //console.log(values)
  if (!values.nombre) {

    errors.nombre = 'campo obligatorio'
  }

  if (!values.apellido) {

    errors.apellido = 'campo obligatorio'
  }
  return errors
}



export default class Form extends Component {

  state = {
    errors: {}
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { errors, ...sinErrors } = this.state
    const result = validate(sinErrors)
    this.setState({ errors: result })
    console.log(result)
    if (!Object.keys(result).length) {
      //envia formulario
      alert('formulario enviado')
      e.target.reset()
    }

  }

  render() {
    const { errors } = this.state
    return (

      <div>
        <h1>Formulario</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="nombre" type="text" onChange={this.handleChange} />
          {errors.nombre && <small>{errors.nombre}</small>}
          <br />
          <br />
          <input name="apellido" type="text" onChange={this.handleChange} />
          {errors.apellido && <small>{errors.apellido}</small>}
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
