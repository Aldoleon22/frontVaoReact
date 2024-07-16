import React from 'react'
import Navbar from './navigation/Navbar'
import RouteUser from './Route/RouteUser'
import 'remixicon/fonts/remixicon.css';
import './User.scss';

import TopUser from './TopUser/TopUser'

const UserVue = () => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='main__layout'>
        <TopUser />
      </div>
      <div className='content-user-back'>
        <RouteUser />
      </div>

    </div>
  )
}

export default UserVue
