import React from 'react'
import styled from 'styled-components'
import { toNumberString } from '../../../utils/convertingFunctions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`

const Table = styled.table`
  width: 100%;
  border: none;
`

const Row = styled.tr``

const Header = styled.th`
  font-weight: 600;
  text-align: left;
`

const HeaderTotal = styled.th`
  font-weight: 700;
  text-align: left;
`

const Data = styled.td`
  font-weight: 500;
  text-align: right;
`

function OrderSummary({ orderSummary }) {
  const { totalProducts, totalDelivery, totalWithoutTaxes, taxes, total } =
    orderSummary || {
      totalProducts: 'Cargando...',
      totalDelivery: 'Cargando...',
      totalWithoutTaxes: 'Cargando...',
      taxes: 'Cargando...',
      total: 'Cargando...'
    }

  return (
    <Container>
      <Title>Resumen del pedido</Title>
      <Table>
        <Row>
          <Header>Productos:</Header>
          <Data>${toNumberString(totalProducts)}</Data>
        </Row>
        <Row>
          <Header>Envio:</Header>
          <Data>${toNumberString(totalDelivery)}</Data>
        </Row>
        <Row>
          <Header>Total antes de impuestos:</Header>
          <Data>${toNumberString(totalWithoutTaxes)}</Data>
        </Row>
        <Row>
          <Header>Impuestos:</Header>
          <Data>${toNumberString(taxes)}</Data>
        </Row>
        <Row>
          <HeaderTotal>Total (I.V.A incluido):</HeaderTotal>
          <Data>${toNumberString(total)}</Data>
        </Row>
      </Table>
    </Container>
  )
}

export default OrderSummary
