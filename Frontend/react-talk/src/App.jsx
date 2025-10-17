

import './App.css'
import React from 'react'
import Layout from './components/layout/layout.jsx'
import Navbar from './components/layout/navbar.jsx'
import Notification from './components/layout/notification.jsx'
import Footer from './components/layout/footer.jsx'
import ChatBot from './components/layout/chatBot.jsx'
import Home from './components/layout/home.jsx'
import About from './components/layout/about.jsx'
import { LoginPage } from './components/layout/login2.jsx'
import  Logo from './components/layout/logo.jsx'
import { RegisterPage } from './components/layout/Register.jsx'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [talkMode , setTalkMode] = React.useState(""); // "chat" or "mic"

  const handleTalkModeChange = (mode) => {
    setTalkMode(mode);
  }



  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    // initial check — if user was already logged in before refresh
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // ✅ persist in localStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // ✅ clear on logout
  };

  console.log("App component  mod:", talkMode);

  return (
    <Router>
      {isLoggedIn && <Navbar onLogout={handleLogout} passtalkMode= {talkMode}/>}
      {isLoggedIn && <Notification />}
      <Logo />

      <Routes>
        <Route exact path="/" element={<Home logged={isLoggedIn} handleTalkMode = {handleTalkModeChange} />} />
        <Route exact path="/voiceBot" element={<Layout />} />
        <Route exact path="/chatBot" element={<ChatBot />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

