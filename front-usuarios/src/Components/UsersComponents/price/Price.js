import React from 'react'
import styled from 'styled-components'
import { toNumberString } from '../../../utils/convertingFunctions'

const Container = styled.div`
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.darkBlue};
  font-weight: 500;
`

const TypeOfCurrency = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
`

const IntegerValue = styled.span`
  font-size: 2rem;
  line-height: 1;
`

const DecimalValue = styled.span`
  font-size: 1rem;
`

function Price({ price, typeOfCurrency = 'US$' }) {
  const priceString = toNumberString(price)
  const priceParts = priceString.split('.')
  return (
    <Container>
      <TypeOfCurrency>{typeOfCurrency}</TypeOfCurrency>
      <IntegerValue>{priceParts[0]}</IntegerValue>
      <DecimalValue>{priceParts[1]}</DecimalValue>
    </Container>
  )
}

export default Price
