import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


export default function Sidebar() {
  return (
    <Container>
      <div>
        <div className='sidebar'>
          <div className='logo'>
            <Link to='/'>
              <h1>Jajanin.</h1>
            </Link>
          </div>
          <div className='menu'>
            <p>Menu</p>
            <ul>
              <li className='menu_bar'>
                <Link className='menu_link' to='/waroengq/'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FBF1DA'>
                    <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/cart'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FBF1DA' >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
                  </svg>
                  Cart
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/waroengq/profil'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#FBF1DA'>
                  <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
                </svg>
                  Profil
                </Link>
              </li>
            </ul>
          </div>
          <div className='menu'>
            <p>Category</p>
            <ul>
              <li className='menu_bar'>
                <Link className='menu_link'  to='/waroengq/discover'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FBF1DA'>
                    <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
                  </svg>
                  Phone
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/cart'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FBF1DA'>
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
                  </svg>
                  Clothing
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/profil'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#FBF1DA'>
                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
                  </svg>
                  Food
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}


const Container = styled.div`


box-sizing: border-box;
background-color: #18254F;
padding: 10px 20px;
display: flex;
align-items: center;
height: 100vh;
font-family: 'Inter', sans-serif;

.sidebar
{
  display: flex;
  flex-direction: column;
  width: 100%;

  display: flex;
  width: 35vh;
  background-color:#FBF1DA;
  height: 95vh;

  color: black;

  border-radius: 20px;
  box-shadow:  5px 5px 10px #141f43,
             -5px -5px 10px #1c2b5b;


  .logo
  {
    height: 10%;
    // padding: px;
    text-align: center;

    a{
      text-decoration: none;
      color: #18254F;
    }
  }

  .menu{
    display: flex;
    flex-direction: column;

    p{
      margin-bottom: -10px;
      font-weight: bold;
      color: #18254F;
      padding: 0 0 0 10px;
    }

    ul{
      padding: 0;
    }
    
    .menu_bar{
      list-style: none;
      .menu_link{
        padding: 10px 0 10px 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: #18254F;
        font-weight: 500;
        transition: 0.1s ease;
        
        &:hover{
          background: #18254F;
          color: white;

          svg{
            background-color: #18254F;
            border: 1px solid #FBF1DA;
          }
        }
        
      }

      svg{
        padding: 8px;
        width: 15px;
        height: 15px;
        margin-right: 10px;
        background-color: #18254F;
        border-radius: 10px;
        border: 1px solid transparent;
      }
    }
  }
  

}



`



