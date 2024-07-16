import React from 'react'
import profileImg from '../assets/images/profile-02.png'
import './topnav.scss'
import {Link} from 'react-router-dom';

const TopUser = () => {
  return (
    <div className='top__nav'>
        <div className='top__nav-wrapper'>
        <div className='search__box'>
            <input type="text" placeholder="search or type" />
            <span><i className='ri-search-line'></i></span>
        </div>
        <div className='top_nav-right'>
            <span className='notification'><i className='ri-notification-3-line'></i>
            <span className='badge'>1</span>
            </span>
            <div className='profile'>
            <Link to='./ModifierProfil'><img src={profileImg}/></Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TopUser
