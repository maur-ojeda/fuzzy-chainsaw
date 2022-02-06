import React, { Component } from 'react';
import Cabecera from './Cabecera';
import Listado from './Listado';

export default class ViewList extends Component {
    render() {
        const { data, seleccionaUsuario, nuevoUsuario } = this.props    
   
        /*console.groupCollapsed('Viewlist');        
            console.log('this:', this)
            console.log('props', this.props)
            console.log('state', this.state)
        console.groupEnd();
*/
        return (<div>
        {/*
            A los componentes:
            - Cabecera: nuevoUsuario desde props
            - Listado: data y handleClick desde props
        */}
            <Cabecera nuevoUsuario={nuevoUsuario}/>
            <Listado data={data} seleccionaUsuario={seleccionaUsuario} />
        </div>);
    }
}
