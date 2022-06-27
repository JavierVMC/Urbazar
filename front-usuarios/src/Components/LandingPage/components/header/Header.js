import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Container = styled.header`
  color: ${(props) => props.theme.colors.white};
  height: 100vh;
  padding-top: 20px;
  background: ${(props) => props.theme.colors.darkBlue};
  font-family: ${(props) => props.theme.fontFamily};
  @media (max-width: 768px) {
    height: auto;
  }
`

const Banner = styled.div`
  background: ${(props) => props.theme.colors.darkBlue};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 82vh;
  }
`

const Slogan = styled.span`
  font-weight: bold;
  text-align: center;
  font-size: 80px;
  @media (max-width: 768px) {
    margin: 0 2rem;
    font-size: 2.1rem;
  }
`

const Message = styled.span`
  font-weight: bold;
  text-align: center;
  font-size: 26px;
  color: #c8d2db;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin: 0 2rem;
    font-size: 1rem;
  }
`

const Button = styled.button`
  background: ${(props) => props.theme.colors.lightOrange};
  border: ${(props) => props.theme.colors.lightOrange} solid 1px;
  font-weight: bold;
  border-radius: 4px;
  width: 208px;
  height: 56px;
  margin-top: 50px;
  color: ${(props) => props.theme.colors.white};
  :hover {
    background: ${(props) => props.theme.colors.darkOrange};
  }
`

function Header() {
  const history = useHistory()

  function goToRegisterPage() {
    history.push('/registro')
  }

  return (
    <Container>
      <Banner>
        <Slogan>
          El mejor lugar para <br></br>comprar y vender
        </Slogan>
        <Message>
          Tienda diseñada para la compra de productos dentro de tu ciudad.
          <br></br> Unete a nuestra comunidad. Es gratis.
        </Message>
        <Button onClick={goToRegisterPage}>Empezar</Button>
      </Banner>
    </Container>
  )
}

export default Header
