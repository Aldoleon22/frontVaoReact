import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';
const Car = () => {
    const [carData, setcarData] =useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async () => {
        try {
            const vehicl =await axios.get("http://127.0.0.1:8000/api/listeVehicul")
            setcarData(vehicl.data.vehicules);
            console.log(vehicl);
        } catch (error) {
            console.log("verifier le code");
        }
    }

    //supprime
    const handDelete = async (id) =>{
        console.log(id);
        await  axios.delete('http://127.0.0.1:8000/api/cardelete/'+id);
        const newCarData = carData.filter((item)=>{
            return(
                item.id !== id
            )
        })
        setcarData(newCarData);
    }
  
    
    
    return (
        <>
    {

            carData.map((aff, i)=>{
                return(
                    <div className="car">
                <div className="img-car">
                <img src={`http://127.0.0.1:8000/storage/ImageVehicule/${aff.photo}`} alt="" className='image-car' />
            </div>
            <div className='desc'>
                <div className="desc-car">
                <p>Marque: <span>{aff.marque}</span></p>
                <p>Matricule: <span>{aff.matricule}</span></p>
            </div>
            <div className="action">
           
            </div>
            </div>
            </div>
                )
                
            })
            
        }
        </>
    )
}

export default Car