import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FunctionContext } from '../context/FunctionContext'


export default function Category() {

//   const { keyword, setKeyword, category, functions, fetchStatus, setFetchStatus} = useContext(FunctionContext)
//   const { fetchData, fetchCategory } = functions

//   const [status, setStatus] = useState(true)

//   useEffect( () => {

//       if(status){
//         fetchCategory("smarthphone")
//         fetchCategory("laptops")
//         setStatus(false)
//       }


//     }, [fetchCategory])

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
          {/* { category ?
            <div className='map'>
                {
                    category.map((val, index) =>{
                        return (
                            <div className='card' key={index}>
                                <div className='img'><img src={val.images[0]} /></div>
                                <div className='text'>
                                    <h2>{val.title}</h2>
                                    <div className='text2'>
                                        <p>{val.price}$</p>
                                        <p>Stock : {val.stock}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            :
            <div>Loading.....</div>
        } */}
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
    align-content: flex-start;
    justify-content: flex-start;
}

.card{
    margin: 10px;
    width: 180px;
    height: 282px;
    border: 3px solid #252936;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    .img{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
    }
    img{
        width: 100%;
        border-radius: 5px 5px 0 0;
        
    }



    .text{
        color: #FEFFFF;
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #252936;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        
        h2{
            font-size: 16px;
            display: block;
            float: left;
        }

        // p:nth-child(2){
        //     font-size: 0.75rem;
        // }

        .text2{
            display: flex;
            flex-direction: row;
            font-size: 0.75rem;
            justify-content: space-around;
            width: 100%;


            p{
                display: inline-block;
            }
        }
    }
}

`



