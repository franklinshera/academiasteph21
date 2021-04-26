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

import axios from 'axios'


export const loginUser = (user) => async (dispatch) => {


    try {

        dispatch({ type: USER_LOGIN_REQUEST })

       const { data } = await axios.post('http://localhost:5000/auth/login', user)
        

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })  

    } catch (error) {
          dispatch({
            type: USER_LOGIN_FAIL,
            error: error 
        })

    }
}


export const registerUser = (user) => async (dispatch) => {


    try {

        dispatch({ type: USER_REGISTER_REQUEST })

       const { data } = await axios.post('http://localhost:5000/auth/register', user)
        

        dispatch({type: USER_REGISTER_SUCCESS})
        
        

    } catch (error) {
          dispatch({
            type: USER_REGISTER_FAIL,
            error: error 
        })

    }
}

export const refreshUser = (refreshToken) => async (dispatch) => {
  
        dispatch({ type: USER_LOGIN_REQUEST })

        const { data } = await axios.post('http://localhost:5000/auth/refresh-token', { refreshToken: refreshToken })

        dispatch({ type: USER_REFRESH , payload : data})

       
}

export const logoutUser = () => async (dispatch) => {

        dispatch({ type: USER_LOGOUT })

       
}