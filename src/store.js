import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productListReducer,productDetailsReducer} from './reducers/productReducers'
import {cartReducers} from "./reducers/cartReducers";
import {userDetailsReducer, userLoginReducer, userRegisterReducer} from "./reducers/userReducers";

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducers,
    user: userLoginReducer,
    registration: userRegisterReducer,
    userDetails: userDetailsReducer
})

const cartItemFromLocalStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userAuthFromLocalStorage = localStorage.getItem('userAuth') ?
    JSON.parse(localStorage.getItem('userAuth')) : null

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart:{cartItems:cartItemFromLocalStorage},
    user:{userAuth:userAuthFromLocalStorage,userInfo:userInfoFromLocalStorage}
}

const middleware = [thunk]

const store = createStore(reducer,initialState,
composeWithDevTools(applyMiddleware(...middleware)));

export default store