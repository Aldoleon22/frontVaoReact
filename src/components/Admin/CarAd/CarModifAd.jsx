import React, { useEffect, useState } from 'react'
import './CarModifAd.scss'
import Image from '../../../assets/image/46.jpg'
import { FaUserEdit } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { MdAddBox, MdConnectedTv, MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
const CarModifAd = () => {
    // upload image
    const [image, setimage] = useState([]);
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        // accept: 'image/*',
        ondrop: (acceptedFiles) => {
            // console.log(acceptedFiles.path);
            setimage(acceptedFiles);
           
        },
    });
    //
    // fichier source
    const {id} = useParams();
    const [carChek, setcarCheck]=useState([]);
    const [Galerie,setGalerie] =useState([])
    useEffect(()=>{
        fetchCar();

    },[id])
    useEffect(()=>{
        fetchGal();

    },[id])

    const fetchCar=async()=>{
        try {
            const result=await axios.get("http://127.0.0.1:8000/api/listeVehicule/"+id);
            // console.log(result.data.car);
            setcarCheck(result.data.car);
        } catch (error) {
            console.log("verifier le code");
        }
    }

    const fetchGal = async()=>{
        const galView = await axios.get("http://127.0.0.1:8000/api/viewGalerie/"+id)
        console.log(galView.data.galerie);
        setGalerie(galView.data.galerie);
    }


    return (
        <div>
            <div className="desCar">
                <h1>Description du vehicule</h1>
                <div className="imagedesc">
                    <div className='image'>
                        <img src={`http://127.0.0.1:8000/storage/ImageVehicule/${carChek.photo}`} alt="" width={'200px'} />

                        <div className="cardescription">
                            <span>{carChek.marque}</span>
                            <span>{carChek.matricule}</span>
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
                                    <img key={fis} src={URL.createObjectURL(fis)} alt='upload' />
                                ))}
                                {/* {
                                    Galerie.map((gal, i)=>
                                    
                                    <img src={`http://127.0.0.1:8000/storage/GalerieVehicule/${gal.image}`} alt="" />
                                    )

                                } */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarModifAd