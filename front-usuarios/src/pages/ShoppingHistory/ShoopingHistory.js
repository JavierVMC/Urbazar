import React from 'react'
import styled from 'styled-components'

import NavbarComponent from '../../Components/UsersComponents/navBar/navbarComponent'
import OrderPreview from '../../Components/UsersComponents/OrderPreview/OrderPreview'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 200px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const OrdersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.theme.colors.black};
`

const Separator = styled.hr`
  width: 100%;
  border: solid 1px ${(props) => props.theme.colors.border};
`

function ShoppingHistory() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Container>
        <TitleContainer>
          <Title>Tus pedidos</Title>
          <Separator></Separator>
        </TitleContainer>
        <OrdersContainer>
          <OrderPreview
            id="25145215421"
            title="Pedido"
            total="35.0"
            date={new Date().toDateString()}
            products={[
              { name: 'Camiseta del idolo', quantity: 1 },
              { name: 'Body pillow de Shrek', quantity: 1 },
              { name: 'Licuadora usada', quantity: 1 }
            ]}
          ></OrderPreview>
          <OrderPreview
            id="25145215421"
            title="Pedido"
            total="35.0"
            date={new Date().toDateString()}
            products={[
              { name: 'Camiseta del idolo', quantity: 1 },
              { name: 'Body pillow de Shrek', quantity: 1 },
              { name: 'Licuadora usada', quantity: 1 }
            ]}
          ></OrderPreview>
          <OrderPreview
            id="25145215421"
            title="Pedido"
            total="35.0"
            date={new Date().toDateString()}
            products={[
              { name: 'Camiseta del idolo', quantity: 1 },
              { name: 'Body pillow de Shrek', quantity: 1 },
              { name: 'Licuadora usada', quantity: 1 }
            ]}
          ></OrderPreview>
          <OrderPreview
            id="25145215421"
            title="Pedido"
            total="35.0"
            date={new Date().toDateString()}
            products={[
              { name: 'Camiseta del idolo', quantity: 1 },
              { name: 'Body pillow de Shrek', quantity: 1 },
              { name: 'Licuadora usada', quantity: 1 }
            ]}
          ></OrderPreview>
          <OrderPreview
            id="25145215421"
            title="Pedido"
            total="35.0"
            date={new Date().toDateString()}
            products={[
              { name: 'Camiseta del idolo', quantity: 1 },
              { name: 'Body pillow de Shrek', quantity: 1 },
              { name: 'Licuadora usada', quantity: 1 }
            ]}
          ></OrderPreview>
          <OrderPreview
            id="25145215421"
            title="Pedido"
            total="35.0"
            date={new Date().toDateString()}
            products={[
              { name: 'Camiseta del idolo', quantity: 1 },
              { name: 'Body pillow de Shrek', quantity: 1 },
              { name: 'Licuadora usada', quantity: 1 }
            ]}
          ></OrderPreview>
        </OrdersContainer>
      </Container>
    </>
  )
}

export default ShoppingHistory
