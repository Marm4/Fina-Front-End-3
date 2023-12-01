import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const DentistDetail = () => {
  const { id } = useParams();
  const { state } = useAppContext();

  const dentist = state.apiData.find((d) => d.id.toString() === id);

  return (
    <div className={`detail-container ${state.theme}`}>
      {dentist && (
        <div>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </div>
      )}
    </div>
  );
};

export default DentistDetail;