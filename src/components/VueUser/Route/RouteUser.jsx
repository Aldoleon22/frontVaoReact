import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Param from '../Parametre/Param';
import Reserver from '../reservation/Reserver';
import UserVue from '../UserVue';
import ListeCar from '../voiture/ListeCar';

const RouteUser = () => {
  return (
    <Routes>
        <Route path='/uservue/*' element={<Navigate to="/uservue" element={<UserVue/>}/>} />
        <Route path='/uservue/*' element={<UserVue/>}/>
        <Route path='uservue/liste-voiture' element={<ListeCar/>}/>
        <Route path='uservue/Modifier-Profil' element={<Param/>} />
        <Route path='uservue/liste-voiture/reserver' element={<Reserver/>}/>
    </Routes>
  )
}

export default RouteUser
