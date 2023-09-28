import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const notes = []
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App notes={notes} />
  )