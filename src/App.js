import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()

    //libreria Axios entrega mayor candidad de datos y responde todo en promesas además de tratar de resolver eltipo de datos por si solo.
    
    //GET
    //axios.get('https://jsonplaceholder.typicode.com/users')
    //destructuring de nodo data 
    //.then(({ data }) => console.log(data))
    
    //POST
    axios.post('https://jsonplaceholder.typicode.com/users',
    {name: 'nombre',
    username:'Usuario'}
    ).then(({ data }) => console.log(data))


    // GET , POST, PUT, PATCH; DELETE
    //GET
    /*  fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json => console.log(json))
      */

    //POST
    /*fetch(' https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'mojeda',
        username: 'mojedaUser',
      })
    })
      .then(response => response.json())
      .then(json => console.table(json))*/


    //AXIOS



  }
















  render() {
    return (<div>
      <h1>Ajax</h1>
    </div>);
  }


}
