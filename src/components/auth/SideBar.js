import React from 'react'

const SideBar = () => {
    return (
        <div className="admin_sidebar">
            <h1 className="text-2xl font-bold">DASHBOARD</h1>
            <div className="sidebar_links">
                 <li className=" sidebarlink" >
                        <a href="/#hero">Home</a>
                 </li>

                 <li className="sidebarlink" >
                        <a href="/#services">Services</a>
                 </li>
                    
                 <li className="sidebarlink " >
                        <a href="/#contact">Contact</a>
                 </li>
            </div>
        </div>
    )
}

export default SideBar
