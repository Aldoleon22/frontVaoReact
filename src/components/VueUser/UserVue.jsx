import React from 'react'
import Navbar from './navigation/Navbar'
import 'remixicon/fonts/remixicon.css';
import './User.scss';

import TopUser from './TopUser/TopUser'
// import RouteUser from './Route/RouteUser';
import { Route, Routes } from 'react-router-dom';
import ListeCar from './voiture/ListeCar';
import Param from './Parametre/Param';
import Reserver from './reservation/Reserver';

const UserVue = () => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='main__layout'>
        <TopUser />
      </div>
      <div className='content'>
        <Routes>
          <Route path='' element={<ListeCar />} />
          <Route path='/uservue/ModifierProfil' element={<Param />} />
          <Route path='/uservue/reserver' element={<Reserver />} />
        </Routes>
      </div>

    </div>
  )
}

export default UserVue
