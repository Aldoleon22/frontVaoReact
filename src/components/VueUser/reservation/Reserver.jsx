import axios from 'axios';
import React, { useState } from 'react'
import './reservation.scss'
import {useNavigate} from 'react-router-dom';
import Reserve from '../Parametre/Reserve';
const Reserver = () => {
   const navigate = useNavigate();
    const [datedebut, setDatedebut] = useState('');
    const [datefin, setDatefin] = useState('');
    const [error, setError] = useState('');
    const [selectedCar, setSelectedCar] = useState(null);

    const userId = localStorage.getItem('userId');


    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/reservation',{
                datedebut, datefin, userId, id_vehicules
            });
        console.log('Réservation réussie:', response.data);
        navigate('/uservue/Modifier-Profil')

        } catch (error) {
            setError('Erreur lors de réservation');
            console.error('Erreur lors de réservation:', error);
        }
    }
  
  

    return (
        <div className='reservation'>
            <div className='datas'>
                <h5>Résèrvation de vehicule</h5>
                <form onSubmit={handleSubmit}>
                    
                    <input type="text" value={userId} />
                    

                            <input type="text" value={selectedCar.id}/>
                     
                        <div className='input'>
                            <label className='color'>date de début</label><br />
                            <input type="date" placeholder="date début de votre reservation" className='soratra' value={datedebut} 
                            onChange={(e) => setDatedebut(e.target.value)}/>
                        </div>
                        <div className='input'>
                            <label className='color'>date de Fin</label><br />
                            <input type="date" placeholder="date fin" className='soratra' value={datefin} 
                            onChange={(e) => setDatefin(e.target.value)}
                             />
                        </div>
                    
                    
                        <input type="submit" className='input-field' value="Enregistrer" />
                    
                </form>

            </div>
        </div>
    )
}

export default Reserver
