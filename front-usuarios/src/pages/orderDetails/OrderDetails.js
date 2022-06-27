import React, { useEffect } from 'react'
import styled from 'styled-components'

import NavbarComponent from '../../Components/UsersComponents/navBar/navbarComponent'
import OrderSummary from '../../Components/UsersComponents/OrderSummary/OrderSummary'
import ProductPreview from '../../Components/UsersComponents/productPreview/ProductPreview'

const p1 = {
  imagePath:
    'https://scontent.fgye1-1.fna.fbcdn.net/v/t45.5328-0/143014009_5116363125071730_3563134346349294162_n.jpg?stp=c4.4.288.288a_dst-jpg_p296x100&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_ohc=lHYei8fUuvAAX-O-kr2&_nc_ht=scontent.fgye1-1.fna&oh=00_AT9ngD_z91_puEWUfnmGOZqPbkTYCDnQhxmIW_exBN9l3Q&oe=62AE2B88',
  name: 'Camiseta del idolo',
  price: 10.0,
  stars: {
    number: 3.5,
    numberOfVotes: 20
  },
  description:
    'Camiseta del idolo totalmente nueva, para que la lleves al estadio.',
  vendor: 'Natalia Ramirez'
}

const p2 = {
  imagePath:
    'https://preview.redd.it/40lwlc0p3l761.jpg?width=640&crop=smart&auto=webp&s=6992a0fdd2a36905c3dd3201ed505f72c36bd16b',
  name: 'Body pillow de Shrek',
  price: 10.0,
  stars: {
    number: 5,
    numberOfVotes: 2000
  },
  description: 'Almohada larga de la pelicula Shrek.',
  vendor: 'Natalia Ramirez'
}

const p3 = {
  imagePath:
    'https://cdn2.melodijolola.com/media/files/img_20201207_103801_901.jpg',
  name: 'Licuadora usada',
  price: 13.0,
  stars: {
    number: 2.5,
    numberOfVotes: 2
  },
  description: 'Una licuadora usada pero en perfecto estado.',
  vendor: 'Natalia Ramirez'
}

const orderDetails = {
  date: '6 de abril de 2022',
  deliveryAddress: {
    ciudadela: 'Villa club',
    manzana: '234',
    villa: '24'
  },
  paymentMethod: {
    typeofCard: 'Visa',
    lastDigits: '4587'
  },
  products: [p1, p2, p3],
  orderSummary: {
    totalProducts: 33,
    totalDelivery: 2,
    totalWithoutTaxes: 35,
    taxes: 0,
    total: 35
  }
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  max-width: 1920px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.black};
  margin-top: 20px;
`

const Hr = styled.hr`
  border: solid 1px ${(props) => props.theme.colors.border};
  width: 98%;
  margin-left: 0;
`

const ContentContainer = styled.div`
  display: flex;
`

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 40px;
`

const SummaryContainer = styled.section`
  width: 20%;
  padding: 5% 0;
`

const DateContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.black};
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
  span {
    margin-right: 20px;
  }
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 100%;
`

const Info = styled.div`
  margin-right: 100px;
  h3 {
    color: ${(props) => props.theme.colors.black};
    font-size: 1.2rem;
  }
`

function OrderDetails({ match }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Container>
        <Title>Detalles del pedido</Title>
        <ContentContainer>
          <DetailsContainer>
            <Hr></Hr>
            <DateContainer>
              <span>Pedido el {orderDetails.date}</span>
              <span>|</span>
              <span>Pedido #{match.params.orderId}</span>
            </DateContainer>
            <InfoContainer>
              <Info>
                <h3>Direccion de envio</h3>
                <p>
                  {orderDetails.deliveryAddress.ciudadela}
                  <br />
                  Manzana {orderDetails.deliveryAddress.manzana}
                  <br />
                  Villa {orderDetails.deliveryAddress.villa}
                </p>
              </Info>
              <Info>
                <h3>Metodo de pago</h3>
                <p>
                  Visa
                  <br />
                  ****4558
                </p>
              </Info>
            </InfoContainer>
            {orderDetails.products.map((product, index) => (
              <ProductPreview product={product} key={index + 1} />
            ))}
          </DetailsContainer>
          <SummaryContainer>
            <OrderSummary
              orderSummary={orderDetails.orderSummary}
            ></OrderSummary>
          </SummaryContainer>
        </ContentContainer>
      </Container>
    </>
  )
}

export default OrderDetails
