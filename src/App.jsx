import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import ServiceDetails from "./pages/service/ServiceDetails";
import Dashboard from "./pages/dashobard/Dashboard";
import Profile from "./pages/dashobard/Profile";
import Settings from "./pages/dashobard/Settings";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Notfound from "./pages/notfound/Notfound";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        
        <Route path="/dashboard/*" element={<Dashboard />} >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
    </Router>
  )
}

export default App
