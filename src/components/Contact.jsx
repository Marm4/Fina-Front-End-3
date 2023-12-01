// Contact.jsx
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const { state } = useAppContext();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.fullName.length < 5 || !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setError('Por favor, verifique su información nuevamente');
      return;
    }

    // Lógica para enviar el formulario (puedes simular una solicitud a la API si es necesario)
    setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail.`);
  };

  return (
    <div className={`contact-container ${state.theme}`}>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Contact;