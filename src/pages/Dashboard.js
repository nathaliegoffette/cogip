import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import MenuDrawer from '../Drawer';
import BreadcrumbNav from './Breadcrumb';
import IlluDashboard from '../assets/images/Illu_dashboard.svg';


function Dashboard() {
    return(
        <div className='body_dashboard'>
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <BreadcrumbNav />
            <MenuDrawer />

            <div className='rectangle_mauve'>
                <img src={IlluDashboard} class="illuDashboard"></img>
                <h3>Welcome back ### !</h3>
                <p>You can here add an invoice, a company and some contacts.</p>

            </div>

        </div>
        </div>
    )
}

export default Dashboard;