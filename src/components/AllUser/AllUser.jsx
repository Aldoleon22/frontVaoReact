import React from 'react'
import './AllUser.scss'
import { FaUserEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const AddUser = () => {
  return (
        <div className='content-user'>
            <div className='All-user'>
                <h1 className='title-user'>All User</h1>
                <table>
                    <tr>
                        <th>id</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jhon</td>
                        <td>Jhon@gmail.com</td>
                        <td><a href="" className='edit'><FaUserEdit /></a> <a href="" className='trash'><FaRegTrashAlt /></a></td>
                    </tr>
                </table>
            </div>
        </div>
  )
}

export default AddUser