import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllUser.scss';
import { FaUserEdit, FaRegTrashAlt } from "react-icons/fa";

const AddUser = () => {
  const [users, setUsers] = useState([]);
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

  const updateUserStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:8000/api/users/${id}/status`, { status });
      // Mettre à jour la liste des utilisateurs après la modification du statut
      setUsers(users.map(user => user.id === id ? { ...user, status } : user));
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut:', error);
      setError('Erreur lors de la mise à jour du statut');
    }
  };

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
              <th>Rôle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <select value={user.status} onChange={(e) => updateUserStatus(user.id, e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="superAdmin">Super Admin</option>
                  </select>
                </td>
                <td>
                  <a href="" className='edit'><FaUserEdit /></a>
                  <a href="" className='trash'><FaRegTrashAlt /></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddUser;
