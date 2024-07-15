import React from 'react'
import './Reservation.scss';
import Image from "../../../assets/image/46.jpg";

const Reservation = () => {
    return (
        <div className='content-res'>
            <h1 className='Title'> Faite Votre Reservation</h1>

            <div className="reservation">
                <div className="voiture">
                    <div className="image">
                        <img src={Image} alt="" />

                        <div className="album">
                            <img src={Image} alt="" />
                            <img src={Image} alt="" />
                            <img src={Image} alt="" />
                        </div>
                    </div>
                    <div className="desc">
                        <h2>HIUNDAY</h2>
                        <span>Matricule: 1234 TBD</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis numquam dignissimos aperiam provident dolor magnam laudantium veritatis vero sint?</p>
                        <span>Tarifs: 20.000Ar/j</span>
                    </div>
                </div>
                <div className="form">
                    <h1>Reserver</h1>
                    <form action="">
                        <div className="inpform">
                            <label htmlFor="">Email:</label>
                            <input type="email" />
                        </div>
                        <div className="inpform">
                            <label htmlFor="">Nom:</label>
                            <input type="text" />
                        </div>
                        <div className="inpform">
                            <label htmlFor="">Nbre Jours de location:</label>
                            <input type="number" />
                        </div>
                        <div className="inpform">
                            <label htmlFor="">Date:</label>
                            <input type="date" />
                        </div>
                        <div className="inpform">
                            <button type='submit'>Reserver</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reservation