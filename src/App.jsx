import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";    
import HospitalDashboard from './pages/hospital/HospitalDashboard';
import Inventory from './pages/blood-bank/Inventory';
import BloodBankDashboard from './pages/blood-bank/BloodBankDashboard';
import Home from './pages/home';                
import Login from './pages/Login';
import Register from './pages/Register';
import FindBlood from './pages/FindBlood';      
import Donate from './pages/Donate';
import About from './pages/About';
import Camps from './pages/Camps';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        {/* Optionally add <NavBar /> here if you want global nav */}
        <main style={{ flex: 1, paddingTop: '20px', paddingBottom: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blood bank/dashboard" element={<BloodBankDashboard />} />
            <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
            <Route path="/find-blood" element={<FindBlood />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/camps" element={<Camps />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
