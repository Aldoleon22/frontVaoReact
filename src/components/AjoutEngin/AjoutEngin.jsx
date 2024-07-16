import React, { useState } from 'react'
import Input from '../Form/Input'
import './AjoutEngin.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function AjoutEngin() {
const [file, setFile] = useState(null);
const navigate =useNavigate();
const [dataCar, setDataCar] = useState({
    marque:'',
    matricule:''
});
const role = localStorage.getItem('role');
const fileChange = (e) => {
    setFile(e.target.files[0]);
};

const dataChange = (e) => {
    setDataCar({
        ...dataCar,
        [e.target.name]: e.target.value
    });
};

const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('marque', dataCar.marque);
    formData.append('matricule', dataCar.matricule);

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/addCar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (role === 'superAdmin') {
            navigate('/home');
        }else if(role === 'admin'){
            navigate('/Homadmin/AdHome');
        }
        console.log(response.data);
      } catch (error) {
        console.error('Error uploading the file:', error);
      }
}



  return (
    <div className='AjoutEngin'>

        <div className='Engin'>
        

            <form>
                <span className="title">Ajout de voiture</span>
                <div className='row'>
                    <div className='left'>
                    <input
                        type="text"

                        placeholder = "Marque de voiture"
                        name="marque"
                        className="input"
                        onChange={e => dataChange(e)}
                    />
                   
                    
                        <input
                            type="text"

                            placeholder = "matricule"
                            name="matricule"
                            className="input"
                            onChange={e => dataChange(e)}
                        />
                        <input type="file" name="photo" onChange={fileChange}/>                       

                    </div>
                </div>
                <input type="submit" value="Inscrire" name="inscrire" onClick={submit}/>

            </form>
        </div>
    </div>
  )
}

export default AjoutEngin