import React from 'react'
import { Link , BrowserRouter} from 'react-router-dom'
import SideBarLink from '../SideBarLink'

const SideBar = ({ links }) => {


  


    return (
        <div className="admin_sidebar">
            <h1 className="text-2xl font-bold">DASHBOARD</h1>
            <div className="sidebar_links">
                <BrowserRouter>
                    {links.map((slink , index) => (
                             <SideBarLink sidelink={slink} linkPos={ index + 1} key={index}/>
                    ))}
                </BrowserRouter>

            </div>
        </div>
    )
}

export default SideBar
