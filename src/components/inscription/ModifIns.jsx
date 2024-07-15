import React, { useState } from 'react'
import Input from '../Form/Input';

function ModifIns() {
    const [nomUser, setNomUser] = useState('Nom User')
    const [password, setPasswrod] = useState('Mot de Passe')
    const [email, setEmail] = useState('email@email.com')
  return (
    <div className='Inscription'>
        <div className='form'>
        <span className="title">Modification Client</span>
            <form> 
                <div class="input-field">
                <Input
                    type="text"

                    placeholder = "Entrer votre nom"
                    name="nom"
                    className="soratra"
                />

                <i className="icon"><FaRegUser /></i>

                </div>
                <div className="input-field">
                <Input
                    type="email"
                    placeholder="Entrer votre email"
                    name="email"
                    className="soratra"
                />
                    <i className="icon"><FaEnvelope /></i>
                </div>
                <div className="input-field">
                    <Input
                        type = "password"
                        placeholder ="Confirmer votre mot de passe"
                        name = "mdp"
                        className="password soratra"

                    />
                    
                    <i className="icon"><FaLock /></i>
                    
                </div>
                <div className="input-field">
                    <Input
                        type = "password"
                        placeholder ="Confirmer votre mot de passe"
                        name="cmdp"
                        className="password soratra"
                    />
                    
                    
                    
                    <i className="icon"><FaLock /></i>
                    <i className="showHidePw"><FaRegEyeSlash /></i>
                </div>
            
            
                <div class="input-field button">
                    <input type="submit" value="Inscrire" name="inscrire"/>
                </div>
            </form>
        </div>

        
    </div>
  )
}

export default ModifIns