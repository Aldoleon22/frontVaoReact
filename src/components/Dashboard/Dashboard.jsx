import React from 'react'
import AjoutEngin from '../AjoutEngin/AjoutEngin'
import ModEngin from '../ModifEngine/ModEngin'
import Inscription from '../inscription/Inscription'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='inscription'>
            <Inscription/>
            <AjoutEngin/>
            <ModEngin/>
        </div>
    </div>
  )
}

export default Dashboard