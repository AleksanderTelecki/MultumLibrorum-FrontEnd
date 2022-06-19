import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCTS_DETAILS_SUCCESS,
    PRODUCTS_DETAILS_FAIL,
    PRODUCTS_DETAILS_CLEAR
} from "../constants/productConstants";


export const listProducts = ()=> async(dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})
        const data = await axios
            .get('/api/books/')
            .then((result) => result.data.results);

        dispatch({
            type:PRODUCTS_LIST_SUCCESS,
            payload:data
        })

    }catch (error){
        dispatch({
            type:PRODUCTS_LIST_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail : error.message
        })

    }
}

export const listProductDetails = (id)=> async(dispatch)=>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/books/${id}`)

        dispatch({
            type:PRODUCTS_DETAILS_SUCCESS,
            payload:data
        })

    }catch (error){
        dispatch({
            type:PRODUCTS_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail : error.message
        })

    }
}

export const clearProductDetailsData = ()=>async(dispatch)=>{
    dispatch({
        type:PRODUCTS_DETAILS_CLEAR
    })
}