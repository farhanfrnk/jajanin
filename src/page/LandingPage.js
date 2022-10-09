import React from 'react'
import styled from 'styled-components'
import Sidebar from '../component/Sidebar/sidebar'

import heroImg from '../assets/img/heroImg.png'


export default function LandingPage() {
  return (
    <Container>
      <div>
        <div className='navbar'>
          <div className='navbar_left'>
            <div className='navbar_left_logo'>
              <a href='/'><h1>Jajanin.</h1></a>
            </div>
          </div>
          <div className='navbar_right'>
            <div className='navbar_right_menu'>
              <ul>
                <li>
                  <a href='/home'>Shop Now</a>
                </li>
                <li>
                  <a href='/login'>Login</a>
                </li>
              </ul>
            </div>
        </div>
        </div>
        <div className='hero'>
          <div className='hero_content'>
            <h1>Let's Shop</h1>
            <p>
              Shop your favorite products from our wide range of collection
            </p>
          </div>
          <div className='hero_image'>
            <img src={heroImg} alt='hero' />
          </div>
        </div>
        <div className='content'></div>
        <div className='footer'></div>
      </div>
    </Container>
  )
}


const Container = styled.div`

font-family: 'Josefin';


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 20px 40px;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.navbar_left_logo a {
  text-decoration: none;
  color: black;
}

.navbar_right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
}

.navbar_right_menu {
  display: flex;
  align-items: center;
  width: 80%;
}

.navbar_right_menu ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar_right_menu ul li {
  list-style: none;
}
.navbar_right_menu ul li a {
  text-decoration: none;
  color: black;
}

.navbar_right_menu ul li a:hover {
  color: #F2C94C;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  background-color: white;
  color: black;
}

.hero_content {
  width: 50%;
}
.hero_content h1 {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
}
.hero_content p {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
}
.hero_image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.hero_image img {
  width: 80%;
}


`



