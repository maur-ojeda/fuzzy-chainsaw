import React, { Component } from 'react';
import Cabecera from './Cabecera';
import Listado from './Listado';

export default class ViewList extends Component {
    render() {

        const { data, handleClick } = this.props


        return (<div>

            <Cabecera />
            <Listado data={data} handleClick={handleClick} />

        </div>);
    }
}
