import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Dash() {
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Error trying to delete the incident, please try again');
    }
  }

  useEffect(() => {
    api.get('profile', { headers: { Authorization: ongId } }).then(response => {
      setIncidents(response.data);
    });
  }, [ongId]);

  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Be the hero' />
        <span>Welcome to the page, {ongName}</span>
        <Link className='button' to='./incidents/new'>
          Add new case
        </Link>
        <button type='button' onClick={handleLogout}>
          <FiPower size={18} />
        </button>
      </header>
      <h1>Registered incidents</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Case</strong>
            <p>{incident.title}</p>
            <strong>Description</strong>
            <p>{incident.description}</p>
            <strong>Value</strong>
            <p>
              {Intl.NumberFormat('pt-pt', {
                style: 'currency',
                currency: 'EUR'
              }).format(incident.value)}
            </p>
            <button
              type='button'
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
