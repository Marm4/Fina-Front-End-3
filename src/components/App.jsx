// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import DentistDetail from './DentistDetail';
import Contact from './Contact';
import Favs from './Favs';
import '../styles/styles.css';

function App() {
  return (
    <Router>
    <AppProvider>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dentist/:id" component={DentistDetail} />
        <Route path="/contacto" component={Contact} />
        <Route path="/favs" component={Favs} />
      </Switch>
      <Footer />
    </AppProvider>
  </Router>
  );
};

export default App;