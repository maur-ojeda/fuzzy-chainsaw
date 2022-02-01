import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    // GET , POST, PUT, PATCH; DELETE

    //GET
    /*
    fetch(' https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.table(json))
  */
    //POST

    fetch(' https://jsonplaceholder.typicode.com/users', {
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
      .then(json => console.table(json))
  }

  render() {
    return (<div>
      <h1>Ajax</h1>
    </div>);
  }
}
