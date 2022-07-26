import React from 'react'
import {Services, Flex, Get} from './Styled'
import whatsapp from '../steve-img/whatsapp.png'
import mail from '../steve-img/getMail.png'
import gps from '../steve-img/location.png'

const Touch = () => {
  return (
    <React.Fragment>
      <Services className='serve'>
      <h3>Get in touch</h3>
      <small className='small'>We render services like web design,  Mobile app design, creative design. We also make sure we render the best user experience you can ever get. You need one?</small>
      </Services>

      <Flex>
        <Get>
        <img src={whatsapp} alt="" /><br />
        <small>09067467232</small>
        </Get>
        <Get>
        <img src={mail} alt="" /><br />
        <small>stephenopatola@gmail.com</small>
        </Get>

        <Get>
        <img src={gps} alt="" /><br />
        <small>FUTA, Ondo State</small>
        </Get>
      </Flex>
    </React.Fragment>
  )
}

export default Touch