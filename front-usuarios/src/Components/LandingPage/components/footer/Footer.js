import React from 'react'
import fb from '../../images/fb.png'
import insta from '../../images/insta.png'
import linked from '../../images/linked.png'
import twitter from '../../images/twitter.png'
import styled from 'styled-components'

const Container = styled.footer`
  font-family: ${(props) => props.theme.fontFamily};
  background-color: #13132c;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  height: auto;
  padding: 2rem;
`

const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
`

const CopyRight = styled.span`
  float: right;
  position: absolute;
  bottom: 10px;
  right: 10px;
`

function Footer() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <Column className="col-12 col-md-3">
            <IconContainer className="icon-footer-container">
              <img src={fb} width="34px"></img>
            </IconContainer>
            <p>Chequea nuestro Facebook</p>
          </Column>
          <Column className="col-12 col-md-3">
            <IconContainer>
              <img src={linked} width="34px"></img>
            </IconContainer>
            <p>Siguenos en LinkedIn</p>
          </Column>
          <Column className="col-12 col-md-3 ">
            <IconContainer>
              <img src={insta} width="34px"></img>
            </IconContainer>
            <p>Unete a nuestro Instagram</p>
          </Column>
          <Column className="col-12 col-md-3">
            <IconContainer>
              <img src={twitter} width="34px"></img>
            </IconContainer>
            <p>Mira acerca de lo que tweeteamos</p>
          </Column>
        </div>
      </div>
      <CopyRight>Urbazapp©</CopyRight>
    </Container>
  )
}

export default Footer
