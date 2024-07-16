import React, { useState } from 'react'
import ModPa from './ModPa'

const ModPro = () => {
    const [mdp, setMdp] = useState(false)
    const [prof, setProf] = useState(false)
    
    const modPro = () => {
      setMdp(!mdp)
      setProf(!false)
    
  
    }
    const modMdps = () => {
      setMdp(!false)
      setProf(!prof)
    
  
    }
  return (
    <div className='contenuPart tach-1'>
        <div className='outil'>

        
            <ul className='navs'>
                <li className='nave' onClick={modPro}><h4 className='nav-link menu'>Modifier mot de passe</h4> </li>
                <li className='nave' onClick={modMdps}><h4 className='nav-link menu'>Modification Profil</h4> </li>    
            </ul>
        </div>
        {
            prof &&
            <div className='Primo'>

                <div className='contenuParts'>
                    
                    <h3 className='comsDt'>
                    
                        <ModPa/>
                    </h3>
                </div>
            </div>

        }
        {
            mdp &&
            <div className='Primo'>
            
                <div className='contenuParts'>
                    <h3 className='comsDt'>Modification Nom ou email
                        <form>
                            <input value="nom" type='text' name='nom' />
                            <input value="email" type='email' name='email' />
                            <button type='submit'>Modifier</button>
                        </form>
                    </h3>
                </div>
        
            </div>
        }
        
       
    </div>
  )
}

export default ModPro
