import React, { useCallback, useState } from 'react'
import './CarModifAd.scss'
import Image from '../../../assets/image/46.jpg'
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
import { useDropzone } from 'react-dropzone';
const CarModifAd = () => {
    const [image, setimage]= useState([]);
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        // accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setimage(acceptedFiles);
        },
    });

    return (
        <div>
            <div className="desCar">
                <h1>Description du vehicule</h1>
                <div className="imagedesc">
                    <div className='image'>
                        <img src={Image} alt="" width={'200px'} />

                        <div className="cardescription">
                            <span>HIUNDAY</span>
                            <span>1324 TBD</span>
                            <span>50.000 Ar/j</span>
                        </div>
                    </div>
                    <div className="soudesc">
                        <h2>Voiture standart</h2>
                        <p>Chauffeur offert</p>
                        <p>Tarifs necociable</p>
                        <p>Voiture bien entretenue</p>

                        <div className="action">
                            <Link className='linkcar' to={`../Modifcar/${carChek.id}`}><FaUserEdit className='icon' /></Link>
                            <Link className='linkcar'><MdAddBox className='icon' for="file" /></Link>
                        </div>
                        <div className="gallerypar">
                            <h3>Tous les images</h3>
                            <div className="gallery">
                                {image.map((fis) => (
                                    <img key={fis} src={URL.createObjectURL(fis)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarModifAd