import React, { useEffect, useState } from 'react';
import './AllUserAd.scss'
import { FaUserEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';



const AddUser = () => {
  
        const [users, setUsers] = useState([]); // Initialisé à un tableau vide
        const [error, setError] = useState('');
      
        useEffect(() => {
          const fetchUsers = async () => {
            try {
              const response = await axios.get('http://localhost:8000/api/users');
              setUsers(response.data.users);
            } catch (error) {
              let errorMessage = 'Erreur lors de la récupération des utilisateurs';
              if (error.response) {
                errorMessage += `: ${error.response.data.error}`;
                console.error('Détails de l\'erreur:', error.response.data.details);
              } else if (error.request) {
                errorMessage += ': Aucune réponse du serveur';
                console.error('Requête:', error.request);
              } else {
                errorMessage += `: ${error.message}`;
                console.error('Erreur:', error.message);
              }
              setError(errorMessage);
            }
          };
      
          fetchUsers();
        }, []);
      
        return (
          <div className='content-user'>
            <div className='All-user'>
              <h1 className='title-user'>All User</h1>
              {error && <p className="error">{error}</p>}
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Email</th>
            
                  </tr>
                </thead>
                <tbody>
                  {users && users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                  
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }

export default AddUser