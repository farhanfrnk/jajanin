import React, { Suspense, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FunctionContext } from '../context/FunctionContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faStar, faXmark } from '@fortawesome/free-solid-svg-icons'
import { SwitchThemeContext } from '../context/SwitchTheme'


export default function Home() {

    const { shop, functions, fetchStatus, setFetchStatus} = useContext(FunctionContext)
    const { fetchData } = functions

    const [titleProduct, setTitleProduct] = useState('')
    const [descProduct, setDescProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
    const [imageProduct, setImageProduct] = useState('')
    const [categoryProduct, setCategoryProduct] = useState('')
    const [stockProduct, setStockProduct] = useState('')
    const [idProduct, setIdProduct] = useState('')
    const [ratingProduct, setRatingProduct] = useState('')
    const [wishlistStatus, setWishlistStatus] = useState(false)

    const {theme, setTheme} = useContext(SwitchThemeContext)
    


    useEffect( () => {

        if (fetchStatus){
            fetchData("products")
            setFetchStatus(false)
        }
 

      }, [fetchData, fetchStatus, setFetchStatus])
      
      const card = document.getElementsByClassName('card')
      setTimeout(() => {
        for( let i = 0 ; i < card.length; i++){
            const cardEach = document.getElementsByClassName('card').item(i)
            cardEach.addEventListener('mouseover', ()=>{
                cardEach.classList.add('hover');
            })
            cardEach.addEventListener('mouseleave', ()=>{
                cardEach.classList.remove('hover');
            })
            cardEach.addEventListener('click', () => {
                const popOut = document.getElementsByClassName('popOutContainer').item(0)
                popOut.classList.add('popOutActive')
    
                setTitleProduct(shop[i].title)
                setDescProduct(shop[i].description)
                setImageProduct(shop[i].images[0])
                setPriceProduct(shop[i].price)
                setCategoryProduct(shop[i].category)
                setStockProduct(shop[i].stock)
                setRatingProduct(shop[i].rating)
            })
          }
        }, 100);
        
        
        function closePopOut(){
            const popOut = document.getElementsByClassName('popOutContainer').item(0)
            popOut.classList.remove('popOutActive')
        }


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
            {/* <div></div> */}
        </div>
        { shop ?
            <div className='map'>
                {
                    shop.map((val, index) =>{
                        return (
                            <div className={`card ${theme}`} key={index}>
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
        }

        <div className='popOutContainer'>
            <div className='popOut'>
                <div className='popOutLeft'>
                    <img src={imageProduct} />
                </div>
                <div className='popOutRight'>
                    <div className='close' onClick={closePopOut}>
                        <button><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <div className='detailProduct'>
                        <h2>{titleProduct}</h2>
                        <p>{descProduct}</p>
                        <div className='rateStock'>
                            <div>
                                <p>Rate</p>
                                <span></span>
                                <p><FontAwesomeIcon icon={faStar} /> {ratingProduct}</p>
                            </div>
                            <div>
                                <p>Stock</p>
                                <span></span>
                                <p>{stockProduct}</p>
                            </div>
                        </div>
                        <div className='category'>
                            <p>Category : {categoryProduct}</p>
                        </div>
                        <div className='price'>
                            <h3>{priceProduct}$</h3>
                        </div>
                    </div>
                    <div className='btnCTA'>
                        <button className='btnShow'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <p>Add to Cart</p>
                        </button>
                        <button className='btnAddToWish'>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </Container>
  )
}


const Container = styled.div`

font-family: 'Inter', sans-serif;

.header{
    text-align:center;
    color: #FEFFFF;

    div{
        height: 2px;
        background: #FEFFFF;
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

.popOut{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vh;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    transition: all 5s ease-in-out;
}

.popOut .popOutLeft{
    width: 50%;
    height: 100%;
    background-color: #252936;
    border-radius: 20px 0 0 20px;
}

.popOut .popOutLeft img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px 0 0 20px;
}

.popOut .popOutRight{
    width: 50%;
    height: 100%;
    background-color: #252936;
    padding: 0 0 0 20px;
    color: #FEFFFF;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.popOut .popOutRight .close{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
    text-align: center;
}



.popOut .popOutRight .close:hover{
    color: #252936;
}

.popOut .popOutRight .close svg{
    width: 80%;
    height: 80%;
    cursor: pointer;
    color: #FEFFFF;
}
.popOut .popOutRight .close button{
    width: 100%;
    height: 100%;
    border: none;
    background-color: #ff7551;
    border-radius: 50%;
}

.popOutRight h1{
    font-size: 1.5rem;
    color: #252936;
    padding: 0;
}


.popOutContainer{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  display: none;
  opacity: 0;
}

.popOutActive{
  display: block !important;
  opacity: 1 !important;
  transition: opacity 500ms;

}

.detailProduct{
    width: 90%;
    height: 60%;
}

.rateStock{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.rateStock div{
    padding: 10px;
    width: auto;
    height: 50px;
    border: 1px solid #ff7551;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ff7551;
}

.rateStock span{
    padding: 1px;
    background-color: #ff7551;
    border-radius: 5px;
    margin: 5px 0;
}



.rateStock div p{
    margin: 0;
    text-align: center;
}

.rateStock div p:nth-child(2){
    margin-top: 10px;
    
}
.rateStock div p svg{
    color: yellow;
}
.btnCTA{
    background-color: #252936;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 10%;
    padding: 1px 0;
    margin: 0 auto;
}

.category p{
    text-transform: capitalize;
}
.price{
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #ff7551;
    float: right;
    padding: 5px;
    border-radius: 5px;
    
}
.price h3{
    margin: 0;
    text-align: right;
    color: #feffff;
}

.btnCTA .btnShow{
    width: 80%;
    font-size: 1rem;
    background-color: #32a7e2;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 7px;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: #252936;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.btnCTA .btnShow svg{
    margin-right: 5px;
}

.btnCTA .btnAddToWish{
    width: 20%;
    font-size: 1rem;
    background-color: #ff7551;
    border: none;
    border-radius: 7px;
    color: white;
    transition: all 0.2s ease-in-out;
}

.btnCTA .btnAddToWish:hover{
    color: #252936;
}
.hover{
    border-color: #32a7e2 !important;
    transform: scale(1.1);
}

`



