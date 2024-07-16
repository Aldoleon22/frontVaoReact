import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Param from '../Parametre/Param';
import Reserver from '../reservation/Reserver';
import UserVue from '../UserVue';
import ListeCar from '../voiture/ListeCar';

const RouteUser = () => {
  return (
    <Routes>
        <Route path='/' element={<UserVue/>} />
        <Route path='/Uservue' element={<UserVue/>}/>
        <Route path='/liste-voiture' element={<ListeCar/>}/>
        <Route path='/Modifier-Profil' element={<Param/>} />
        <Route path='/liste-voiture/reserver' element={<Reserver/>}/>
    </Routes>
  )
}

export default RouteUser
