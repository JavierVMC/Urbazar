import React from 'react'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs'
import styled from 'styled-components'

const Input = styled.input`
    color: #02023D;
 `
const Container = styled(PaymentInputsWrapper)`
    border: 2px solid #02023D !important;
`

export default function CardDateExpiration () {
  const {
    wrapperProps,
    getExpiryDateProps
  } = usePaymentInputs()

  return (
    <Container {...wrapperProps}>
      <Input {...getExpiryDateProps()} />
    </Container>
  )
}
