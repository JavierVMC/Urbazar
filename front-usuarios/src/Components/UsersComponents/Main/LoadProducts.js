import React, { useEffect, useState } from 'react'
import Producto from '../Producto/Producto'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function UseTweets (ruta) {
  const [tweets, setTweet] = useState([])

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    swipeToSlide: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  useEffect(() => {
    fetch(ruta)
      .then((response) => response.json())
      .then((data) => {
        setTweet(data)
        console.log('Data')
        console.log(data)
      })
      .catch((error) => console.log('Hubo un error ' + error))
  }, [])

  return (
    <Slider {...settings} className="Slide_img">
      {tweets.map((producto) => (
        <Producto
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          foto_src={producto.source}
          idVendedor={producto.idVendedor}
        />
      ))}
    </Slider>
  )
}
