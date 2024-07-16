import axios from 'axios';
import React, { useState } from 'react'

const ModPa = () => {
  const [ancien, setAncien] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handleModPa = async (e) => {
    e.preventDefault();

    if (newPass !== confirm) {
      setMessage('Les nouveaux mots de passe ne correspondent pas.')
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/modifier_mot_de_passe', {
        ancien: ancien,
        newPass: newPass,
        confirm: confirm,
      })
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }
  return (
    <div className='comsDt'>
      <h3>Modification mot de passe</h3>
      <div className='contentBx'>

        <form onSubmit={handleModPa}>
          <h6>
            {message && <p>{message} </p>}

          </h6>
          <input type='text' value={ancien} placeholder='ancien mot de passe' onChange={(e) => setAncien(e.target.value)} />
          <input type='text' value={newPass} placeholder='nouveaux mot de passe' onChange={(e) => setNewPass(e.target.value)} />
          <input type='text' value={confirm} placeholder='confirmer mot de passe' onChange={(e) => setConfirm(e.target.value)} />
          <button type='submit'>Modifier</button>
        </form>

      </div>


    </div>
  )
}


export default ModPa
