import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`

const StarsContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
`

const Text = styled.p`
  color: ${(props) => props.theme.colors.darkBlue};
  margin: 0;
`

const StarFill = styled(BsStarFill)`
  color: ${(props) => props.theme.colors.lightOrange};
`

const StarHalf = styled(BsStarHalf)`
  color: ${(props) => props.theme.colors.lightOrange};
`
const Star = styled(BsStar)`
  color: ${(props) => props.theme.colors.lightOrange};
`

function calculateNumberOfStars(mark) {
  if (mark > 5 || mark < 0) {
    return new Error('Number of stars must be between 0-5')
  }

  const numberOfStars = {
    fill: Math.floor(mark),
    half: mark % 1 !== 0 ? 1 : 0,
    empty: 5 - mark
  }

  return numberOfStars
}

function Stars({ mark, numberOfVotes }) {
  const numberOfStars = calculateNumberOfStars(mark)
  console.log(numberOfStars)
  return (
    <Container>
      <StarsContainer>
        {Array.from({ length: numberOfStars.fill }).map((element, index) => (
          <StarFill key={index} />
        ))}
        {Array.from({ length: numberOfStars.half }).map((element, index) => (
          <StarHalf key={index} />
        ))}
        {Array.from({ length: numberOfStars.empty }).map((element, index) => (
          <Star key={index} />
        ))}
      </StarsContainer>
      <Text>{numberOfVotes} calificaciones</Text>
    </Container>
  )
}

export default Stars
