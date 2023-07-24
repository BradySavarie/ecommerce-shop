import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App.tsx';

import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <WrappedApp />
  </React.StrictMode>
);
