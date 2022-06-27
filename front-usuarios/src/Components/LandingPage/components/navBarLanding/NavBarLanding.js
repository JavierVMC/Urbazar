import React from 'react'
import logoUrbazapp from '../../images/logoUrbazapp.png'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
  min-width: 100vw;
  background-color: ${(props) => props.theme.colors.darkBlue};
  font-family: ${(props) => props.theme.fontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 10px 0;
  top: 0;
  z-index: 999;
`

const Wrapper = styled.div`
  color: #fff;
  span {
    color: ${(props) => props.theme.colors.lightOrange};
  }
`

const LogoContainer = styled.div`
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0;
  }
`

const Image = styled.img`
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    img {
      width: 40px;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 0;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    text-align: center;
    font-size: 2rem;
    margin: 0;
  }
`

const LoginButton = styled.button`
  width: 208px;
  height: 56px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.lightOrange};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.darkBlue};
  border: solid 2px ${(props) => props.theme.colors.lightOrange};
  :hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darkBlue};
    border-color: ${(props) => props.theme.colors.white};
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 0;
    width: auto;
    height: auto;
    padding: 10px;
  }
`

const RegisterButton = styled.button`
  width: 208px;
  height: 56px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.lightOrange};
  border: solid 1px ${(props) => props.theme.colors.lightOrange};
  margin-left: 32px;
  :hover {
    background: ${(props) => props.theme.colors.darkOrange};
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 0;
    width: auto;
    height: auto;
    padding: 10px;
  }
`

function NavBarLanding() {
  const history = useHistory()

  function goToLoginPage() {
    history.push('/login')
  }

  function goToRegisterPage() {
    history.push('/registro')
  }

  return (
    <Container className="container d-flex justify-content-center">
      <Wrapper className="row">
        <LogoContainer className="col-12 col-md-6 d-flex no-wrap align-items-end">
          <Image src={logoUrbazapp} width="70px"></Image>
          <Title>
            Urbaz<span>App</span>
          </Title>
        </LogoContainer>
        <ButtonsContainer className="col-12 col-md-6 d-flex wrap">
          <LoginButton onClick={goToLoginPage}>Iniciar Sesión</LoginButton>
          <RegisterButton onClick={goToRegisterPage}>
            Registrarme
          </RegisterButton>
        </ButtonsContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBarLanding
