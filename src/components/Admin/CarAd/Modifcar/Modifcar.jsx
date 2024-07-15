import React, { useEffect, useState } from 'react'
import './Modifcar.scss'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// import Input from '../../Form/Input'

const Modifcar = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [imgFile, setimgFile] = useState(null);
    const [carModif, setcarModif] = useState({
        marque:'',
        matricule:''
        // photo:null
    });
    

    useEffect(()=>{
        fetchModif();
    },[id])

    const carChange = (e) => {
        // const {name, value} = e.target;
        // setcarModif(prevState => ({
        //     ...prevState,
        //     [name]:value,
            
        // }));
        setcarModif({
            ...carModif,
            [e.target.name]:e.target.value
        });
    };

    const fileChange = (e) => {
        // setcarModif(prevState => ({
        //     ...prevState,
        //     photo: e.target.files[0],
        // }))
        setimgFile(e.target.files[0]);
    }

    const fetchModif=async()=>{
        try {
            const affiche=await axios.get("http://127.0.0.1:8000/api/listeVehicule/"+id);
            // console.log(affiche.data.car);
            setcarModif(affiche.data.car);
            
        } catch (error) {
            console.log("verifier le code");
        }
    }

    const modify=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('photo', imgFile);
            formData.append('marque', carModif.marque);
            formData.append('matricule', carModif.matricule);
        try {
            const bon = await axios.post("http://127.0.0.1:8000/api/updatCar/"+id, formData)
            navigate('/home');
            console.log(bon.data.message);
            
        } catch (error) {
            console.log(formData);
        }
    }
    return (
        <div className='carmodif'>
            <div className="formulaire">
                <h1>Modifier la vehicule</h1>
                <form method='post' encType='multipart/form-data'>
                    <div className="inplab">

                        <label htmlFor="">Marque:</label>
                        <input type="text" name='marque' placeholder='HIUNDAY' value={carModif.marque} onChange={carChange} />
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Matricule:</label>
                        <input type="text" placeholder='1234 TBA' name='matricule' value={carModif.matricule} onChange={carChange} />
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Description:</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Photo:</label>
                        <input type="file"  name='photo'  onChange={fileChange} />
                    </div>
                    <div className="inplab">
                        <input type="submit" onClick={modify} placeholder='Modifier'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modifcar