import React, { useState } from 'react'
import profileImg from '../assets/images/profile-02.png'
import profileImg1 from '../assets/images/Vector 158.png'


import './Param.scss'
import ModPro from './ModPro'
import Reserve from './Reserve'
import ModPa from './ModPa'
const Param = () => {
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');


  const [tach1, setTach1] = useState(false)
  const [tach2, setTach2] = useState(false)
  // const [tach3, setTach3] = useState(false)
  const modProf = () => {
    setTach1(!tach1)
    setTach2(!false)
    // setTach3(!false)

  }
  const reserve = () => {
    setTach1(!false)
    setTach2(!tach2)
    // setTach3(!false)

  }
  const modPass = () => {
    setTach1(!false)
    setTach2(!false)
    // setTach3(!tach3)

  }


  return (
    <section className="Profile">
      <div className='couvert'>
        <div className='msgBv'>
          <img src={profileImg1} />
        </div>
        <div className='imgPro'>
          <img src={profileImg} />
        </div>
        <h1>{userName}<br /> <span>{userEmail} </span> </h1>
        <div className='outils'>
          <ul className='navy'>
            <li className='nav' onClick={modProf}><h1 className='nav-link menu'>Liste des Reservation</h1> </li>
            <li className='nav' onClick={reserve}><h1 className='nav-link menu'>Modification Profil</h1> </li>
            
          </ul>
        </div>
        {tach1 &&
          <ModPro />
        }
        {tach2 &&
          <Reserve />
        }
    
      </div>

    </section>
  )
}

export default Param
