import React, {useEffect} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/cartActions";
import {CartTable} from "../components/CartTable";


function CartScreen(props) {
    const {id} = useParams()
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const cart = useSelector(state => state.cart)

    const qty = searchParams.get('qty')
    const {cartItems} = cart


    const dispatch = useDispatch()
    useEffect(()=>{
        if (id){
            dispatch(addToCart(id,qty))
        }
    },[dispatch,id,qty])


    console.log(cartItems)
    return (
        <div>
            <CartTable data={cartItems}/>
        </div>
    );
}

export default CartScreen;