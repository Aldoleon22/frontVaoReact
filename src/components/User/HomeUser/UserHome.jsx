import React from 'react'
import './UserHome.scss'
import { TfiPowerOff, TfiSearch } from 'react-icons/tfi'
import { FaHome, FaRegUser } from 'react-icons/fa'
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Image from "../../../assets/image/46.jpg";
import ViewCar from '../ViewCar/ViewCar';
import AllUser from '../AllUser/AllUser';




const UserHome = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    // localStorage.removeItem('role');
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
                      
                        <li className="nav-link"><Link className="nav-item" to='AllUser'><FaRegUser className='icon' /> All User</Link></li>
                    </ul>
                </div>

                <div className="content-element">
                    <Routes>
                        <Route path='' element={<ViewCar />}/>
                    
                        <Route path='AllUser' element={<AllUser />}/>
                     
                        

                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default UserHome