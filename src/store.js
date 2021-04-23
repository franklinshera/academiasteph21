import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reviewsListReducer } from './reducers/reviewsListReducers'
import { AuthUserReducer,RegisterUserReducer } from './reducers/AuthUserReducers'

const reducer =  combineReducers({
    reviewList: reviewsListReducer,
    authUser: AuthUserReducer,
    registration: RegisterUserReducer
})


const initialState = {}


const middleware = [thunk]

const store = createStore(
                reducer,
                initialState,
                composeWithDevTools(applyMiddleware(...middleware))
                )


export default store;