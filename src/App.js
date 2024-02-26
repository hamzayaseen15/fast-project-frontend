import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homePage';
import LoginSignup from './components/loginSignup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login-signup" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
