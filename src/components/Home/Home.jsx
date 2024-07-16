import React from 'react';
import './Home.scss';
import { TfiSearch, TfiPowerOff } from 'react-icons/tfi';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { IoPersonAdd } from 'react-icons/io5';
import { MdAddBox } from 'react-icons/md';
import Image from '../../assets/image/46.jpg';
import AllUser from '../AllUser/AllUser';
import Car from '../Car/Car';
import Inscription from '../inscription/Inscription';
import AjoutEngin from '../AjoutEngin/AjoutEngin';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import CarModifAd from '../Admin/CarAd/CarModifAd';
import Modifcar from '../Admin/CarAd/Modifcar/Modifcar';

const Home = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    // localStorage.removeItem('role');
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
        localStorage.removeItem('userName');
        navigate('/');
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
                            <button className='logout' onClick={handleLogout}><TfiPowerOff /></button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="content-bar">
                <div className="aside-bar">
                    <ul>
                        <li className="nav-link active"><Link className="nav-item" to=''><FaHome className='icon' /> Home</Link></li>
                        <li className="nav-link"><Link to='Inscription' className="nav-item"><IoPersonAdd className='icon' /> Add User</Link></li>
                        <li className="nav-link"><Link className="nav-item" to='Addcar'><MdAddBox className='icon' /> Add car</Link></li>
                        <li className="nav-link"><Link className="nav-item" to='User'><FaRegUser className='icon' /> All User</Link></li>
                    </ul>
                </div>

                <div className="content-element">
                    <Routes>
                        <Route path='' element={<Car />} />
                        <Route path='Inscription' element={<Inscription />} />
                        <Route path='Addcar' element={<AjoutEngin />} />
                        <Route path='Modifengin/:id' element={<CarModifAd />} />
                        <Route path='User' element={<AllUser />} />
                        <Route path='Modifcar/:id' element={<Modifcar />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Home;
