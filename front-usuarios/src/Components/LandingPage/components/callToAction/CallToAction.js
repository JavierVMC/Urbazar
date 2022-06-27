import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Container = styled.section`
  font-family: ${(props) => props.theme.fontFamily};
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.white};
  padding: 6rem;
  @media (max-width: 768px) {
    padding: 6rem 2rem;
  }
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.lightOrange};
  border: solid 1px ${(props) => props.theme.colors.lightOrange};
  border-radius: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  padding: 0.5em 4em;
  font-weight: bold;
`

function CallToAction() {
  const history = useHistory()

  function goToRegisterPage() {
    history.push('/registro')
  }

  return (
    <Container>
      <Title>Comprar en linea nunca ha sido mas seguro</Title>
      <ButtonContainer>
        <Button onClick={goToRegisterPage}>Empezar ahora</Button>
      </ButtonContainer>
    </Container>
  )
}

export default CallToAction
