import React from 'react'
import Image from "../../../assets/image/46.jpg";
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const CarUser = () => {
    // const [car, setCar] = useState([]);
    // const {id}= useParams();
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/vehic')
    //         .then(response => {
    //             setCar(response.data.vehic);
    //             // console.log(response.data.vehic);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data: ', error);
    //         });
    // }, []);

    // const Del = (id) => {
    //     const carId = id;
    //     // console.log(id);
    //     axios.get(`http://127.0.0.1:8000/api/vehic/${carId}`)
    //     .then(() => {
    //         setCar(car.filter(car => car.id !== id));
    //     })
    //     .catch(error => {
    //         console.error('Error de la suppression car:', error);
    //     });
    // }
    // const up = (id)=>{
    //     axios.get(`http://127.0.0.1:8000/api/update/${id}`)
    // }

    return (
        <>
            <div className="car" >
                <div className="img-car">
                    <img src={Image} alt="" className='image-car' />
                </div>
                <div className='desc'>
                    <div className="desc-car">
                        <p>Marque: <span>HIUNDAY</span></p>
                        <p>Matricule: <span>1234 TBD</span></p>
                    </div>
                    <div className="action">
                        <Link className='modif' to='/Reservation'>Details</Link>
                        <Link className='suppr'>Supprimer</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarUser