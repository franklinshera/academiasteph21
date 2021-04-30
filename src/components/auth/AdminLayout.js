import React from 'react'

import SideBar from './SideBar'

const AdminLayout = (props) => {
    return (
        <div className="admin-layout">
            <SideBar className="sidebar_component"/>
            <div className="dash_items_component">
             {props.children}
            </div>
        </div>
    )
}

export default AdminLayout
