import {
    USER_LOGIN_REQUEST ,
    USER_LOGIN_SUCCESS ,
    USER_LOGIN_FAIL,
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

        localStorage.setItem("authUser", JSON.stringify(data.user))

        

    } catch (error) {
          dispatch({
            type: USER_LOGIN_FAIL,
            error: error 
        })

    }
}

export const refreshUser = (user) => async (dispatch) => {
  
        dispatch({ type: USER_LOGIN_REQUEST })

        dispatch({ type: USER_REFRESH , payload : user})

       
}

export const logoutUser = () => async (dispatch) => {

        dispatch({ type: USER_LOGOUT })

       
}