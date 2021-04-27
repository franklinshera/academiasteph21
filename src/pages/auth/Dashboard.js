import React, {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {useHistory} from 'react-router'

import axios from 'axios'



//actions
import {  logoutUser } from '../../actions/AuthUserActions'



const Dashboard = () => {

    axios.defaults.withCredentials = true;
    
    const hist = useHistory();
    const dispatch = useDispatch()

    const authUser = useSelector( state => state.authUser)
    const { loggedInUser, auth } = authUser;

    useEffect(() => {
        
        if(!auth){
            hist.push("/in")
        }

        window.scrollTo(0,0)

        document.querySelector('title').text = 'AcademiaSteph21 | Dashboard'

    }, [auth])


    const logout = (e) =>{
        e.preventDefault();
        dispatch(logoutUser())
    }

    const testReq = (e) =>{
        e.preventDefault();
      
      try{
           axios.get('http://localhost:5000')
      }catch(err){
          console.log(err);
      }

    }

    return (
        <div className="dashboard">
            <h1 className="block text-4xl font-bold">Logged In : As { loggedInUser.name } </h1>
            <button className="block px-5 py-3 mt-5 font-bold text-white bg-red-600" onClick={logout}>Logout</button>
            <button className="block px-5 py-3 mt-10 font-bold text-white bg-green-600" onClick={testReq}>Test</button>
        </div>
    )
}

export default Dashboard
