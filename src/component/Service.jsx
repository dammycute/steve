import React from 'react'
import { Flex, ServiceDiv, Services } from './Styled'
import web from '../steve-img/web.png'
import phone from '../steve-img/Phone.png'
import creative from '../steve-img/creative.png'

const services = [
  {
    img: web,
    text: 'Web Design'
  },

  {
    img: phone,
    text: 'Mobile App Design'
  },

  {
    img: creative,
    text: 'Creative Design'
  }
]

const Service = () => {
  return (
    <React.Fragment>
      <Services className='serve'>
        <h3>Services</h3>
        <span></span>
        <small className='small'>We render services like web design,  Mobile app design, creative design. We also make sure we render the best user experience you can ever get.</small>
      </Services>
      <Flex>
        {services.map((item) => (
          <ServiceDiv key={item}>
            <img src={item.img} alt="" /><br />
            <small>{item.text}</small>
          </ServiceDiv>
        )

        )}

      </Flex>
    </React.Fragment>
  )
}

export default Service