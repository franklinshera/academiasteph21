import React from 'react'
import { useSelector } from 'react-redux'
import {Route , Redirect} from 'react-router-dom'

const ProtectedRoute = ({ component: Component , ...rest}) => {

    const authUser = useSelector( state => state.authUser)
    const { loggedInUser , auth } = authUser;


    window.Toast.fire({
        icon: 'success',
        title: 'Protected Route!'
    })

    return (
            <Route
              {...rest} 

              render={props => {

                  if(loggedInUser != null && auth)
                  {
                      return <Component {...props} />
                  }else{
                     return <Redirect to="/in" />
                  }

              }}/>  
    )
}

export default ProtectedRoute
