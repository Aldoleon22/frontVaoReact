import React from 'react'
import {NavLink, useNavigate } from 'react-router-dom'

import Lien from '../data/Lien'
import './sidebar.scss'
const Navbar = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    localStorage.removeItem('role');
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
        localStorage.removeItem('userName');
        navigate('/login');
    }
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <h2><i className="ri-taxi-line"></i> UberX</h2>
        </div>
        <div className='sidebar__content'>
            <div className='menu'>
                <ul className='nav__list'>
                    {
                        Lien.map((e, i)=>(

                            <li className='nav__item'key={i}>
                                <NavLink to={e.path}
                                    className={
                                        navClass => navClass.isActive ?
                                        'nav__active nav__link' : 'nav__link'
                                    }
                                >
                                    <span><i className={e.icon}></i> </span>
                                    {e.display}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='sidebar__bottom'>
                <span type='submit' onClick={handleLogout}><i className='ri-logout-circle-r-line'></i>Logout</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
