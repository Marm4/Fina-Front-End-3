import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    // Llamada a la API y actualización del contexto
    fetch('URL_DE_TU_API')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_API_DATA', payload: data });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Asegúrate de manejar las dependencias adecuadamente

  const addToFavorites = (dentist) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: dentist });
  };

  return (
    <div className={`home-container ${state.theme}`}>
      {state.apiData &&
        state.apiData.map((dentist) => (
          <div key={dentist.id}>
            <h2>{dentist.name}</h2>
            <p>Email: {dentist.email}</p>
            <p>Teléfono: {dentist.phone}</p>
            <p>Sitio web: {dentist.website}</p>
            <button onClick={() => addToFavorites(dentist)}>Agregar a favoritos</button>
          </div>
        ))}
    </div>
  );
};

export default Home;