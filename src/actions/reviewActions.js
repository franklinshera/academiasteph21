import {
    REVIEWS_LIST_REQUEST ,
    REVIEWS_LIST_SUCCESS ,
    REVIEWS_LIST_FAIL 
} from '../constants/reviewsConstants'

import axios from 'axios'


export const listReviews = () => async (dispatch) => {
    try {
        
        dispatch({ type: REVIEWS_LIST_REQUEST })

        let data = []

        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        axios.get('http://localhost:5000/reviews', config)
        .then((res) => {
                data = res.data
            }).catch(err => console.log(err))

        dispatch({
            type: REVIEWS_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
          dispatch({
            type: REVIEWS_LIST_FAIL,
            error: error.response && error.response.data.message ?  error.response.data.message : error.message
        })

    }
}