import './ciudadelas.css'
import React from 'react'
import mapa from '../../images/map.jpg'
import urb1 from '../../images/urb_1.png'
import urb2 from '../../images/urb_2.png'
import urb3 from '../../images/urb_3.png'
import urb4 from '../../images/urb_4.png'
import urb5 from '../../images/urb_5.png'
import urb6 from '../../images/urb_6.png'
import styled from 'styled-components'

const avatarBoxSize56 = {
  '--avatarBoxSize': '56px'
}

const avatarBoxSize24 = {
  '--avatarBoxSize': '24px'
}

const avatarBoxSize92 = {
  '--avatarBoxSize': '92px'
}
const avatarBoxSize66 = {
  '--avatarBoxSize': '66px'
}
const avatarBoxSize28 = {
  '--avatarBoxSize': '28px'
}
const avatarBoxSize156 = {
  '--avatarBoxSize': '156px'
}

const Container = styled.section`
  font-family: ${(props) => props.theme.fontFamily};
`

function Ciudadelas() {
  return (
    <Container className="sl-home-community">
      <div className="sl-home-community__inner">
        <div className="ciudadelas-texto container">
          <h1>Ciudadelas registradas</h1>
          <span>150</span>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum. Lorem Ipsum es simplemente el texto
            de relleno de las imprentas y archivos de texto. Lorem Ipsum
          </p>
        </div>
        <div className="sl-animation-loader sl-animation-loader__community-lottie ">
          <div className="ciudadelas-mapa">
            <img src={mapa} className="img-fluid"></img>
          </div>
        </div>
        <div className="sl-home-bubbles">
          <div className="sl-home-bubbles--left">
            <div>
              <div className="sl-home-avatar" style={avatarBoxSize56}></div>
            </div>
            <div>
              <div className="sl-home-avatar" style={avatarBoxSize92}>
                <img
                  src={urb1}
                  className="sl-home-avatar__img"
                  alt="avatar"
                ></img>
              </div>
              <div className="sl-home-avatar" style={avatarBoxSize66}>
                <img
                  src={urb2}
                  className="sl-home-avatar__img"
                  alt="avatar"
                ></img>
              </div>
            </div>
            <div>
              <div className="sl-home-avatar" style={avatarBoxSize24}></div>
              <div className="sl-home-avatar" style={avatarBoxSize92}>
                <img
                  src={urb3}
                  className="sl-home-avatar__img"
                  alt="avatar"
                ></img>
              </div>
            </div>
            <div>
              <div className="sl-home-avatar" style={avatarBoxSize156}>
                <img
                  src={urb4}
                  className="sl-home-avatar__img"
                  alt="avatar"
                ></img>
              </div>
            </div>
          </div>
          <div className="sl-home-bubbles--right">
            <div>
              <div className="sl-home-avatar" style={avatarBoxSize28}></div>
            </div>
            <div>
              <div className="sl-home-avatar" style={avatarBoxSize92}>
                <img
                  src={urb5}
                  className="sl-home-avatar__img"
                  alt="avatar"
                ></img>
              </div>
              <div className="sl-home-avatar" style={avatarBoxSize66}>
                <img
                  src={urb6}
                  className="sl-home-avatar__img"
                  alt="avatar"
                ></img>
              </div>
            </div>
            <div>
              <div className="sl-home-avatar" style={avatarBoxSize28}></div>
              <div className="sl-home-avatar" style={avatarBoxSize156}>
                <img
                  src={urb1}
                  className="sl-home-avatar__img"
                  alt="avatar"
                ></img>
              </div>
            </div>
            <div>
              <div className="sl-home-avatar" style={avatarBoxSize92}>
                <img
                  src={urb2}
                  className="sl-home-avatar__img"
                  alt="avatar"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Ciudadelas
