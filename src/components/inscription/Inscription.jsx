import React from 'react'
import {Form} from 'react-router-dom';
import './Inscription.scss'
import { FaLock } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import Input from '../Form/Input';
function Inscription() {
  return (
    <>
        <div className='Inscription'>
            <div className='form'>
            <span className="title">Inscription Client</span>
                <form> 
                    <div class="input-field">
                    <input
                        type="text"

                        placeholder = "Entrer votre nom"
                        name="nom"
                        className="soratra"
                    />

                    <i className="icon"><FaRegUser /></i>

                    </div>
                    <div className="input-field">
                    <input
                        type="email"
                        placeholder="Entrer votre email"
                        name="email"
                        className="soratra"
                    />
                        <i className="icon"><FaEnvelope /></i>
                    </div>
                    <div className="input-field">
                        <input
                            type = "password"
                            placeholder ="Confirmer votre mot de passe"
                            name = "mdp"
                            className="password soratra"

                        />
                        
                        <i className="icon"><FaLock /></i>
                        
                    </div>
                    <div className="input-field">
                        <input
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
    </>
  )
}

export default Inscription