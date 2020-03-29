import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();
  const ngoId = localStorage.getItem('ngoId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          authorization: ngoId
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Error trying to register incidence, try again.');
    }
  }
  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be a hero' />
          <h1>Register new case</h1>
          <p>Describe in detail the incident to find a hero to help!</p>
          <Link className='backlink' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' />
            Back to profile
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Title for the case'
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Description'
          />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Value in euros'
          />
          {/* <div className='button container'> */}
            {/* <button className='button' type='button'>
              Cancel
            </button> */}
            <button className='button' type='submit'>
              Register
            </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
