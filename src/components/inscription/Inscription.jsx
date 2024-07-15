import React, { useState } from 'react';
import axios from 'axios';
import './Inscription.scss';
import { FaLock, FaRegEyeSlash, FaEnvelope, FaRegUser } from "react-icons/fa";

function Register() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== cpassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        name: nom,
        email,
        password,
      });

      console.log('Inscription réussie:', response.data);
      // Redirection ou autre logique après inscription réussie

    } catch (error) {
      if (error.response) {
        // La requête a été faite et le serveur a répondu avec un statut code qui n'est pas dans les 2xx
        setError(`Erreur lors de l'inscription: ${error.response.data.message || error.response.data}`);
        console.error('Erreur lors de l\'inscription:', error.response.data);
      } else if (error.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        setError('Aucune réponse du serveur');
        console.error('Requête:', error.request);
      } else {
        // Quelque chose s'est passé en configurant la requête qui a déclenché une erreur
        setError('Erreur lors de l\'inscription');
        console.error('Erreur:', error.message);
      }
    }
  };
  return (
    <div className='register'>
      <div className='form'>
        <span className="title">Inscription Client</span>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Entrer votre nom"
              name="nom"
              className="soratra"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
            <i className="icon"><FaRegUser /></i>
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Entrer votre email"
              name="email"
              className="soratra"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="icon"><FaEnvelope /></i>
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Entrer votre mot de passe"
              name="password"
              className="password soratra"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="icon"><FaLock /></i>
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Confirmer votre mot de passe"
              name="cpassword"
              className="password soratra"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
            <i className="icon"><FaLock /></i>
            <i className="showHidePw"><FaRegEyeSlash /></i>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="input-field button">
            <input type="submit" value="Inscrire" name="inscrire" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
