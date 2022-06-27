import React from 'react'

class testJSON extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tweets: [] }
  }

  UNSAFE_componentWillMount() {
    fetch('https://dataserverdaw.herokuapp.com/twitter/')
      .then((response) => {
        return response.json()
      })
      .then((tweetssrc) => {
        this.setState({ tweets: tweetssrc.tweets })
        console.log(this.state.tweets.map((tuit) => tuit.name))
      })
  }

  render() {
    if (this.state.tweets.length > 0) {
      return (
        <div className="container-fluid">
          <h1>Tweets</h1>
          <ol>
            {this.state.tweets.map((tuit) => {
              return <li key={tuit.name}> {tuit.name} </li>
            })}
          </ol>
        </div>
      )
    } else {
      return <p className="text-center">Cargando tweets...</p>
    }
  }
}

export default testJSON
