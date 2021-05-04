import React,{ useEffect} from 'react'
import { useDispatch } from 'react-redux'

import {useRouteMatch} from 'react-router-dom'

import SideBar from './SideBar'



//actions
import {  authUserIn, authUserOut } from '../../actions/AuthUserActions'

const AdminLayout = (props) => {

    const dispatch = useDispatch()


    const linkForSidebar = [
        {
            name : "Orders",
            links: [
                {
                    name:"New Orders",
                    url: `/in/dashboard/orders`
                },
                {
                    name:"Assigned Orders",
                    url: `/in/dashboard/orders`
                },
                {
                    name:"Rejected Orders",
                    url: `/in/dashboard/orders`
                },
                {
                    name:"Completed Orders",
                    url: `/in/dashboard/orders`
                },
            ]
        },
        {
            name : "Messages",
            links: [
                {
                    name:"New Messages",
                    url: `/in/dashboard/messages`
                }
            ]
        },
        {
            name : "Payment",
            links: [
                {
                    name:"Received",
                    url: `/in/dashboard/payments`
                }
            ]
        },
        {
            name : "My Profile",
            links: [
                {
                    name:"Personal Information",
                    url: `/in/dashboard/profile`
                },
                {
                    name:"Account Information",
                    url: `/in/dashboard/profile`
                }
            ]
        },
    ]

   
    useEffect(() => {

        dispatch(authUserIn())

        return () => {
            dispatch(authUserOut())
        }

    }, [])

    

    return (
        <div className="admin-layout">
            <SideBar className="sidebar_component" links={linkForSidebar}/>
            <div className="dash_items_component">
             {props.children}
            </div>
        </div>
    )
}

export default AdminLayout
