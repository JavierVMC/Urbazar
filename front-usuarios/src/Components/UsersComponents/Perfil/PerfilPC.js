import React, { Component } from 'react'
import PerfilComponent from './PerfilComponent'
import LoadProductos from './LoadProductos'
import axios from 'axios'
import data from '../../../enviroment'
class PerfilPC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categorie_selected: '',
      compras: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async handleChange(event) {
    await this.setState({ categorie_selected: event.target.value })
    await axios.get(`http://${data.number}/compras?filter[where][id_categoria]=` + this.state.categorie_selected)
      .then(response => response.data)
      .then((res) => {
        this.setState({ compras: res })
      })
      .catch(error => console.log('Hubo un error ' + error))
    LoadProductos(this.state.compras)
  }

  render() {
    return (<PerfilComponent
            handleChange= {this.handleChange} />)
  }
}

export default PerfilPC
