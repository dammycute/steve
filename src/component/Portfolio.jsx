import React, {useState} from 'react'
import  List  from './PortList'
import { Services, PortBtn, Flex, PortImg } from './Styled'
import '../App.css'

const btns = [ 'All', 'Web Design', 'Mobile Design']



const Portfolio = () => {
  
  const [active, setActive] = useState(btns[0])

  const [images, setImages] = useState(List)

  const handleFilter = (btn) =>{
    setActive(btn)
    
    switch(btn){
      case 'All':
        setImages(List);
        break;
      case 'Web Design':
        setImages(List.filter(item => item.category === 'web'));
        break;
      case 'Mobile Design':
        setImages(List.filter(item => item.category === 'mobile'));
        break;
      default:
        return;
    }
  }
  return (
    <div>
      <React.Fragment>
        <Services className='serve'>
          <h3>Portfolio</h3>
          <small className='small'>Here is a list of some of the projects have been able to design which consists of a fintech mobile app, a coffee shop application, a web landing page.</small>
          <Flex>
            {
              btns.map(btn =>(
                <PortBtn key={btn}
                  active={active === btn}
                  onClick={() => handleFilter(btn)}
                >{btn}</PortBtn>
              ))
            }
          </Flex>
        </Services>

        <Flex>
          {images.map((item)=> (
            <PortImg src={item.img}/>
          ))}
          
        </Flex>

        <div classNames="btn">
          <button>View All</button>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Portfolio