import React from 'react'
import styled from 'styled-components'
import mail from '../steve-img/mail.png'
import linkedin from '../steve-img/linkedin.png'
import behance from '../steve-img/behance.png'
import twitter from '../steve-img/twitter.png'

const Img = [mail, linkedin, behance, twitter]


const Foot = styled.div`
  background-color: #353535;
  padding: 3rem;
  text-align: center;

  p{
    background-color: #353535;
  }
`

const ImgFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #353535;
  margin: 2rem 0;

  img{
    width: 30px;
  }

`

const Footer = () => {
  return (
    <div>
      <Foot>
        <p>&copy; 2022. All right reserved.</p>
        <ImgFlex>
          {Img.map(img =>(
            <img src={img} alt='Social'/>
          ))}
        </ImgFlex>
      </Foot>
    </div>
  )
}

export default Footer