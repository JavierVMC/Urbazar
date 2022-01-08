
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/navBar/navbarAdmins'
import LoginComponent from './Components/Login/LoginPC'
import ToggleBar from './Components/navBar/TogglemenuAdmins'
import GraphComponent from './Components/GraphAndMaps/GraphComponent'
import PanelEtapasPC from './Components/Admin_Etapas/PanelEtapasPC'
import { Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Perfil from './Components/Perfil/Perfil'
import Ubicaciones from './Components/Ubicaciones/Ubicaciones'
import "./css/MainComponent.css";

function App() {
  React.useEffect(() => {
    if (!localStorage.getItem('auth')) {
      localStorage.setItem('auth', 0)
    }
    if (!localStorage.getItem('nombre_usuario')) {
      localStorage.setItem('nombre_usuario', '')
    }
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', '')
    }
    if (!localStorage.getItem('role')) {
      localStorage.setItem('role', 0)
    }
    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', '')
    }
    if (!localStorage.getItem('activeIndex')) {
      localStorage.setItem('activeIndex', 0)
    }

  })

  return (
    <>
      {!parseInt(localStorage.getItem('auth'), 10)
        ? (
          <React.StrictMode>
            <Router>
              <Switch>
                <Route path="/" exact component={LoginComponent} />

              </Switch>
            </Router>
          </React.StrictMode>

        )
        : (
          <React.StrictMode>
            <div className="container-fluid fondo">
              <NavBar />
              <div className="row contenedorToggle">
                <Col xs={3} sm={3} className="colToggle">
                  <ToggleBar />
                </Col>
                <Col xs={9} sm={9} className="pr-3 bodycontainer">
                  
                  <Router>
                    <Switch>
                      <Route path="/" exact component={LoginComponent} />
                      <Route path="/report" exact component={GraphComponent} />
                      <Route path="/etapas" exact component={PanelEtapasPC} />
                      <Route path="/admin/dashboard/account" exact component={Perfil} />
                      <Route path="/admin/dashboard/map" exact component={Ubicaciones} />
                    </Switch>
                  </Router>

                </Col>
              </div>
            </div>
          </React.StrictMode>

        )}
    </>

  )
}

export default App
