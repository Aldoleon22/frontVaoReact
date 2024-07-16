import React, { useState, useEffect } from 'react';
import profileImg1 from '../assets/images/Vector 158.png';
import axios from 'axios';

const Reserve = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {

    const fetchReservations = async () => {
      try {

        const userId = localStorage.getItem('userId');

        
        const response = await axios.get(`http://localhost:8000/api/reservations/${userId}`);

        
        setReservations(response.data.reservations);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations :', error);
      }
    };

    
    fetchReservations();
  }, []); 
  // const getVehiculeImage = async (vehiculeId) => {
  //   try {
  //     const response = await axios.get(`http://localhost:8000/api/listeVehicule/${vehiculeId}`);
  //     return response.data.photo; // Supposant que 'photo' est le chemin d'accès à l'image du véhicule dans la réponse
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération de l\'image du véhicule :', error);
  //     return ''; // Retourne une chaîne vide en cas d'erreur
  //   }
  // };

  return (
      <div className='contenuPart tach-2'>
        <div className='AffMsg'>
          <div className='afftext'>
            <div className='imgpro'>
              <img src={profileImg1} alt='Profile' />
            </div>
          </div>
        </div>
        

        
        <div className='reservation-list content-user'>
          <table>
              <thead>
                <tr className='reservation-items'>
                  <th>Image</th>
                  <th>début</th>
                  <th>fin</th>
                </tr>
          
              </thead>
              <tbody>
                  {reservations.map((reservation) => {
                    
                    return(
                      
                        
                            <tr key={reservation.id} className='reservation-item'>
                              <td><img src={`http://localhost:8000/storage/ImageVehicule/${reservation.photo}`}/></td>
                              <td>{reservation.datedebut}</td>
                              <td>{reservation.datefin}</td>
                            </tr>
                      
                      
                    );
                  })}
                </tbody>
          </table>
        </div>
      </div>
    );
  };

export default Reserve;