import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Landing } from './Pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
