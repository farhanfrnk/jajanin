import axios from 'axios'
import React, { createContext, useState} from 'react'


export const FunctionContext = createContext()


export const FunctionProvider = props => {

    const [shop, setShop] = useState([])
    const [fetchStatus, setFetchStatus] = useState(true)
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    const [cart, setCart] = useState([])
    const [category, setCategory] = useState([])
    const [keyword, setKeyword] = useState([])



    const fetchData = async () => {
        try {
            let res = await axios.get(`https://dummyjson.com/products`)
            let result = res.data.products
            setShop([...result])
            
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCart = async () => {
        try {
            let res = await axios.get(`https://dummyjson.com/carts/1`)
            let result = res.data.products
            setCart([...result])
            
        } catch (error) {
            console.log(error)
        }
    }

    const fetchSearch = async () => {
        if(search == ''){
            fetchData()
        }
        else{
            try {
                let res = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
                let result = res.data.products
                setShop([...result])
                
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleSumbit = (e) =>{
        e.preventDefault()
        const val = document.querySelector('input').value;
        setSearch(val)
        fetchSearch()
    }

    let functions = {
        fetchData,
        handleSumbit,
        fetchCart,
        fetchSearch,
    }

    return (
        <FunctionContext.Provider value={{
                shop,
                setShop,
                input,
                setInput,
                cart,
                setCart,
                category,
                setCategory,
                keyword,
                setKeyword,
                fetchStatus,
                setFetchStatus,
                functions
            }}>
            {props.children}
        </FunctionContext.Provider>
    )


}