import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const resp = await api.post('sessions', { id });
      console.log(resp.data.name);
      //save the session on the storage of the navigator
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', resp.data.name);
      history.push('./profile');
    } catch (error) {
      alert("Can't make your login");
    }
  }

  return (
    <div className='login-container'>
      <section className='form'>
        <img src={logoImg} alt='Be the hero' />
        <form onSubmit={handleLogin}>
          <h1>Make your Login</h1>
          <input
            placeholder='Your Id'
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className='button' type='submit'>
            Login
          </button>
          <Link className='backlink' to='/register'>
            <FiLogIn size={16} color='#E02041' />
            Not registered
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt='Heroes' />
    </div>
  );
}
