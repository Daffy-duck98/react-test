import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/ui/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
