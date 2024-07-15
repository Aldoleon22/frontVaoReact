import React, { useEffect, useState } from 'react'
import Mod from '../Form/Mod'
import '../AjoutEngin/AjoutEngin.scss'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
function ModEngin() {
    const [carup, setcarup] = useState([])
    const { id } = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/update/' + id)
            .then(response => {
                setcarup(response.data.vehicup);
                // console.log(response.data.vehicup);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const [carupda, setCarupda] = useState({
        id: '',
        marque: '',
        matricule: '',
        sarytaloha: '',
    });

    const changeCarField = (e) => {
        setCarupda({
            ...carupda,
            [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
        });
    };


    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', carupda.id);
        formData.append('marque', carupda.marque);
        formData.append('matricule', carupda.matricule);
        formData.append('file', carupda.file);
        
        for (let key in carupda) {
            formData.append(key, carupda[key]);
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/carupdate', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('File uploaded successfully:', response.data);
            Navigate('/');
        } catch (err) {
            console.error('Error uploading file:', err);
            console.log('something went wrong');
        }
    }
    return (
        <div className='AjoutEngin'>

            <div className='Engin'>
                <span className="title">Modification de voiture</span>
                <form>
                    <div className='row'>
                        <div className='left'>
                            <input type="hidden" name='saryTaloha' value={carup.photo} />
                            <input type="hidden" name='id' value={carup.id} onChange={e => changeCarField(e)} />
                            <input type="text" placeholder={carup.marque} name="marque" className="input" onChange={e => changeCarField(e)} />
                            <input type="text" placeholder={carup.matricule} name="matricule" className="input" onChange={e => changeCarField(e)} />
                            <input type="file" name="file" onChange={event => changeCarField(event)} />
                        </div>
                    </div>
                    <input type="submit" onClick={e => handleSave(e)} className='submit' value='enregistrer' />
                </form>
            </div>
        </div>
    )
}

export default ModEngin