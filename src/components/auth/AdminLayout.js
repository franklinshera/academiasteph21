import React,{ useEffect} from 'react'
import { useDispatch } from 'react-redux'

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
                    url: "/in/dashboard/new-orders"
                },
                {
                    name:"Assigned Orders",
                    url: "/in/dashboard/assigned-orders"
                },
                {
                    name:"Rejected Orders",
                    url: "/in/dashboard/complete-orders"
                },
                {
                    name:"Completed Orders",
                    url: "/in/dashboard/complete-orders"
                },
            ]
        },
        {
            name : "Messages",
            links: [
                {
                    name:"New Messages",
                    url: "/in/dashboard/new-messages"
                }
            ]
        },
        {
            name : "Payment",
            links: [
                {
                    name:"Received",
                    url: "/in/dashboard/received-payments"
                }
            ]
        },
        {
            name : "My Profile",
            links: [
                {
                    name:"Personal Information",
                    url: "/in/dashboard/personal-information"
                },
                {
                    name:"Account Information",
                    url: "/in/dashboard/account-information"
                },
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
