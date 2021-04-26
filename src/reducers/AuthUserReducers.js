import {
    USER_LOGIN_REQUEST ,
    USER_LOGIN_SUCCESS ,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST ,
    USER_REGISTER_SUCCESS ,
    USER_REGISTER_FAIL,
    USER_REFRESH,
    USER_LOGOUT
} from '../constants/AuthUserConstants'

import {useHistory} from 'react-router'




export const AuthUserReducer = (state = {loggedInUser: {} , auth: false, refreshToken: ''} , action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true , loggedInUser: {} , auth: false , refreshToken: ''}

        case USER_REFRESH:
            return {loading: false , loggedInUser: action.payload.user , auth: true , refreshToken:action.payload.refresh_token}

        case USER_LOGOUT:
            localStorage.removeItem("authUser")
            localStorage.removeItem("refreshToken")
            return {loading: false , loggedInUser: {} , auth: false , refreshToken: ''}

        case USER_LOGIN_SUCCESS:
            localStorage.setItem("authUser", JSON.stringify(action.payload.user))
            localStorage.setItem("refreshToken", JSON.stringify(action.payload.refresh_token))
            return {loading: false , loggedInUser: action.payload.user , auth: true , refreshToken:action.payload.refresh_token}

        case USER_LOGIN_FAIL:
            return {loading: false , error: action.payload}
        default:
            return state
    }
}


export const RegisterUserReducer = (state = {registered: false} , action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true ,registered: false}

        case USER_REGISTER_SUCCESS:
            return {loading: false , registered: true }

        case USER_REGISTER_FAIL:
            return {loading: false , error: action.payload}

        default:
            return state
    }
}