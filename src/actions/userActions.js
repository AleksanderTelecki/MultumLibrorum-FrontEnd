import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST, USER_LOAD_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS
} from "../constants/userConstants";
import axios from "axios";


export const load_user = () => async(dispatch)=>{
    try{
        if (localStorage.getItem('userAuth')){
            dispatch({
                type:USER_LOAD_REQUEST
            })

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${JSON.parse(localStorage.getItem('userAuth')).access}`,
                    'Accept': 'application/json'
                }
            };

            const {data} = await axios.get(`api/auth/users/me/`, config);
            dispatch({
                type:USER_LOAD_SUCCESS,
                payload:data
            })

        }else {
            dispatch({
                type:USER_LOAD_FAIL,
            })
        }

    }catch (error){
        dispatch({
            type:USER_LOAD_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail : error.message
        })
    }
}

export const login = (email, password)=> async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ email, password });

        const {data} = await axios.post('/api/auth/jwt/create/',body,config)

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

    }catch (error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userAuth')
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

export const register = (email,password,re_password,first_name,last_name)=> async(dispatch)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ email,first_name,last_name,password,re_password });

        const {data} = await axios.post('/api/auth/users/',body,config)

        dispatch(login(email,password))

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })

    }catch (error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail : error.message
        })
    }
}


export const getUserDetails = ()=> async(dispatch)=>{
    try{
        if (localStorage.getItem('userAuth')){
            dispatch({
                type:USER_DETAILS_REQUEST
            })

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${JSON.parse(localStorage.getItem('userAuth')).access}`,
                    'Accept': 'application/json'
                }
            };

            const {data} = await axios.get(`api/auth/users/me/`, config);
            dispatch({
                type:USER_DETAILS_SUCCESS,
                payload:data
            })

        }else {
            dispatch({
                type:USER_DETAILS_FAIL,
            })
        }

    }catch (error){
        dispatch({
            type:USER_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail : error.message
        })
    }
}

