
import React, { useState, useEffect } from 'react';
import Close from '../assets/image/images.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './car.scss';

const ListeCar = () => {
    const [carData, setCarData] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [datedebut, setDatedebut] = useState('');
    const [datefin, setDatefin] = useState('');
    const [error, setError] = useState('');
    const userId = localStorage.getItem('userId');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const id = selectedCar.id;
        try {
            const response = await axios.post(`http://localhost:8000/api/reservation/` + id, {
                datedebut: datedebut,
                datefin: datefin,
                userId: userId,
            });
            console.log('Réservation réussie:', response.data);
        } catch (error) {
            setError('Erreur lors de réservation');
            console.error('Erreur lors de réservation:', error);
        }
    };

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
                            <h1 className='modal__title'>Marque: {selectedCar.marque}</h1>
                            <ul className='modal__list grid'>
                                <li className='modal__item'>
                                    <div className='reservation'>
                                        <div className='datas'>
                                            <h5>Réservation de véhicule</h5>
                                            <form onSubmit={handleSubmit}>
                                                <input type="hidden" value={userId} readOnly />
                                                
                                                <div className='input'>
                                                    <label className='color'>Date de début</label><br />
                                                    <input
                                                        type="date"
                                                        placeholder="Date début de votre réservation"
                                                        className='soratra'
                                                        value={datedebut}
                                                        onChange={(e) => setDatedebut(e.target.value)}
                                                    />
                                                </div>
                                                <div className='input'>
                                                    <label className='color'>Date de fin</label><br />
                                                    <input
                                                        type="date"
                                                        placeholder="Date fin"
                                                        className='soratra'
                                                        value={datefin}
                                                        onChange={(e) => setDatefin(e.target.value)}
                                                    />
                                                </div>
                                                {error && <div className='error'>{error}</div>}
                                                <input type="submit" className='input-field' value="Enregistrer" />
                                            </form>
                                        </div>
                                    </div>
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