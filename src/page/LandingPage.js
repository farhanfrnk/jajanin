import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Header/navbar'
import SearchBar from '../component/Header/search'


export default function LandingPage() {
  return (
    <Container>
      <div>
        <Navbar />
        <SearchBar />
      </div>
    </Container>
  )
}


const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap');

font-family: 'Playfair Display', serif;

`



