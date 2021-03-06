import {
    PRODUCT_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCTS_DETAILS_SUCCESS,
    PRODUCTS_DETAILS_FAIL,
    PRODUCTS_DETAILS_CLEAR, PRODUCT_GENRES_REQUEST, PRODUCTS_GENRES_SUCCESS, PRODUCTS_GENRES_FAIL
} from "../constants/productConstants";


export const productListReducer = (state={products:[]},action)=>{
    switch (action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,products:[]}
        case PRODUCTS_LIST_SUCCESS:
            return {loading:false,products:action.payload}
        case PRODUCTS_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }
}

export const genresListReducer = (state={genres:[]},action)=>{
    switch (action.type){
        case PRODUCT_GENRES_REQUEST:
            return {loading:true,genres:[]}
        case PRODUCTS_GENRES_SUCCESS:
            return {loading:false,genres:action.payload}
        case PRODUCTS_GENRES_FAIL:
            return {loading:false,genres:action.payload}

        default:
            return state
    }
}

export const productDetailsReducer = (state={product:{reviews:[]}},action)=>{
    switch (action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case PRODUCTS_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCTS_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        case PRODUCTS_DETAILS_CLEAR:
            return {loading:false,product:{}}

        default:
            return state
    }
}