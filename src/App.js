import React , { useState , useEffect } from 'react'
import './App.css';

import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Home from './pages/Home';
import PlaceOrder from './pages/PlaceOrder';
import FindWriter from './pages/FindWriter';
import Login from './pages/auth/Login';
import Dashboard from './pages/auth/Dashboard';


import { useDispatch , useSelector} from 'react-redux'


//actions
import {  refreshUser } from './actions/AuthUserActions'
import Register from './pages/auth/Register';


function App() {

  const dispatch =  useDispatch();
    
    const authUser = useSelector( state => state.authUser)
    const { auth } = authUser;

  useEffect(() => {

    const locStorage = localStorage.getItem("authUser");

      if(!auth && locStorage != undefined){
          const storedUser = JSON.parse(locStorage)

          if(storedUser){
              dispatch(refreshUser(storedUser))
          } 
          
      }      

  },[])
   

  return (
  <>
    <Overlay/>    
    <Header/>

        <Router>
          <Switch>  
            <Route path="/in" exact component={Login}/>   
            <Route path="/in/register" exact component={Register}/>   
            <Route path="/in/dashboard" exact component={Dashboard}/>   
            <Route path="/place-your-order" exact component={PlaceOrder}/>   
            <Route path="/find-writer" exact component={FindWriter}/>              
            <Route path="/" exact component={Home}/>              
          </Switch>  
        </Router>

    <Footer/>
  </>
  );
}

export default App;
