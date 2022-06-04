import {CART_REMOVE_ITEM,CART_ADD_ITEM} from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id,qty)=> async(dispatch,getState)=>{
    const {data} = await axios.get(`/api/books/${id}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.title,
            image:data.image,
            price:data.price,
            availableQuantity:data.availableQuantity,
            qty
        }
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id)=> async(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id,
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}