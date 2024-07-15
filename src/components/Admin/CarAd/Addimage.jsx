import React from 'react'
import './Addimage.scss'
import { MdAddPhotoAlternate } from "react-icons/md";
const Addimage = () => {
  return (
    <div className='divform'>
        <form action="">
            <label htmlFor="file"><MdAddPhotoAlternate /></label>
            <input type="file" id='file'/>
            <button type='submit'>Ajouter</button>
        </form>
    </div>
  )
}

export default Addimage