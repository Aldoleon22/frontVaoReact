import React, { useState } from 'react'
import './reservation.scss'
const Reserver = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [datedebut, setDatedebut] = useState('');
    const [datefin, setDatefin] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.post()
        } catch (error) {
            
        }
    }

    return (
        <div className='reservation'>
            <div className='datas'>
                <h5>Résèrvation de vehicule</h5>
                <form>
                    
                    <div className='right'>
                        <div className='input'>
                            <label className='color'>date de début</label><br />
                            <input type="date" placeholder="date début de votre reservation" className='soratra' />
                        </div>
                        <div className='input'>
                            <label className='color'>date de Fin</label><br />
                            <input type="date" placeholder="date fin" className='soratra' />
                        </div>
                    </div>
                    <div className='input-field button'>
                        <input type="submit" className='input-field' value="Enregistrer" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Reserver
