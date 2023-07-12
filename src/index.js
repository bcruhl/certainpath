import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import { api } from './redux/api';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </StrictMode>
);
