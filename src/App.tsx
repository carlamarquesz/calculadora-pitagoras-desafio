import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Routes'; 
import './App.css';
export default function App() { 
  return (
    <BrowserRouter>
      <AppRouter /> 
    </BrowserRouter>
  );
}
