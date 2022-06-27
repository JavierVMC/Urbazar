import React, { Component } from 'react'
import ToggleMenu from './ToggleMenu'
import { connect } from 'react-redux'
import AuthA from '../../../store/actions/AuthA'

class ToggleMenuPC extends Component {
  logout = () => {
    this.props.authFn.logout()
    this.props.isOpen = this.props.setIsOpen(!this.props.isOpen)
  }

  render() {
    return (<ToggleMenu
                isOpen={this.props.isOpen}
                setIsOpen={this.props.setIsOpen}
                logout={this.logout}/>)
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthR.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authFn: AuthA(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMenuPC)
