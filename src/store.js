import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reviewsListReducer } from './reducers/reviewsListReducers'
import { AuthUserReducer,RegisterUserReducer, AdminPanelReducer } from './reducers/AuthUserReducers'
import { OrderAcademicLevelsReducer } from './reducers/OrderReducers'

const reducer =  combineReducers({
    reviewList: reviewsListReducer,
    authUser: AuthUserReducer,
    registration: RegisterUserReducer,
    adminPanel: AdminPanelReducer,
    academicLevels: OrderAcademicLevelsReducer
})


const initialState = {}


const middleware = [thunk]

const store = createStore(
                reducer,
                initialState,
                composeWithDevTools(applyMiddleware(...middleware))
                )


export default store;