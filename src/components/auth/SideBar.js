import React from 'react'
import { Link , BrowserRouter} from 'react-router-dom'

const SideBar = () => {


  


    return (
        <div className="admin_sidebar">
            <h1 className="text-2xl font-bold">DASHBOARD</h1>
            <div className="sidebar_links">
                <BrowserRouter>
                
                    <li className=" sidebarlink" >
                            
                            <Link to="/in/dashboard">Orders</Link>
                    </li>

                    <li className=" sidebarlink" >
                            
                            <Link to="/in/dashboard">Messages</Link>
                    </li>

                    <li className=" sidebarlink" >
                            
                            <Link to="/in/dashboard">Payment</Link>
                    </li>

                    <li className=" sidebarlink" >
                            
                            <Link to="/in/dashboard">My Profile</Link>
                    </li>

                </BrowserRouter>

            </div>
        </div>
    )
}

export default SideBar
