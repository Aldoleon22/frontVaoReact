
import React, { useState, useEffect } from 'react';
import Close from '../assets/image/images.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Reserver from '../reservation/Reserver';
import './car.scss';

const ListeCar = () => {
    const [carData, setCarData] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/listeVehicul");
            setCarData(response.data.vehicules);
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        }
    };

    const toggleModal = (car = null) => {
        setSelectedCar(car);
        setModal(!modal);
    };

    return (
        <div className='content-element'>
            <section className='car section'>
                <div className='car__container container grid'>
                    {carData.map((car) => (
                        <div key={car.id} className='car__item'>
                            <h1>{car.marque}</h1>
                            <img
                                src={`http://127.0.0.1:8000/storage/ImageVehicule/${car.photo}`}
                                alt={car.marque}
                                className="car__img"
                            />
                            <div className='car__hover' onClick={() => toggleModal(car)}>
                                <div className="car__title">Marque: {car.marque}</div>
                                <div className="car__title">Matricule: {car.matricule}</div>
                                <div className="car__title">
                                        <Link to='/uservue/reserver'>Réserver</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {modal && selectedCar && (
                    <div className='car__modal'>
                        <div className='car__modal-content'>
                            <img
                                src={Close}
                                alt='Fermer'
                                className='modal__close'
                                onClick={() => toggleModal(null)}
                            />
                            <h3 className='modal__title'>Marque: {selectedCar.marque}</h3>
                            <ul className='modal__list grid'>
                                <li className='modal__item'>
                                    <Reserver />
                                </li>
                            </ul>
                            <img
                                src={`http://127.0.0.1:8000/storage/ImageVehicule/${selectedCar.photo}`}
                                alt={selectedCar.marque}
                                className='modal__img'
                            />
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default ListeCar;
