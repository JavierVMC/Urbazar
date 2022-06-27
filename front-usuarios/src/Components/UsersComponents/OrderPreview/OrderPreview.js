import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const Container = styled.div`
  min-width: 400px;
  min-height: 400px;
  max-width: 400px;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 20px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

const InfoContiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`

const Title = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 3rem;
`

const DarkLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`

const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.darkGray};
  text-transform: uppercase;
`

const InfoSection = styled.div`
  margin: 0;
  padding: 0;
  p {
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
  }
`

const Price = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`

const LinksContainer = styled.div`
  margin-top: 100px;
`

const Button = styled(Link)`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.darkBlue};
`

const ProductsContainer = styled.div`
  div {
    color: ${(props) => props.theme.colors.darkGray};
  }
`
/**
 * Returns an array with 1-3 products from the products array parameter
 * @returns Array of products
 */
const getProducts = (products) => {
  const firstProducts = []
  for (let i = 0; i < products.length; i++) {
    if (i < 3) {
      firstProducts.push(products[i])
    }
  }
  return firstProducts
}

function OrderPreview({ id, title, date, total, products }) {
  const history = useHistory()

  const goToOrderDetails = () => {
    history.push(`/detalles-de-compra/${id}`)
  }

  return (
    <Container key={id}>
      <DetailsContainer>
        <Title>{title}</Title>
        <ProductsContainer>
          <DarkLabel>Productos:</DarkLabel>
          {getProducts(products).map((product) => (
            <div key={product.name}>
              {product.name} (x{product.quantity})
            </div>
          ))}
          <div>...</div>
        </ProductsContainer>
        <LinksContainer>
          <Button>Ver recibo</Button>
          <Button onClick={goToOrderDetails}>Ver detalles del pedido</Button>
        </LinksContainer>
      </DetailsContainer>
      <InfoContiner>
        <InfoSection>
          <Label>Pedido #</Label>
          <p>{id}</p>
        </InfoSection>
        <InfoSection>
          <Label>Realizado</Label>
          <p>{date}</p>
        </InfoSection>
        <InfoSection>
          <Label>Total</Label>
          <Price>${total}</Price>
        </InfoSection>
      </InfoContiner>
    </Container>
  )
}

export default OrderPreview
