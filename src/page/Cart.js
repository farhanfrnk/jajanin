import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FunctionContext } from '../context/FunctionContext'


export default function Cart() {

  const { shop, setShop, functions, fetchStatus, setFetchStatus, search, cart, setCart} = useContext(FunctionContext)
  const { fetchData, fetchCart } = functions

  useEffect( () => {

      fetchCart()


    }, [fetchCart])

  return (
    <Container>
      <div>
        <div className='header'>
              <h1>
                  Welcome to Jajanin.
              </h1>
              <p>
                  Tempat kamu bisa belanja apapun secara mudah dan dapatkan juga gratis ongkir
              </p>
              <div></div>
          </div>
          { cart ?
              <div className='map'>
                  {
                      cart.map((val, index) =>{
                          return (
                              <div className='card' key={index}>
                                  <h2>{val.title}</h2>
                                  <div className='text'>
                                      <p>{val.price}$</p>
                                  </div>
                              </div>
                          )
                      })
                  }
              </div>
              :
              <div>Loading.....</div>
          } 
      </div>
    </Container>
  )
}


const Container = styled.div`


font-family: 'Inter', sans-serif;

.header{
    text-align:center;

    div{
        height: 2px;
        background: black;
    }
}

.map{
    display: flex;
    flex-wrap: wrap;
}

.card{
    margin: 20px;
    width: 300px;
    height: auto;
    border: 3px solid #18254F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    border-radius: 20px;

    .img{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
    }
    img{
        width: 200px;;
    }



    .text{
        width: 100%;
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: pink;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;

        p:nth-child(2){
            font-size: 0.75rem;
        }
    }
}

`



