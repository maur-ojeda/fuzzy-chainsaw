import React, { Component } from 'react';


const styles = {
    dflex: {
        fontSize: '.8rem',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '.5rem',
        marginBottom: '1rem',
        borderBottom: '1px dashed grey'
    },

    button: {

        background: 'grey',
        color: 'white',
        border: '1px solid grey',
        boxShadow: '0px 10px 13px -7px #000000, -20px 5px 15px 5px rgba(0,0,0,0)'
    }
}

export default class Listado extends Component {
    //usando función currying
    /*
    handleClick = id => e => {
     alert(id)
    }
    */

    //usando data attr
    // pasa datos de un elemento hijo a un padre
    
    seleccionaUsuario = e => {
        const {seleccionaUsuario} = this.props
        seleccionaUsuario(e.target.getAttribute('data-id'))
    }


    render() {
        const { data } = this.props


   /*     console.groupCollapsed('Listado');        
            console.log('this:', this)
            console.log('props: ', this.props)
            console.log('state: ', this.state)
            console.log('styles: ', styles)
        console.groupEnd();
*/
        return (<ul>

            {data.map(x =>
                <li key={x.id} style={styles.dflex}>
                    <span>{x.name}</span>
                    <button style={styles.button} onClick={this.seleccionaUsuario} data-id={x.id}>Editar</button>
                </li>
            )}
        </ul>);
    }
}
