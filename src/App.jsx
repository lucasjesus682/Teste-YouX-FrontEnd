import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Rota para o Login */}
          <Route path="/register" element={<Register />} /> {/* Rota para o Registro */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Rota inicial para o Login */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
