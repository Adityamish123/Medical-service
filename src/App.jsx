import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import FindBlood from "./pages/FindBlood.jsx";
import Donate from "./pages/Donate.jsx";
import About from "./pages/About.jsx";
import Camps from "./pages/Camps.jsx";
import Inventory from "./pages/BloodBank/Inventory";
import BloodBankDashboard from "./pages/BloodBank/BloodBankDashboard";

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
            <Route path="/find-blood" element={<FindBlood />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/camps" element={<Camps />} />
            <Route path="/bloodbank" element={<BloodBankDashboard />} />
            <Route path="/inventory" element={<Inventory />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
