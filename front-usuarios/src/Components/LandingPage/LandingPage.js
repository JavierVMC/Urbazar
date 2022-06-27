import React from 'react'

import NavBarLanding from './components/navBarLanding/NavBarLanding'
import Header from './components/header/Header'
import Benefits from './components/benefits/Benefits'
import Roles from './components/roles/Roles'
import Ciudadelas from './components/ciudadelas/Ciudadelas'
import CallToAction from './components/callToAction/CallToAction'
import Footer from './components/footer/Footer'

import { ThemeProvider } from 'styled-components'
import lightTheme from '../../themes/lightTheme'

function LandingPage() {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavBarLanding></NavBarLanding>
      <Header></Header>
      <Benefits></Benefits>
      <Roles></Roles>
      <Ciudadelas></Ciudadelas>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default LandingPage
