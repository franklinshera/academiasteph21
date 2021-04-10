import React , { useState , useEffect } from 'react'
import './App.css';

import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Home from './pages/Home';
import PlaceOrder from './pages/PlaceOrder';
import FindWriter from './pages/FindWriter';





function App() {

   

  return (
  <>
    <Overlay/>    
    <Header/>

        <Router>
          <Switch>                
            <Route path="/" exact component={Home}/>
            <Route path="/place-your-order" exact component={PlaceOrder}/>   
            <Route path="/find-writer" exact component={FindWriter}/>   
          </Switch>    

        </Router>

    <Footer/>
  </>
  );
}

export default App;
