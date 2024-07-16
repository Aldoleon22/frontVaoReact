import React from 'react'
import { NavLink } from 'react-router-dom'

import Lien from '../data/Lien'
import './sidebar.scss'
const Navbar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h2><i className="ri-taxi-line"></i> UberX</h2>
            </div>
            <div className='sidebar__content'>
                <div className='menu'>
                    <ul className='nav__list'>

                        <li className='nav__item'>
                            <NavLink to=''
                                className={
                                    navClass => navClass.isActive ?
                                        'nav__active nav__link' : 'nav__link'
                                }
                            >
                                <span><i className='ri-taxi-line'></i> Voiture</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='sidebar__bottom'>
                    <span><i className='ri-logout-circle-r-line'></i>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
