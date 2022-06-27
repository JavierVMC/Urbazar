import React from 'react'
import comprador from '../../images/comprador.jpg'
import vendedor from '../../images/vendor.jpg'
import styled from 'styled-components'

const Container = styled.section`
  font-family: ${(props) => props.theme.fontFamily};
  background-color: #fff;
  padding: 10rem;
  text-align: center;

  @media (max-width: 912px) {
    padding: 10rem 0;
  }

  @media (max-width: 599px) {
    padding: 2rem 0;
  }
`

const Wrapper = styled.div`
  @media (max-width: 599px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-weight: bold;
  color: #02023d;
  font-size: 3em;
  margin-bottom: 1em;
  @media (max-width: 540px) {
    font-size: 2em;
    margin-bottom: 1em;
  }
`

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #02023d;
  font-weight: bold;

  @media (max-width: 599px) {
    font-size: 1.5rem;
  }
`

function Roles() {
  return (
    <Container id="landing-page-roles">
      <Wrapper className="container">
        <Title>La plataforma perfecta para comprar y vender</Title>
        <div className="row">
          <div className="col-md-6">
            <div>
              <img src={comprador} className="img-fluid"></img>
            </div>
            <div>
              <Subtitle>Compradores</Subtitle>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={vendedor} className="img-fluid"></img>
            </div>
            <div>
              <Subtitle>Vendedores</Subtitle>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Roles
