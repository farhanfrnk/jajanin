import React from 'react'
import styled from 'styled-components'


export default function Navbar() {
  return (
    <Container>
      <div>
        <div className='navbar'>
            <div className='menu'>
                <a href='#'>Home</a>
            </div>
            <div className='menu'>
                <a href='#category'>Category</a>
            </div>
            <div className='menu'>
                <a href='#cart'>Cart</a>
            </div>
            <div className='menu'>
                <a href='#profil'>Profil</a>
            </div>
        </div>
      </div>
    </Container>
  )
}


const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap');

box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;

.navbar{
  background-color: #F7E01D;
  width: 60vw;
  height: 4.5vh;
  margin-top: 2vh;
  border-radius: 10px;
  padding: 2px 5px;
  transition: 300ms ease;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .menu{
    background: transparent;
    color: black;
    width: 25%;
    height: 90%;
    border-radius: 10px;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 300ms ease;


    a{
        background: transparent;
        font-size: 1.2rem;
        text-align: center;
        margin: 0 auto;
        color: black;
        text-decoration: none;
        width: 100%;
    }

    &:hover{
        background: #b09e02;

    }
  }
}
`



