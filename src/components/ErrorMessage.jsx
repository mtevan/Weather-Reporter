// src/components/ErrorMessage.jsx
import React from 'react';
import '../styles/ErrorMessage.css';

function ErrorMessage({ message }) {
  return <div className="error-message">{message}</div>;
}

export default ErrorMessage;
