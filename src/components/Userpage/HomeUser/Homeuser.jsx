import React from 'react'
// import './Home.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { FaAccessibleIcon, FaHome } from 'react-icons/fa'
import { TfiPowerOff, TfiSearch } from 'react-icons/tfi'
import Image from "../../../assets/image/46.jpg";
import { Fa0, Fa42Group, FaHouseMedical } from 'react-icons/fa6'
import Reservation from '../Reservation/Reservation'
import CarUser from '../CarUser/CarUser'
import Histo from '../Historique/Histo';
const Homeuser = () => {
    return (
        <div className="content-home">
            <header className='header'>
                <div className="logo">
                    <h1 className='text-logo'>Car</h1>
                </div>
                <div className="info">
                    <div className="search">
                        <p className='logosearch'><TfiSearch /></p>
                        <input type="text" placeholder='Search car' />
                    </div>

                    <div className="user">
                        <img src={Image} alt="" className='imgprof' width={"30px"} />
                        <p>Jhon Doe</p>

                        <div className="out">
                            <a href="" className='logout'><TfiPowerOff /></a>
                        </div>
                    </div>

                </div>
            </header>

            <div className="content-bar">
                <div className="aside-bar">
                    <ul>
                        <li className="nav-link active" ><Link className="nav-item" to=''><FaHome className='icon' /> Home</Link></li>
                        <li className="nav-link" ><Link className="nav-item" to='/Historique'><FaAccessibleIcon className='icon' /> Historique</Link></li>
                        <li className="nav-link" ><Link className="nav-item" to='/Reservation'><Fa42Group className='icon' /> Reservation</Link></li>
                    </ul>
                </div>

                <div className="content-element">
                    <Routes>
                        <Route path=''  element={<CarUser />}/>
                        <Route path='/Historique'  element={<Histo />}/>
                        <Route path='/Reservation'  element={<Reservation />}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Homeuser