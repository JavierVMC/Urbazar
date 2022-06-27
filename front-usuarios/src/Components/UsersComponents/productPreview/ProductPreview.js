import React from 'react'
import styled from 'styled-components'

import Price from '../price/Price'
import Stars from '../Stars/Stars'

const Container = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  border: solid 1px ${(props) => props.theme.colors.border};
  padding: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 50px;
  margin: 20px 0;
  width: 100%;
`

const ImageContainer = styled.div`
  padding: 10px;
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 50%;
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailsContainer = styled.div`
  display: flex;
`

const DescriptionContainer = styled.div`
  padding-top: 30px;
  width: 50%;
`

const Title = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 2rem;
`

const Label = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 1.2rem;
`

const Vendor = styled.span`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 1.2rem;
`

const VendorContainer = styled.div`
  margin-top: 30px;
`

function ProductPreview({ product }) {
  const { imagePath, name, price, stars, description, vendor } = product || {
    imagePath: '',
    name: 'Cargando...',
    price: 'Cargando...',
    stars: 'Cargando...',
    description: 'Cargando...',
    vendor: 'Cargando...'
  }
  return (
    <Container>
      <ImageContainer>
        <img src={imagePath} className="img-fluid"></img>
      </ImageContainer>
      <DetailsWrapper>
        <Title>{name}</Title>
        <DetailsContainer>
          <InfoContainer>
            <Stars
              mark={stars.number}
              numberOfVotes={stars.numberOfVotes}
            ></Stars>
            <Price price={price}></Price>
            <VendorContainer>
              <Label>Vendedor: </Label>
              <Vendor>{vendor}</Vendor>
            </VendorContainer>
          </InfoContainer>
          <DescriptionContainer>
            <Label>Descripción</Label>
            <p>{description}</p>
          </DescriptionContainer>
        </DetailsContainer>
      </DetailsWrapper>
    </Container>
  )
}

export default ProductPreview
