import './index.css';

import React from 'react';
import App from './app';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />  {/* rodando o App direto */}
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <MainRoutes /> {/* Aqui colocar as rotas */}
//     </BrowserRouter>
//   </React.StrictMode>
// );

reportWebVitals();