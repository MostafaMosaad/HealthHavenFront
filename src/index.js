import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import AuthContextProvider from './context/loginContext';
import role from './app/App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider value={{role}}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
);

