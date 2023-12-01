// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
        {/* Otros elementos del menú */}
      </ul>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </nav>
  );
};

export default Navbar;