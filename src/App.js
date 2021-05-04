import React , { useState , useEffect } from 'react'
import './App.css';

import {BrowserRouter as Router , Route, Switch , useRouteMatch } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'


import Footer from './components/Footer';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Home from './pages/Home';
import PlaceOrder from './pages/PlaceOrder';
import FindWriter from './pages/FindWriter';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Dashboard from './pages/auth/Dashboard';
import Payment from './pages/auth/Payment';
import Orders from './pages/auth/Orders';
import Messages from './pages/auth/Messages';
import Profile from './pages/auth/Profile';


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


const routes = [
{
  path: "/place-your-order",
  element: PlaceOrder
},
{
  path: "/find-writer",
  element: FindWriter
},
{
  path: "/in/dashboard",
  element: Dashboard
},
{
  path: "/in/dashboard/orders",
  element: Orders
},
{
  path: "/in/dashboard/messages",
  element: Messages
},
{
  path: "/in/dashboard/profile",
  element: Profile
},
{
  path: "/in/register",
  element: Register
},
{
  path: "/in",
  element: Login
},
{
  path: "/",
  element: Home
}
] 

  return (
  <>
    <Overlay/>   
  
        <Router>
        
         <Header inAdminPanel={inAdminPanel}/>
          <Switch>  
            <Route path="/place-your-order" exact component={PlaceOrder}/>   
            <Route path="/find-writer" exact component={FindWriter}/>  
            <Route path="/in/register" exact component={Register}/>   
            <ProtectedRoute path={ `/in/dashboard/orders` } exact component={Orders}/>   
            <ProtectedRoute path={ `/in/dashboard/messages`} exact  component={Messages}/>   
            <ProtectedRoute path={`/in/dashboard/payments`}  exact component={Payment}/>   
            <ProtectedRoute path={`/in/dashboard/profile`}  exact component={Profile}/>                   
            <ProtectedRoute path="/in/dashboard" exact  component={Dashboard}/>      
            <Route path="/in" exact component={Login}/>      
            <Route path="/" exact component={Home}/>              
            <Route component={NotFound}/>              
          </Switch>  

          {(!inAdminPanel)  &&  <Footer/>}


        </Router>
    
   
  </>
  );
}

export default App;
