import React, {useState} from 'react';
import styled from 'styled-components';

// --> green  --> black

const HeroContainer = styled.header`
  background-image: url('../steve-img/steve.png');
  margin-bottom: 3rem;
  padding: 1rem;
 
  
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
    ul{
    display: flex;
    gap: 2rem;
  }
  
`

const ListItem = styled.li`
  && :hover{
  cursor: pointer;
}
${({active}) => 
active &&`
  border-bottom: 1.5px solid var(--primary-color);
  color: var(--primary-color);
  cursor: pointer;
`
}
`


const navlist = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

const Hero = () => {
  const [active, setActive] = useState(navlist[0])
  return (

    <HeroContainer>
      <div>
        <h3>Opatola Stephen</h3>
        <ul>
          {navlist.map(list => (
            <ListItem
              key={list}
              active={active === list}
              onClick={() => setActive(list)}
            >{list}</ListItem>
          ))}
        </ul>
      </div>
    </HeroContainer>
  )
}

export default Hero