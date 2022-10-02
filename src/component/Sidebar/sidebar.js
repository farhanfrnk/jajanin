import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCar, faCartShopping, faCouch, faGlasses, faHeart, faHouse, faLemon, faMobile, faMobileScreenButton, faShirt, faSocks, faUser } from '@fortawesome/free-solid-svg-icons'


export default function Sidebar() {
  
  const activePage = window.location.href;

  const navBar = document.getElementsByClassName('menu_bar')

  setTimeout(function(){
    for(var i = 0; i < navBar.length; i++){
      const navLinks = document.getElementsByClassName('menu_link').item(i)
      if(navLinks.href == activePage){
        navLinks.classList.add('active');
      }      
      navLinks.addEventListener('click', ()=>{
        for(var i = 0; i < navBar.length; i++){
          const navLinks = document.getElementsByClassName('menu_link').item(i)
          navLinks.classList.remove('active');
        }
        navLinks.classList.add('active');
      })
    }  
  }, 200)


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
                <Link className='menu_link' to='/home'>
                  <FontAwesomeIcon icon={faHouse} />
                  Home
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/cart'>
                  <FontAwesomeIcon icon={faCartShopping} />
                  Cart
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/profil'>
                  <FontAwesomeIcon icon={faUser} />
                  Profil
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/wishlist'>
                <FontAwesomeIcon icon={faHeart} />
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div className='menu'>
            <p>Category</p>
            <ul>
              <li className='menu_bar'>
                <Link className='menu_link'  to='/category/gadget'>
                  <FontAwesomeIcon icon={faMobile} />
                  Gadget
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/category/clothing'>
                  <FontAwesomeIcon icon={faShirt} />
                  Clothing
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/category/furniture'>
                  <FontAwesomeIcon icon={faCouch} />
                  Furniture
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/category/groceries'>
                  <FontAwesomeIcon icon={faLemon} />
                  Grocery
                </Link>
              </li>
              <li className='menu_bar'>
                <Link className='menu_link' to='/category'>
                  <FontAwesomeIcon icon={faBars} />
                  Show All Category
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
background-color: #353340;
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
  // background-color:#FBF1DA;
  background-color: #1F1D2B;
  height: 95vh;

  color: black;

  border-radius: 20px;
  
  .logo
  {
    height: 10%;
    // padding: px;
    text-align: center;

    a{
      text-decoration: none;
      color: #FEFFFF;
    }
  }

  .menu{
    display: flex;
    flex-direction: column;

    p{
      margin-bottom: -10px;
      font-weight: bold;
      color: #FEFFFF;
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
        color: #808191;
        font-weight: 500;
        transition: 0.1s ease;
        
        &:hover{
          color: #ffffff;
          font-weight: 700;

          svg{
            background-color: #32a7e2;
            color: #fff;
          }
        }
        
      }

      svg{
        padding: 8px;
        width: 15px;
        height: 15px;
        margin-right: 10px;
        background-color: #353340;
        border-radius: 10px;
        border: 1px solid transparent;
        color: #808191;
      }
    }
  }
  

}

.active{
  color: white !important;
  font-weight: 700 !important;

  svg{
    background-color: #ff7551 !important;
    color: #fff !important;
  }
}


`



