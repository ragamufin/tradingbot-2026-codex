import React from 'react';
import ReactDOM from 'react-dom/client';

import { OpsApp } from './ops-app';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OpsApp />
  </React.StrictMode>
);
