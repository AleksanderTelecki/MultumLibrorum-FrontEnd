import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS,
    USER_LOAD_FAIL, USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS
} from "../constants/userConstants";


export const userLoginReducer = (state={},action)=>{
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            localStorage.setItem('userAuth',JSON.stringify(action.payload))
            return {loading:false,userAuth:action.payload.access}
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        case USER_LOAD_SUCCESS:
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
            return {loading: false,userInfo:action.payload}
        case USER_LOAD_REQUEST:
            return {loading: true}
        case USER_LOAD_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userRegisterReducer = (state={},action)=>{
    switch (action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case USER_REGISTER_FAIL:
            return {loading:false,error:action.payload}
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }

        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }

        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case USER_DETAILS_RESET:
            return { user: {} }


        default:
            return state
    }
}