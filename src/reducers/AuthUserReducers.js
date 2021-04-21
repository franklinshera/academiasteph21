import {
    USER_LOGIN_REQUEST ,
    USER_LOGIN_SUCCESS ,
    USER_LOGIN_FAIL ,
    USER_REFRESH,
    USER_LOGOUT
} from '../constants/AuthUserConstants'

export const AuthUserReducer = (state = {loggedInUser: {} , auth: false} , action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true , loggedInUser: {} , auth: false}
        case USER_REFRESH:
            return {loading: false , loggedInUser: action.payload , auth: true}
        case USER_LOGOUT:
            localStorage.removeItem("authUser")
            return {loading: false , loggedInUser: {} , auth: false}
        case USER_LOGIN_SUCCESS:
            return {loading: false , loggedInUser: action.payload.user , auth: true }
        case USER_LOGIN_FAIL:
            return {loading: false , error: action.payload}
        default:
            return state
    }
}