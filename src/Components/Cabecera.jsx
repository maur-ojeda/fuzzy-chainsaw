import React, { Component } from 'react';

const styles = {
    dflex : {
        background: 'lightgrey',
        display :'flex',
        justifyContent: 'space-between',
        color: 'white',
        padding: '1rem',
        marginBottom: '1rem'
    },

    button : {
        background: 'grey',
        color: 'white',
        border: '1px solid grey',
        boxShadow: '0px 10px 13px -7px #000000, -20px 5px 15px 5px rgba(0,0,0,0)'
    }

    

}

export default class Cabecera extends Component {
  render() {
    return (
        <header style={styles.dflex}>
            <h2>Usuarios</h2> <button style={styles.button}>Nuevo usuario</button>
        </header>
    );
  }
}
