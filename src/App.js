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



import Swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'








const Swal = withReactContent(Swal2)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;



function App() {

  const dispatch =  useDispatch();
    
    const authUser = useSelector( state => state.authUser)
    const userInAdmin = useSelector( state => state.adminPanel)

    const { inAdminPanel } = userInAdmin;

    const { auth } = authUser;

   



    useEffect(() => {

        if(!auth ){

                dispatch(refreshUser())
          
        }      

      setInterval(() => {
        dispatch(refreshUser(1))
      }, 570000);

    

    },[])
   

  return (
  <>
    <Overlay/>   
  
      <Header inAdminPanel={inAdminPanel}/>

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
    {(!inAdminPanel)  &&  <Footer/>}
   
  </>
  );
}

export default App;
