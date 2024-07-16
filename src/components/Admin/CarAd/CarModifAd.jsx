import React, { useEffect, useState, useCallback } from 'react';
import './CarModifAd.scss';
import { FaUserEdit } from "react-icons/fa";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const CarModifAd = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [carChek, setCarCheck] = useState([]);
    const [Galerie, setGalerie] = useState([]);
    const [acceptedFiles, setAcceptedFiles] = useState([]);

    const fetchCar = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/listeVehicule/" + id);
            setCarCheck(result.data.car);
        } catch (error) {
            console.log("Verifier le code");
        }
    }

    const fetchGal = async () => {
        try {
            const galView = await axios.get("http://127.0.0.1:8000/api/viewGalerie/" + id);
            setGalerie(galView.data.galerie);
        } catch (error) {
            console.log("Verifier le code");
        }
    }

    useEffect(() => {
        fetchCar();
        fetchGal();
    }, [id]);

    const handleUpload = async () => {
        const formData = new FormData();
        acceptedFiles.forEach(file => {
            formData.append('image', file);
        });
        // formData.append('id', carChek.id);
        const id = carChek.id;

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/addGalerie/`+id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading the file:', error);
        }
    }
    const onDrop = useCallback((acceptedFiles) => {
        setAcceptedFiles(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop
    });
    useEffect(() => {
        if (acceptedFiles.length > 0) {
            handleUpload();
        }
    }, [acceptedFiles]);

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
                            <Link className='linkcar' {...getRootProps({ className: 'linkcar' })}><MdAddBox className='icon' /></Link>
                            <input {...getInputProps()} name='image'/>
                        </div>
                        <div className="gallerypar">
                            <h3>Tous les images</h3>
                            <div className="gallery">
                                {acceptedFiles.map((file, index) => (
                                    <img key={index} src={URL.createObjectURL(file)} alt='upload' />
                                ))}
                                {Galerie.map((gal, i) => (
                                    <img key={i} src={`http://127.0.0.1:8000/storage/GalerieVehicule/${gal.image}`} alt="" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarModifAd;
