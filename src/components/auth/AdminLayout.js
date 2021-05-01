import React,{ useEffect} from 'react'
import { useDispatch } from 'react-redux'

import SideBar from './SideBar'


//actions
import {  authUserIn, authUserOut } from '../../actions/AuthUserActions'

const AdminLayout = (props) => {

    const dispatch = useDispatch()

    

   
    useEffect(() => {

        dispatch(authUserIn())

        return () => {
            dispatch(authUserOut())
        }

    }, [])

    

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
