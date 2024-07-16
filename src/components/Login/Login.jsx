
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../TokenContext';
import './Login.scss';
import { useContext, useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [, setIsToken] = useContext(TokenContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      if (response.data && response.data.access_token) {

        setIsToken(true);
        localStorage.setItem('accessToken', response.data.access_token);
        console.log(response.data.access_token);
        localStorage.setItem('userName', response.data.userName); // Stockez le nom de l'utilisateur
        localStorage.setItem('role', response.data.role);

        // Rediriger en fonction du statut de l'utilisateur
        const userStatus = response.data.role;
        const userName = response.data.userName;
        console.log(userStatus);


        switch (userStatus) {
          case 'superAdmin':
            console.log('Connecté en tant que SuperAdmin');
            navigate('/home');
            break;
          case 'admin':
            console.log('Connecté en tant qu Admin');
            navigate('/Homadmin/AdHome');
            break;
          default:
            console.log('Connecté en tant que User');
            navigate('/homeuser');
            navigate('/HomeUser/UserHome');
            break;
        }
      } else {
        setError('Invalid login details');
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className='content'>
      <div className="log">
        <h1 className="title_log">Se connecter</h1>
        <div className="formu">
          <form onSubmit={handleLogin}>
            <div className="inp">
              <label htmlFor="">Email:</label>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="inp">
              <label htmlFor="">Mot de passe:</label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="btnsub">
              <button type='submit'>Login</button>
            </div>

            {error && <p className='error'>{error}</p>}
          </form>
        </div>

      </div>

    </div>
  );
};

export default Login;
