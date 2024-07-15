import React from 'react'
import './Historique.scss'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Histo = () => {
  return (
    <div className='Historique'>
        <h1>Historique de reservation</h1>
        <div className="table_histo">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Marque</th>
                    <th>Matricule</th>
                    <th>Nbr du jours</th>
                    <th>Date</th>
                    <th>total price</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Toavina Fenomanana</td>
                    <td>Fenomananat@gmail.com</td>
                    <td>HIUNDAY</td>
                    <td>1234 TBD</td>
                    <td>2J</td>
                    <td>2024/05/09</td>
                    <td>40.000 Ar</td>
                    <td><Link><FaTrash/></Link></td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Histo