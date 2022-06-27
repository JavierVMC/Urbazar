import React from 'react'

function LoadStars(estrellas) {
  const nro_stars = estrellas.estrellas
  const stars = !isNaN(nro_stars) ? parseInt(nro_stars, 10) : 0

  const nulas = 5 - stars
  const coloreadas = []
  for (let i = 0; i < stars; i++) {
    coloreadas.push(<i className="fas fa-star"></i>)
  }

  const vacias = []
  for (let i = 0; i < nulas; i++) {
    vacias.push(<i className="far fa-star"></i>)
  }
  return (
        <>
        {coloreadas} {vacias}
        </>
  )
}

export { LoadStars }
