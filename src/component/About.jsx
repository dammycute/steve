import React from 'react'
import styled from 'styled-components'

import steveImg from '../steve-img/steveAbout.png'
import {Btn} from './Styled'

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;

  span{
    color: var(--primary-color)
  }
  
  img{
    width: 300px;
  }

  .about-text{
    width: 100%;
    max-width: 700px;
    line-height: 1.5;
}

  
`

const About = () => {
  return (
    <React.Fragment>
      <Flex>
          <img src={steveImg} alt="" />
          <div className="about-text">
            <h3>About Me</h3>
            <p>Hello There, I am <span>Opatola Stephen</span></p>
            <br />
            <small>I am a product designer who is keen about solving problems around me through creativity and deals with the interface and the experience a user gets while using a mobile app or a website.
              I am also concerned about solving problems faced by clients by designing better applications. </small>
            <br />
            <Btn>Download Resume</Btn>
          </div>
        </Flex>
    </React.Fragment>
  )
}

export default About