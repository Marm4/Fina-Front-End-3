import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
  theme: 'light',
  apiData: null,
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_API_DATA':
      return { ...state, apiData: action.payload };
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };