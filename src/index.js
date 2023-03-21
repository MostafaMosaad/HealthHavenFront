import React from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n"
import App from './app/App';
import AuthContextProvider from './context/loginContext';
import role from './app/App'
import axios from 'axios'
import './index.css'
axios.defaults.baseURL="https://healthhaven.onrender.com/api"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider value={{role}}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
);

