import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthA from '../../../store/actions/AuthA'
import NavBarAdmins from './navbarAdmins'

class NavBarPC extends Component {
   logout = () => {
     this.props.authFn.logout()
     document.location.href = '/login'
   }

   render() {
     return (<NavBarAdmins
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBarPC)
