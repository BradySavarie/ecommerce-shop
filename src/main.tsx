import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App.tsx';
import { DataContextProvider } from './components/DataContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataContextProvider>
      <WrappedApp />
    </DataContextProvider>
  </React.StrictMode>
);
