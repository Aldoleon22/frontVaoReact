import React from 'react'
import './Adhome.scss'
import { TfiPowerOff, TfiSearch } from 'react-icons/tfi'
import { FaHome, FaRegUser } from 'react-icons/fa'
import { MdAddBox } from 'react-icons/md'
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Image from "../../../assets/image/46.jpg";
import CarAd from '../CarAd/CarAd'
import Inscription from '../../inscription/Inscription'
import AllUserAd from '../AllUserAd/AllUserAd'
import CarModifAd from '../CarAd/CarModifAd'
import Modifcar from '../CarAd/Modifcar/Modifcar'
import AjoutEngin from '../../AjoutEngin/AjoutEngin'
const AdHome = () => {
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
                        <p>{userName}</p>

                        <div className="out">
                            <a href="" className='logout' onClick={handleLogout}><TfiPowerOff /></a>
                        </div>
                    </div>

                </div>
            </header>

            <div className="content-bar">
                <div className="aside-bar">
                    <ul>
                        <li className="nav-link active" ><Link className="nav-item" to=''><FaHome className='icon' /> Home</Link></li>
                        <li className="nav-link"><Link className="nav-item" to='AdCar'><MdAddBox className='icon' /> Add car</Link></li>
                        <li className="nav-link"><Link className="nav-item" to='AllUser'><FaRegUser className='icon' /> All User</Link></li>
                    </ul>
                </div>

                <div className="content-element">
                    <Routes>
                        <Route path='' element={<CarAd />}/>
                        <Route path='AdCar' element={<AjoutEngin />}/>
                        <Route path='AllUser' element={<AllUserAd />}/>
                        <Route path='voir/:id' element={<CarModifAd />}/>
                        <Route path='Modifcar/:id' element={<Modifcar />}/>

                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdHome