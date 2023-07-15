import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App.tsx';
import { DataContextProvider } from './components/DataContextProvider.tsx';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <DataContextProvider>
      <WrappedApp />
    </DataContextProvider>
  </React.StrictMode>
);
