import { useEffect, useState } from 'react'

export default function UseTweets(ruta) {
  const [tweets, setTweet] = useState([])

  useEffect(() => {
    fetch(ruta)
      .then(response => response.json())
      .then(data => {
        setTweet(data)
      })
      .catch(error => console.log('Hubo un error ' + error))
  }, [])

  return (tweets)
}
