import React from 'react';
import { useAppContext } from '../context/AppContext';

const Favs = () => {
  const { state } = useAppContext();

  return (
    <div className={`favs-container ${state.theme}`}>
      {state.favorites.length > 0 ? (
        state.favorites.map((dentist) => (
          <div key={dentist.id}>
            <h2>{dentist.name}</h2>
            <p>Email: {dentist.email}</p>
            <p>Teléfono: {dentist.phone}</p>
            <p>Sitio web: {dentist.website}</p>
          </div>
        ))
      ) : (
        <p>No tienes dentistas destacados aún.</p>
      )}
    </div>
  );
};

export default Favs;