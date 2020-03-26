import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };
    //by default the axios sends the data as JSON
    try {
      const response = await api.post('ongs', data);
      alert(`Your Id is: ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert('Register error, please try again');
    }
  }
  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be a hero' />
          <h1>Register</h1>
          <p>
            Do your registration on the platform and help people to find the
            incidents of your ONG
          </p>
          <Link className='backlink' to='/'>
            <FiArrowLeft size={16} color='#E02041' />
            Back to the login
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='ONG Name'
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder='Whastapp'
          />
          <div className='input-group'>
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder='City'
            />
            <input
              maxLength='2'
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder='PC'
              style={{ width: 80 }}
            />
          </div>
          <button className='button' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
