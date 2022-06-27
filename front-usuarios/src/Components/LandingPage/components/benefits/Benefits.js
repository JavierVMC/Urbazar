import React from 'react'

import lock from '../../images/lock.png'
import chair from '../../images/chair.png'
import piggy from '../../images/piggy.png'
import speed from '../../images/speed.png'
import phone from '../../images/phone.png'
import btn_android from '../../images/playstore.png'
import btn_ios from '../../images/ios.png'
import styled from 'styled-components'

const Container = styled.section`
  margin: 200px 0;
  font-family: ${(props) => props.theme.fontFamily};
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`

const Card1 = styled.div`
  @media (max-width: 991px) {
    order: 1;
  }
`

const Card2 = styled.div`
  @media (max-width: 991px) {
    order: 2;
  }
`

const Card3 = styled.div`
  @media (max-width: 991px) {
    order: 4;
  }
`

const Card4 = styled.div`
  @media (max-width: 991px) {
    order: 3;
  }
`

const Card5 = styled.div`
  @media (max-width: 991px) {
    order: 5;
  }
`

const Card = styled.div`
  border: solid 1px #000;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px 10px;
`

const Title = styled.h2`
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkBlue}; ;
`

const TitleLarge = styled.h2`
  text-align: left;
  font-weight: bold;
  margin-top: 3em;
  color: ${(props) => props.theme.colors.darkBlue}; ;
`

const LargeCard = styled.div`
  border: solid 1px #000;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 50px;
  display: flex;
  text-align: left;
  min-height: 426.35px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
`

const ImageContainerLarge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  transform: 10deg;
  @media (max-width: 768px) {
    max-width: none;
    order: 1;
  }
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`

const InfoContainerLarge = styled.div`
  p {
    margin-bottom: 3em;
    margin-right: 5em;
  }
  @media (max-width: 768px) {
    text-align: center;
    order: 2;
    h2 {
      margin-top: 0;
      text-align: center;
    }
    p {
      margin: 0 1rem;
    }
  }
`

const BadgesContainer = styled.div`
  margin: 2em 0;
  @media (max-width: 768px) {
    padding: 0 2.5rem;
  }
`

function Benefits() {
  return (
    <Container>
      <div className="container">
        <div className="row d-flex flex-wrap">
          <Card1 className="col-sm-12 col-md-6 col-lg-4">
            <Card>
              <ImageContainer>
                <img src={lock} className="img-fluid"></img>
              </ImageContainer>
              <InfoContainer>
                <Title>Con seguridad</Title>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </InfoContainer>
            </Card>
          </Card1>
          <Card2 className="col-sm-12 col-md-6 col-lg-4">
            <Card>
              <ImageContainer>
                <img src={chair} className="img-fluid"></img>
              </ImageContainer>
              <InfoContainer>
                <Title>Desde tu hogar</Title>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </InfoContainer>
            </Card>
          </Card2>
          <Card3 className="col-sm-12 col-md-6 col-lg-4">
            <Card>
              <ImageContainer>
                <img src={piggy} className="img-fluid"></img>
              </ImageContainer>
              <InfoContainer>
                <Title>A menor precio</Title>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </InfoContainer>
            </Card>
          </Card3>
          <Card4 className="col-sm-12 col-md-12 col-lg-8">
            <LargeCard>
              <InfoContainerLarge>
                <TitleLarge>Compra donde sea</TitleLarge>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
                <BadgesContainer className="row">
                  <img src={btn_ios} className="col-12 col-md-6"></img>
                  <img src={btn_android} className="col-12 col-md-6"></img>
                </BadgesContainer>
              </InfoContainerLarge>
              <ImageContainerLarge>
                <img src={phone} className="img-fluid"></img>
              </ImageContainerLarge>
            </LargeCard>
          </Card4>
          <Card5 className="col-sm-12 col-md-6 col-lg-4">
            <Card>
              <ImageContainer>
                <img src={speed} className="img-fluid"></img>
              </ImageContainer>
              <InfoContainer>
                <Title>Mas rapido</Title>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </InfoContainer>
            </Card>
          </Card5>
        </div>
      </div>
    </Container>
  )
}

export default Benefits
