import styled from 'styled-components'

export const Btn = styled.button`
    background-color: var(--primary-color);
    color: var(--white-color);
    border-radius: 9px;
    padding: 10px 24px;
    margin-top: 10px;

    .btn{
      
    }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  
`



export const Services = styled.div`
  
  padding-bottom: 2rem;

  h3{
    text-align: center;
    width: 70%;
    margin: 0 auto;
  }
  
  .small{
    width: 70%;
    margin: 0 auto;
  }

  span{
    background-color: var(--white-color);
    height: 2px;
    width: 9rem;
    display: block;
    margin: 0 auto 1rem auto;
    // margin-bottom: 1rem;
  }
`

export const ServiceDiv = styled.div`
  padding: 2rem;
  background-color: var(--tertiary-color);
  max-width: 250px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 3rem;

  small{
    width: 70%;
    margin: 0 auto;
  }

  img, small{
    background-color: var(--tertiary-color);
  }
`

export const PortImg = styled.img`
  width: 100%;
  max-width: 300px;
  height: 250px;
  margin-bottom: 3rem;
`


export const Get = styled.div`
  text-align: center;
  margin: 2rem 0;

  small{
    color: #8E8787;
  }

`

export const PortBtn = styled.div`
  // background-color: var(--white-color);
  color: var(--white-color);
  border-radius: 9px;
  padding: 7px 18px;
  margin-top: 10px;
  cursor: pointer;

  ${({active})  => 
  active && `
    background-color: var(--primary-color);
  `
}
`

